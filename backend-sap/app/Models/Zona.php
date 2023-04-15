<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Zona extends Model
{
    use HasFactory;
    protected $table = 'zonas';
    protected $primaryKey = 'id_zona';
    protected $fillable = [
        'nombre', 'nro_sitios', 'sitios', 'direccion', 'imagen', 'descripcion',
    ];
}
