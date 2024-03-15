<?php namespace Itome\Pricetable\Updates;

use Schema;
use Winter\Storm\Database\Updates\Migration;

class BuilderTableUpdateItomePricetableGenders extends Migration
{
    public function up()
{
    Schema::rename('itome_pricetable_gender', 'itome_pricetable_genders');
}

public function down()
{
    Schema::rename('itome_pricetable_genders', 'itome_pricetable_gender');
}
}
