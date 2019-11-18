<?php

namespace App\Http\Controllers;

use App\Focus;
use Illuminate\Http\Request;
use App\Http\Resources\FocusResource;

class FocusController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //$focuses = Focus::all();
        //return view('focuses.index', ['focuses' => $focuses]);
        //return Focus::all();
        return FocusResource::collection(Focus::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('focuses.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'description' => 'required'
        ]);

        return new FocusResource(Focus::create([
            'name' => $data['name'],
            'description' => $data['description']
        ]));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Focus  $focus
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Focus  $focus
     * @return \Illuminate\Http\Response
     */
    public function edit(Focus $focus)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Focus  $focus
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Focus $focus)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Focus  $focus
     * @return \Illuminate\Http\Response
     */
    public function destroy(Focus $focus)
    {
        $focus->delete();
        return response(null, 204);
    }
}
