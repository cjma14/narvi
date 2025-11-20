<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductImageController extends Controller
{
    /**
     * @OA\Post(
     *     path="/api/products/{productId}/images",
     *     summary="Subir imágenes de producto",
     *     description="Sube una o múltiples imágenes para un producto específico",
     *     tags={"Product Images"},
     *     security={{"bearerAuth": {}}},
     *     @OA\Parameter(
     *         name="productId",
     *         in="path",
     *         description="ID del producto",
     *         required=true,
     *         @OA\Schema(type="string", example="1")
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\MediaType(
     *             mediaType="multipart/form-data",
     *             @OA\Schema(
     *                 type="object",
     *                 @OA\Property(
     *                     property="images[]",
     *                     type="array",
     *                     @OA\Items(
     *                         type="string",
     *                         format="binary"
     *                     ),
     *                     description="Seleccione una o múltiples imágenes (jpeg, png, jpg, gif, webp - max 5MB cada una)"
     *                 )
     *             )
     *         )
     *     ),
     *     @OA\Response(response=401, description="No autenticado"),
     *     @OA\Response(response=404, description="Producto no encontrado"),
     *     @OA\Response(response=422, description="Error de validación")
     * )
     */
    public function store(Request $request, string $productId)
    {
        $product = Product::find($productId);

        // Validar si viene como array o como archivos individuales
        if (!$request->hasFile('images')) {
            return response()->json([
                'message' => 'No se han enviado imágenes',
                'errors' => ['images' => ['Debe enviar al menos una imagen']]
            ], 422);
        }

        // Normalizar la entrada - si viene un solo archivo, convertirlo en array
        $images = $request->file('images');

        if (!is_array($images)) {
            $images = [$images];
        }

        // Validar cada imagen
        foreach ($images as $image) {
            $validator = validator(['image' => $image], [
                'image' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:5120',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'message' => 'Error de validación en las imágenes',
                    'errors' => $validator->errors()
                ], 422);
            }
        }

        $uploadedImages = [];
        $currentMaxOrder = ProductImage::where('product_id', $product->id)->max('order') ?? 0;

        foreach ($images as $index => $image) {
            // Guardar imagen en storage/app/public/products
            $path = $image->store('products/' . $product->url_alias, 'public');

            // Crear registro en BD
            $productImage = ProductImage::create([
                'product_id' => $product->id,
                'path' => $path,
                'order' => $currentMaxOrder + $index + 1,
            ]);

            $uploadedImages[] = $productImage;
        }

        return response()->json([
            'message' => 'Imágenes subidas exitosamente',
            'images' => $uploadedImages,
        ], 201);
    }

    /**
     * @OA\Delete(
     *     path="/api/products/{productId}/images/{imageId}",
     *     summary="Eliminar imagen de producto",
     *     description="Elimina una imagen específica de un producto",
     *     tags={"Product Images"},
     *     security={{"bearerAuth": {}}},
     *     @OA\Parameter(
     *         name="productId",
     *         in="path",
     *         description="ID del producto",
     *         required=true,
     *         @OA\Schema(type="string", example="1")
     *     ),
     *     @OA\Parameter(
     *         name="imageId",
     *         in="path",
     *         description="ID de la imagen",
     *         required=true,
     *         @OA\Schema(type="string", example="1")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Imagen eliminada exitosamente",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Imagen eliminada exitosamente")
     *         )
     *     ),
     *     @OA\Response(response=401, description="No autenticado"),
     *     @OA\Response(response=404, description="Imagen no encontrada")
     * )
     */
    public function destroy(string $productId, string $imageId)
    {
        $product = Product::find($productId);
        $image = ProductImage::where('product_id', $product->id)
            ->where('id', $imageId)
            ->first();

        if (!$image) {
            return response()->json([
                'message' => 'Imagen no encontrada',
            ], 404);
        }

        // Eliminar archivo físico
        if (Storage::disk('public')->exists($image->path)) {
            Storage::disk('public')->delete($image->path);
        }

        // Eliminar registro de BD
        $image->delete();

        return response()->json([
            'message' => 'Imagen eliminada exitosamente',
        ], 200);
    }

    /**
     * @OA\Put(
     *     path="/api/products/{productId}/images/reorder",
     *     summary="Reordenar imágenes de producto",
     *     description="Actualiza el orden de visualización de las imágenes de un producto",
     *     tags={"Product Images"},
     *     security={{"bearerAuth": {}}},
     *     @OA\Parameter(
     *         name="productId",
     *         in="path",
     *         description="ID del producto",
     *         required=true,
     *         @OA\Schema(type="string", example="1")
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"images"},
     *             @OA\Property(
     *                 property="images",
     *                 type="array",
     *                 @OA\Items(
     *                     @OA\Property(property="id", type="integer", example=1, description="ID de la imagen"),
     *                     @OA\Property(property="order", type="integer", example=1, description="Nuevo orden")
     *                 )
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Orden de imágenes actualizado exitosamente",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Orden de imágenes actualizado exitosamente"),
     *             @OA\Property(property="images", type="array", @OA\Items(type="object"))
     *         )
     *     ),
     *     @OA\Response(response=401, description="No autenticado"),
     *     @OA\Response(response=404, description="Producto no encontrado"),
     *     @OA\Response(response=422, description="Error de validación")
     * )
     */
    public function reorder(Request $request, string $productId)
    {
        $product = Product::find($productId);

        if (!$product) {
            return response()->json([
                'message' => 'Producto no encontrado',
            ], 404);
        }

        $validated = $request->validate([
            'images' => 'required|array|min:1',
            'images.*.id' => 'required|exists:product_images,id',
            'images.*.order' => 'required|integer|min:0',
        ]);

        // Actualizar el orden de cada imagen
        foreach ($validated['images'] as $imageData) {
            ProductImage::where('id', $imageData['id'])
                ->where('product_id', $product->id)
                ->update(['order' => $imageData['order']]);
        }

        // Recargar imágenes ordenadas
        $product->load(['images' => function ($query) {
            $query->orderBy('order');
        }]);

        return response()->json([
            'message' => 'Orden de imágenes actualizado exitosamente',
            'images' => $product->images,
        ], 200);
    }
}
