<?php namespace Itome\Pricetable\Updates;

use Schema;
use Winter\Storm\Database\Updates\Migration;

class BuilderTableCreateItomePricetableServices extends Migration
{
    public function up()
{
    Schema::create('itome_pricetable_services', function($table)
    {
        $table->engine = 'InnoDB';
        $table->increments('id')->unsigned();
        $table->text('name');
        $table->string('time');
        $table->integer('price');
    });
}

public function down()
{
    Schema::dropIfExists('itome_pricetable_services');
}
}
