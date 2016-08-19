<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
use App\Pages;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/units', function () {
    return view('welcome');
});
Route::get('/units/edit/{id?}',function (){
    return view('welcome');
});
Route::group(array('prefix' => 'api'), function(){
    Route::get('/getUnits','UnitsController@getUnits');
    Route::get('/getPages/{unitId}','PagesController@getPages');
});