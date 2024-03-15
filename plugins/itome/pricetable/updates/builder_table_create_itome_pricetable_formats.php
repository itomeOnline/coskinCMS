<?php namespace Itome\Pricetable\Updates;

use Schema;
use Winter\Storm\Database\Updates\Migration;

class BuilderTableCreateItomePricetableFormats extends Migration
{
    public function up()
{
    Schema::create('itome_pricetable_formats', function($table)
    {
        $table->engine = 'InnoDB';
        $table->increments('id')->unsigned();
        $table->text('name');
    });
}

public function down()
{
    Schema::dropIfExists('itome_pricetable_formats');
}
}
