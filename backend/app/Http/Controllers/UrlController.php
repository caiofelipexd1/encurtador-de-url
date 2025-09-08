<?php

namespace App\Http\Controllers;

use App\Helpers;
use App\Models\Url;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

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

        return response()->json(["shortened_url" => $url]);
    }
}
