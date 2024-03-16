<?php namespace Itome\Pricetable\Controllers;

use Backend\Classes\Controller;
use BackendMenu;
use Request;
use Itome\Pricetable\Models\Services as ServicesModel;

class PriceTable extends Controller
{
    public $implement = [        'Backend\Behaviors\ListController',        'Backend\Behaviors\FormController',        'Backend\Behaviors\ReorderController'    ];
    
    public $listConfig = 'config_list.yaml';
    public $formConfig = 'config_form.yaml';
    public $reorderConfig = 'config_reorder.yaml';

    public function __construct()
    {
        parent::__construct();
        BackendMenu::setContext('Itome.Pricetable', 'main-menu-item', 'side-menu-item1');
    }

    public function onDublicate() 
    {
        $duclicateIds = Request::input('checked');

        foreach($duclicateIds as $id) {
            $serice = ServicesModel::where('id', '=', $id)->first(['name', 'time', 'price', 'gender_id', 'format_id'])->toArray();


            ServicesModel::create($serice);
        }
    }
}
