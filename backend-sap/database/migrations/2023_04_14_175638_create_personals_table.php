<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePersonalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('personals', function (Blueprint $table) {
            $table->id('id_personal');
            $table->string('nombre');
            $table->string('apellido');
            $table->string('dni');
            $table->binary('foto_perfil')->nullable();
            $table->string('direccion');
            $table->string('telefono');
            $table->string('email');
            $table->string('contraseña');
            $table->string('contraseña_confirmed');
            $table->integer('tipo_usuario')->default(0); //0 administrador, 1 operador, 2 guardia
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('personals');
    }
}
