<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Url extends Model
{
    public function hits(): HasMany
    {
        return $this->hasMany(Hit::class);
    }
}
