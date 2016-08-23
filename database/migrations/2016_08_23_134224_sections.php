<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Sections extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sections', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->longText('content');
            $table->integer('width');
            $table->integer('order');
            $table->timestamps();
            $table->integer('page_id')->unsigned();
        });
        Schema::table('sections', function ($table) {
            $table->foreign('page_id')
                  ->references('id')->on('pages')
                  ->onDelete('cascade');
        });
    }
    
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('pages');
    }
}
