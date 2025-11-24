<?php

namespace App\Http\Controllers;

use App\Helpers;
use App\Models\Hit;
use App\Models\Url;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UrlController extends Controller
{
    public function shorten(Request $request): JsonResponse
    {
        $request->validate([
            'url' => 'required|url|max:255',
        ]);

        $url = new Url();
        $url->original = urlencode($request->get('url'));
        $url->shortened = Helpers::generateShortenedCode();
        $url->expires_at = Carbon::now()->addDays(1);
        $url->active = true;
        $url->save();

        $url->original = urldecode($url->original);

        return response()->json(["url" => $url], 200);
    }

    public function show(string $shortened): JsonResponse
    {
        $data = ["url" => $shortened];
        $validator = Validator::make($data, [
            'url' => 'required|string|max:8',
        ]);

        if ($validator->fails()) {
            return response()->json(["errors" => $validator->errors()], 400);
        }

        $shortenedUrl = Url::where('shortened', $shortened)
            ->first();

        if (!$shortenedUrl) {
            return response()->json(null, 404);
        } else {
            Hit::create([
                "url_id" => $shortenedUrl->id,
            ]);
            $shortenedUrl->original = urldecode($shortenedUrl->original);
            return response()->json(["url" => $shortenedUrl]);
        }
    }
}
