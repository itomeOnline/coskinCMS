<?php namespace Itome\Pricetable\Updates;

use Schema;
use Winter\Storm\Database\Updates\Migration;

class BuilderTableUpdateItomePricetableGenders2 extends Migration
{
    public function up()
{
    Schema::table('itome_pricetable_genders', function($table)
    {
        $table->integer('sort_order')->nullable();
    });
}

public function down()
{
    Schema::table('itome_pricetable_genders', function($table)
    {
        $table->dropColumn('sort_order');
    });
}
}
