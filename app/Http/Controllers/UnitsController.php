<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use DB;

class UnitsController extends Controller
{
    //
    public function getUnits(){
        $units = DB::table('units')->orderBy('updated_at', 'desc')->get();
        return response()->json($units);
    }
    public function createUnit($name,$description){
        $createdAt = date('Y-m-d H:i:s');
        $units = DB::table('units')->insertGetId(['name'=>$name, 'description'=>$description, 'created_at' => $createdAt, 'updated_at' => $createdAt, 'user_id'=>1]);
        return response()->json($units);
    }
    public function updateUnit($id,$name,$description){
        $updatedAt = date('Y-m-d H:i:s');
        $units = DB::table('units')->where('id', $id)
                                   ->update(['name'=>$name,'description'=>$description,'updated_at'=>$updatedAt]);
        return response()->json($units);
    }
}
