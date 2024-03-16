<?php namespace Itome\Pricetable\Models;

use Model;

/**
 * Model
 */
class Services extends Model
{
    use \Winter\Storm\Database\Traits\Validation;
    use \October\Rain\Database\Traits\Sortable;

    /*
     * Disable timestamps by default.
     * Remove this line if timestamps are defined in the database table.
     */
    public $timestamps = false;


    /**
     * @var string The database table used by the model.
     */
    public $table = 'itome_pricetable_services';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];

    protected $fillable = ['name', 'time', 'price', 'gender_id', 'format_id'];
   

    public $belongsTo = [
        'gender' => [
            "Itome\Pricetable\Models\Genders",
            'key'      => 'gender_id',
        ],
        'format' => [
            "Itome\Pricetable\Models\Formats",
            'key'      => 'format_id',
        ],
    ];
}
