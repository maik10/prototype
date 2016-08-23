<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use DB;

class UnitsController extends Controller
{
    //
    public function getUnits(){
        $units = DB::table('units')->get();
        return response()->json($units);
    }
    public function createUnit($name,$description){
        $createdAt = date('Y-m-d H:i:s');
        $units = DB::table('units')->insertGetId(['name'=>$name, 'description'=>$description, 'created_at' => $createdAt, 'updated_at' => $createdAt, 'user_id'=>1]);
        return response()->json($units);
    }
}
