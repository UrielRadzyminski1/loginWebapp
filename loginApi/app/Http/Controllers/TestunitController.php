<?php

namespace App\Http\Controllers;

use App\Models\Testunit;
use Illuminate\Http\Request;

class TestunitController extends Controller
{
    public function store()
    {
        $testunit = new Testunit();
        $testunit->data = request('data');
        $testunit->save();
        return ("hola!");
    }
}
