<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Focus extends Model
{
    protected $primaryKey = 'focusId';

    protected $fillable = array('name', 'description');

    public function analyzers() {
        return $this->hasMany('Analyzer');
    }

    public $timestamps = false;
    protected $table = 'focus';
}
