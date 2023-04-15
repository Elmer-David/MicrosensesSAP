<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Parqueo extends Model
{
    use HasFactory;
    protected $table = 'parqueos';
    protected $primaryKey = 'id_parqueo';
    protected $fillable = [
        'nombre', 'tarifa_anual', 'tarifa_mensual', 'descripcion', 
    ];
}
