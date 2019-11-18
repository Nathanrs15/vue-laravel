<?php

use App\Analyzer;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $this->call(FocusSeeder::class);
    }
}

class FocusSeeder extends Seeder
{

    public function run()
    {

        DB::table('users')->insert(
            array(
                [
                    'name' => 'Admin',
                    'email' => 'admin@test.com',
                    'password' => Hash::make('admin'),
                    'roleId' => 1
                ],
                [
                    'name' => 'User',
                    'email' => 'user@test.com',
                    'password' => Hash::make('user'),
                    'roleId' => 2
                ]
            )
        );

        DB::table('roles')->insert(
            array(
                ['role' => 'Administrator'],
                ['role' => 'User']
            )
        );

        DB::table('focus')->insert(
            array(
                ['name' => 'Focus 1', 'description' => 'First focus'],
                ['name' => 'Focus 2', 'description' => 'Second focus'],
                ['name' => 'Focus 3', 'description' => 'Third focus'],
                ['name' => 'Focus 4', 'description' => 'Fourth focus'],
                ['name' => 'Focus 5', 'description' => 'Some focus'],
                ['name' => 'Focus 6', 'description' => 'Some focus'],
                ['name' => 'Focus 7', 'description' => 'Some focus'],
                ['name' => 'Focus 8', 'description' => 'Some focus'],
                ['name' => 'Focus 9', 'description' => 'Some focus'],
                ['name' => 'Focus 10', 'description' => 'Some focus'],
                ['name' => 'Focus 11', 'description' => 'Some focus'],
                ['name' => 'Focus 12', 'description' => 'Some focus'],
                ['name' => 'Focus 13', 'description' => 'Some focus'],
                ['name' => 'Focus 14', 'description' => 'Some focus'],
                ['name' => 'Focus 15', 'description' => 'Some focus'],
                ['name' => 'Focus 16', 'description' => 'Some focus'],
                ['name' => 'Focus 17', 'description' => 'Some focus'],
                ['name' => 'Focus 18', 'description' => 'Some focus'],
                ['name' => 'Focus 19', 'description' => 'Some focus'],

            )

        );

        DB::table('analyzer')->insert(
            array(
                ['focusId' => 1, 'manufacturer' => 'ESP', 'model' => 'LTD Iron Cross'],
                ['focusId' => 1, 'manufacturer' => 'ESP', 'model' => 'LTD Snakebite'],
                ['focusId' => 1, 'manufacturer' => 'ESP', 'model' => 'LTD Black V'],
                ['focusId' => 2, 'manufacturer' => 'ESP', 'model' => 'LTD Kirk Hammett']
            )
        );
    }
}
