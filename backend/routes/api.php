<?php

use App\Http\Controllers\UrlController;
use Illuminate\Support\Facades\Route;

Route::get('/test', function () {
    return response()->json(["working" => true]);
});

Route::post('/shorten', [UrlController::class, 'shorten']);
