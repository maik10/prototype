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
}
