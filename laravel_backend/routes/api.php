<?php

use App\Http\Controllers\Auth\AuthController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes — Sahteh / Serene Path
|--------------------------------------------------------------------------
|
| All routes here are prefixed with /api automatically via bootstrap/app.php
|
*/

// ── Public auth routes ────────────────────────────────────────────────────
Route::prefix('auth')->group(function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login',    [AuthController::class, 'login']);
});

// ── Protected routes (require Sanctum token) ─────────────────────────────
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/auth/logout', [AuthController::class, 'logout']);
    Route::get('/auth/me',      [AuthController::class, 'me']);

    // Future protected endpoints go here:
    // Route::apiResource('moods', MoodController::class);
    // Route::apiResource('sessions', SessionController::class);
});
