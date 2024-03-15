<?php namespace Itome\Pricetable\Updates;

use Schema;
use Winter\Storm\Database\Updates\Migration;

class BuilderTableCreateItomePricetableGender extends Migration
{
    public function up()
{
    Schema::create('itome_pricetable_gender', function($table)
    {
        $table->engine = 'InnoDB';
        $table->increments('id')->unsigned();
        $table->string('name');
    });
}

public function down()
{
    Schema::dropIfExists('itome_pricetable_gender');
}
}
