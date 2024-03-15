<?php namespace Itome\Pricetable\Updates;

use Schema;
use Winter\Storm\Database\Updates\Migration;

class BuilderTableUpdateItomePricetableServices2 extends Migration
{
    public function up()
{
    Schema::table('itome_pricetable_services', function($table)
    {
        $table->integer('format_id');
    });
}

public function down()
{
    Schema::table('itome_pricetable_services', function($table)
    {
        $table->dropColumn('format_id');
    });
}
}
