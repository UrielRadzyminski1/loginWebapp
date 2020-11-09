<?php

namespace Database\Factories;

use App\Models\Article;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

class ArticleFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Article::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {   
        $content = $this->faker->paragraph(20);
        $word_count = str_word_count($content);
        $read_time = intdiv($word_count, 200);
        return [
            'title' => $this->faker->sentence(6),
            'content' => $content,
            'word_count' => $word_count,
            'read_time' => $read_time,
            'user_id'=> User::inRandomOrder()->first(),
        ];
    }
}
