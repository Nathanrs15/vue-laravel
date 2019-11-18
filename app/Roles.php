<?php


namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Roles extends Model
{

    protected $primaryKey = 'Id';

    protected $fillable = array('role');

    public function users()
    {
        return $this->hasMany(User::class);
    }

}
