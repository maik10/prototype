<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use DB;

class UnitsController extends Controller
{
    //
    public function getUnits(){
        $units = DB::table('Units')->get();
        return response()->json($units);        
    }
}
