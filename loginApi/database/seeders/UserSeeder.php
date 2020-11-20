<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;


class UserSeeder extends Seeder
{
  public function run()
  {
    User::factory(1)->create([
      'email'=>'test@test.test'
    ]);
    User::factory(4)->create();
  }
  
}