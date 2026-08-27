<?php

namespace App\Http\Controllers;

use App\Services\ImageService;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;

class ImageController extends Controller
{
    public function __construct(
        protected ImageService $imageService
    ) {}

    /**
     * @OA\Post(
     *     path="/api/images",
     *     summary="Subir imagen (portada o cuerpo)",
     *     description="Sube una imagen JPG/PNG/AVIF, la convierte a AVIF y devuelve la URL absoluta.",
     *     tags={"Images"},
     *     security={{"bearerAuth": {}}},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\MediaType(
     *             mediaType="multipart/form-data",
     *             @OA\Schema(
     *                 required={"image", "type"},
     *                 @OA\Property(property="image", type="string", format="binary", description="Archivo JPG, PNG o AVIF"),
     *                 @OA\Property(property="type", type="string", enum={"cover", "body"}, description="Tipo de imagen")
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Imagen subida exitosamente",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Imagen subida exitosamente"),
     *             @OA\Property(property="image", type="object",
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="url", type="string", example="http://localhost:6650/storage/images/body/2026/08/01HXYZ.avif"),
     *                 @OA\Property(property="width", type="integer", example=1600),
     *                 @OA\Property(property="height", type="integer", example=900),
     *                 @OA\Property(property="type", type="string", example="body")
     *             )
     *         )
     *     ),
     *     @OA\Response(response=401, description="No autenticado"),
     *     @OA\Response(response=422, description="Error de validación")
     * )
     */
    public function store(Request $request)
    {
        $maxKb = config('images.max_upload_kb', 10240);

        $validated = $request->validate([
            'image' => [
                'required',
                'file',
                'max:' . $maxKb,
                function (string $attribute, mixed $value, Closure $fail) {
                    if ($value instanceof UploadedFile) {
                        $this->imageService->assertAllowedMime($value, $fail);
                    }
                },
                function (string $attribute, mixed $value, Closure $fail) use ($request) {
                    if ($request->input('type') !== 'cover' || !($value instanceof UploadedFile)) {
                        return;
                    }

                    $this->imageService->assertCoverRatio($value, $fail);
                },
            ],
            'type' => 'required|string|in:cover,body',
        ]);

        $image = $this->imageService->store(
            $request->file('image'),
            $validated['type'],
            $request->user()?->id
        );

        return response()->json([
            'message' => 'Imagen subida exitosamente',
            'image' => [
                'id' => $image->id,
                'url' => $image->url,
                'width' => $image->width,
                'height' => $image->height,
                'type' => $image->type,
                'path' => $image->path,
            ],
        ], 201);
    }
}
