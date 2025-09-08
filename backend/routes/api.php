<?php

use App\Http\Controllers\UrlController;
use Illuminate\Support\Facades\Route;

Route::get('/test', function () {
    return response()->json(["working" => true]);
});

Route::post('/url/shorten', [UrlController::class, 'shorten']);
Route::get('/url/{shortened}', [UrlController::class, 'show']);
