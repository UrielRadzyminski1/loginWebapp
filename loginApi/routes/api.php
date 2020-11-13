<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestunitController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\ArticleController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



//User routes
Route::middleware('auth:api')->get('/user', function (Request $request) {
    $user = $request->user();
    $user->scope = $user->permissions->pluck('name')->toArray();
    return $user;
});

Route::middleware('auth:api')->post('/logout', [AuthController::class, 'logout']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
//End user routes




//articles routes

//Get article list:
Route::get('/articles', [ArticleController::class, 'index']);

//Get individual article information
Route::get('/articles/{article}', [ArticleController::class, 'show']);

//Submit new article
Route::middleware('permission:create articles')->post('/articles', [ArticleController::class, 'store']);

//Get articles by user
Route::get('/{user}/articles', [ArticleController::class, 'getByUser']);
/* Route::get('/user', [AuthController::class, 'user']); */
//End articles routes




/* Route::post('test/create', [TestunitController::class, 'store']); */