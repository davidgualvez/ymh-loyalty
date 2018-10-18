<?php

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

Route::get('/', 							function(){		return view('pages.transactions');		});

Route::get('/profile', 						function(){ 	return view('pages.settings'); 			});
Route::get('/profile/personal-information', function(){ 	return view('pages.personal'); 			});
Route::get('/profile/security', 			function(){ 	return view('pages.security'); 			});
Route::get('/profile/motors', 				function(){ 	return view('pages.motors'); 			});

Route::get('/login', 						function(){		return view('pages.login'); 			});
Route::get('/signup', 						function(){		return view('pages.signup'); 			});
Route::get('/forgot_password', 				function(){		return view('pages.forgot_password');   });
Route::get('/shop', 						function(){		return view('pages.rewards');			});
Route::get('/shop/reward', 					function(){		return view('pages.reward');			});
Route::get('/reward_detail', 				function(){		return view('pages.reward_detail');		});
Route::get('/shipment', 					function(){		return view('pages.shipment'); 			});
