<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Analyzer extends Model
{
    //
    protected $primaryKey = 'analyzerId';
    protected $fillable = array('focusId', 'manufacturer', 'model');

    public function focus() {
        return $this->belongsTo('Focus', 'foreign_key');
    }

    public $timestamps = false;


}
