<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', ['as'=> 'home', 'uses'=>'App\Http\Controllers\HomeController@show']);
Route::get('/about', ['as'=> 'about', 'uses'=>'App\Http\Controllers\AboutController@show']);
Route::get('/properties', ['as'=> 'properties', 'uses'=>'App\Http\Controllers\PropertiesController@show']);
Route::get('/contact', ['as'=> 'contact', 'uses'=>'App\Http\Controllers\ContactController@show']);