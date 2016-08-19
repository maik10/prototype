<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;

class Pages extends Model
{
    //
    public static function getPages($unitID){
        return response()->json(PagesModel::where('Units_id',$unitID)); 
    }
}
