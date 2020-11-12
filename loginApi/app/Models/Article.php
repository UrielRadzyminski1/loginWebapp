<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'title',
        'content',
        'user_id',
        'word_count',
        'read_time',
    ];

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
}
