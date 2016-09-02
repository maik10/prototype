<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use DB;

class PagesController extends Controller
{
    //
    public function getPages($unitID){

        $pages = DB::table('pages')->where('unit_id',$unitID)->get();
        return response()->json($pages);        
    }
    public function create($name,$unit){
        $createdAt = date('Y-m-d H:i:s');
        $units = DB::table('pages')->insertGetId(['name'=>$name, 'unit_id'=>$unit, 'created_at' => $createdAt, 'updated_at' => $createdAt]);
        return response()->json($units);
    }
}
