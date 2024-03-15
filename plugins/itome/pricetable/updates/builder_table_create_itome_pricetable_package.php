<?php namespace Itome\Pricetable\Updates;

use Schema;
use Winter\Storm\Database\Updates\Migration;

class BuilderTableCreateItomePricetablePackage extends Migration
{
    public function up()
{
    Schema::create('itome_pricetable_package', function($table)
    {
        $table->engine = 'InnoDB';
        $table->increments('id')->unsigned();
        $table->text('name');
        $table->integer('discount_percentage')->default(0);
    });
}

public function down()
{
    Schema::dropIfExists('itome_pricetable_package');
}
}
