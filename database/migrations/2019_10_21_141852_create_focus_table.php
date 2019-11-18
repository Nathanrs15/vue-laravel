<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFocusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('focus', function (Blueprint $table) {
            $table->bigIncrements('focusId');
            $table->string('name');
            $table->string('description');
            // $table->timestamps();
        });

        Schema::create('analyzer', function (Blueprint $table)
        {
            $table->bigIncrements('analyzerId');
            $table->integer('focusId');
            $table->string('manufacturer');
            $table->string('model');
            // $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('focus');
        Schema::dropIfExists('analyzer');

    }
}
