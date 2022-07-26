<?php

use App\Http\Controllers\CbtController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

// Route::get('/', function () {
//     return Inertia::render('Welcome_Page');
// });

Route::get('/', function () {
    return Inertia::render('Home', [
        'title' => 'SmartEngTest',
    ]);
});

Route::get('/cbt', [CbtController::class, 'index']);

Route::get('/test-dashboard', [CbtController::class, 'dashboard']);

Route::get('/cbt_start', [CbtController::class, 'CbtStart']);

Route::get('/start_test', [CbtController::class, 'StartTest']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';
