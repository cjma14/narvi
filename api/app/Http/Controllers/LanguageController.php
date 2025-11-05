<?php

namespace App\Http\Controllers;

use App\Models\Language;
use Illuminate\Http\Request;

class LanguageController extends Controller
{
    /**
     * @OA\Get(
     *     path="/api/languages",
     *     summary="Listar idiomas",
     *     description="Obtiene todos los idiomas disponibles en el sistema",
     *     tags={"Languages"},
     *     @OA\Response(
     *         response=200,
     *         description="Lista de idiomas",
     *         @OA\JsonContent(
     *             @OA\Property(property="languages", type="array",
     *                 @OA\Items(
     *                     @OA\Property(property="id", type="integer", example=1),
     *                     @OA\Property(property="code", type="string", example="es"),
     *                     @OA\Property(property="name", type="string", example="Español"),
     *                     @OA\Property(property="created_at", type="string", format="date-time"),
     *                     @OA\Property(property="updated_at", type="string", format="date-time")
     *                 )
     *             )
     *         )
     *     )
     * )
     */
    public function index()
    {
        $languages = Language::all();

        return response()->json([
            'languages' => $languages,
        ], 200);
    }
}
