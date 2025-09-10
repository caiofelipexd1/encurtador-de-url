<?php

namespace App;

use App\Models\Url;
use Illuminate\Support\Str;

class Helpers
{
    static public function generateShortenedCode(): string {
        do {
            $code = Str::random(6);
            $codeExistsAndIsActive = Url::where('shortened', $code)
                ->where('active', 1)
                ->exists();
        } while ($codeExistsAndIsActive);

        return $code;
    }
}
