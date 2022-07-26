<?php

namespace App\Http\Controllers;

use App\Models\cbt;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CbtController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Cbt', [
            'title' => 'Computer Based Test',
        ]);
    }

    public function dashboard()
    {
        return Inertia::render('TestDashboard', [
            'title' => 'CBT Dashboard',
        ]);
    }

    public function CbtStart()
    {
        return Inertia::render('CbtStart', [
            'title' => 'CBT Start Test',
        ]);
    }

    public function StartTest()
    {
        return Inertia::render('StartTest', [
            'title' => 'CBT Test',
        ]);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\cbt  $cbt
     * @return \Illuminate\Http\Response
     */
    public function show(cbt $cbt)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\cbt  $cbt
     * @return \Illuminate\Http\Response
     */
    public function edit(cbt $cbt)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\cbt  $cbt
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, cbt $cbt)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\cbt  $cbt
     * @return \Illuminate\Http\Response
     */
    public function destroy(cbt $cbt)
    {
        //
    }
}
