<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use DB;
use App\Quotation;
use Illuminate\Support\Collection;

class UserController extends Controller
{
    public function index()
    {
        // $users = User::all();

        $userRoles = DB::table('users')
            ->join('roles', 'users.roleId', '=', 'roles.id')
            ->select('users.id','users.name', 'users.email','roles.role')
            ->get();

        return response()->json(
            [
                'status' => 'success',
                'users' => $userRoles->toArray()
            ],
            200
        );
    }
    public function show(Request $request, $id)
    {
        $user = User::find($id);
        return response()->json(
            [
                'status' => 'success',
                'user' => $user->toArray()
            ],
            200
        );
    }
}
