<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * @OA\Get(
     *     path="/api/products",
     *     summary="Listar productos",
     *     description="Obtiene una lista paginada de productos con sus imágenes",
     *     tags={"Products"},
     *     security={{"bearerAuth": {}}},
     *     @OA\Parameter(
     *         name="per_page",
     *         in="query",
     *         description="Número de productos por página",
     *         required=false,
     *         @OA\Schema(type="integer", default=15, example=15)
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Lista de productos",
     *         @OA\JsonContent(
     *             @OA\Property(property="current_page", type="integer", example=1),
     *             @OA\Property(property="data", type="array",
     *                 @OA\Items(
     *                     @OA\Property(property="id", type="integer", example=1),
     *                     @OA\Property(property="title", type="string", example="Producto Premium"),
     *                     @OA\Property(property="description", type="string", example="Descripción del producto"),
     *                     @OA\Property(property="primary_button_url", type="string", example="https://example.com/buy"),
     *                     @OA\Property(property="primary_button_title", type="string", example="Comprar"),
     *                     @OA\Property(property="secondary_button_url", type="string", example="https://example.com/info"),
     *                     @OA\Property(property="secondary_button_title", type="string", example="Más información"),
     *                     @OA\Property(property="specifications", type="array", @OA\Items(type="string")),
     *                     @OA\Property(property="images", type="array", @OA\Items(
     *                         @OA\Property(property="id", type="integer", example=1),
     *                         @OA\Property(property="path", type="string", example="products/image.jpg"),
     *                         @OA\Property(property="order", type="integer", example=1)
     *                     ))
     *                 )
     *             ),
     *             @OA\Property(property="per_page", type="integer", example=15),
     *             @OA\Property(property="total", type="integer", example=50)
     *         )
     *     )
     * )
     */
    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 15);
        $products = Product::with('images')->paginate($perPage);

        return response()->json($products, 200);
    }

    /**
     * @OA\Post(
     *     path="/api/products",
     *     summary="Crear producto",
     *     description="Crea un nuevo producto con soporte para traducciones multiidioma",
     *     tags={"Products"},
     *     security={{"bearerAuth": {}}},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"title", "url_alias"},
     *             @OA\Property(property="title", type="string", maxLength=255, example="Producto Premium"),
     *             @OA\Property(property="url_alias", type="string", maxLength=255, example="producto-premium"),
     *             @OA\Property(property="description", type="string", example="Descripción detallada del producto"),
     *             @OA\Property(property="primary_button_url", type="string", format="url", example="https://example.com/buy"),
     *             @OA\Property(property="primary_button_title", type="string", maxLength=255, example="Comprar ahora"),
     *             @OA\Property(property="secondary_button_url", type="string", format="url", example="https://example.com/info"),
     *             @OA\Property(property="secondary_button_title", type="string", maxLength=255, example="Más información"),
     *             @OA\Property(property="specifications", type="array", @OA\Items(type="string", example="Alta calidad")),
     *             @OA\Property(property="translations", type="object",
     *                 description="Traducciones opcionales por código de idioma",
     *                 @OA\Property(property="en", type="object",
     *                     @OA\Property(property="title", type="string", example="Premium Product"),
     *                     @OA\Property(property="url_alias", type="string", example="premium-product"),
     *                     @OA\Property(property="description", type="string", example="Detailed product description"),
     *                     @OA\Property(property="primary_button_title", type="string", example="Buy now"),
     *                     @OA\Property(property="secondary_button_title", type="string", example="More info"),
     *                     @OA\Property(property="specifications", type="array", @OA\Items(type="string"))
     *                 )
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Producto creado exitosamente",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Producto creado exitosamente"),
     *             @OA\Property(property="product", type="object")
     *         )
     *     ),
     *     @OA\Response(response=401, description="No autenticado"),
     *     @OA\Response(response=422, description="Error de validación")
     * )
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'url_alias' => 'required|string|max:255|unique:products,url_alias',
            'description' => 'nullable|string',
            'primary_button_url' => 'nullable|string|url',
            'primary_button_title' => 'nullable|string|max:255',
            'secondary_button_url' => 'nullable|string|url',
            'secondary_button_title' => 'nullable|string|max:255',
            'specifications' => 'nullable|array',
            'specifications.*' => 'string',
            
            // Traducciones opcionales (formato: translations.{lang_code}.{field})
            'translations' => 'nullable|array',
            'translations.*' => 'array',
            'translations.*.title' => 'nullable|string|max:255',
            'translations.*.url_alias' => 'nullable|string|max:255',
            'translations.*.description' => 'nullable|string',
            'translations.*.primary_button_title' => 'nullable|string|max:255',
            'translations.*.secondary_button_title' => 'nullable|string|max:255',
            'translations.*.specifications' => 'nullable|array',
        ]);

        // Crear producto con datos en español (por defecto)
        $product = Product::create([
            'title' => $validated['title'],
            'url_alias' => $validated['url_alias'],
            'description' => $validated['description'] ?? null,
            'primary_button_url' => $validated['primary_button_url'] ?? null,
            'primary_button_title' => $validated['primary_button_title'] ?? null,
            'secondary_button_url' => $validated['secondary_button_url'] ?? null,
            'secondary_button_title' => $validated['secondary_button_title'] ?? null,
            'specifications' => $validated['specifications'] ?? null,
        ]);

        // Guardar traducciones si se proporcionaron
        if (isset($validated['translations'])) {
            foreach ($validated['translations'] as $langCode => $fields) {
                foreach ($fields as $field => $value) {
                    $product->saveTranslation($field, $value, $langCode);
                }
            }
        }

        // Recargar con imágenes
        $product->load('images');

        return response()->json([
            'message' => 'Producto creado exitosamente',
            'product' => $product,
        ], 201);
    }

    /**
     * @OA\Get(
     *     path="/api/products/{id}",
     *     summary="Obtener producto para edición",
     *     description="Obtiene los detalles de un producto con todas sus traducciones estructuradas",
     *     tags={"Products"},
     *     security={{"bearerAuth": {}}},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID del producto",
     *         required=true,
     *         @OA\Schema(type="string", example="1")
     *     ),
     *     @OA\Response(response=404, description="Producto no encontrado")
     * )
     */
    public function show(string $id, Request $request)
    {
        $product = Product::with('images')->find($id);
        $product->loadTranslationsAttribute();

        return response()->json([
            'product' => $product,
        ], 200);
    }

    /**
     * @OA\Put(
     *     path="/api/products/{id}",
     *     summary="Actualizar producto",
     *     description="Actualiza un producto existente con sus traducciones",
     *     tags={"Products"},
     *     security={{"bearerAuth": {}}},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID del producto",
     *         required=true,
     *         @OA\Schema(type="string", example="1")
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"title", "url_alias"},
     *             @OA\Property(property="title", type="string", maxLength=255, example="Producto Premium Actualizado"),
     *             @OA\Property(property="url_alias", type="string", maxLength=255, example="producto-premium-actualizado"),
     *             @OA\Property(property="description", type="string", example="Nueva descripción del producto"),
     *             @OA\Property(property="primary_button_url", type="string", format="url", example="https://example.com/buy"),
     *             @OA\Property(property="primary_button_title", type="string", maxLength=255, example="Comprar ahora"),
     *             @OA\Property(property="secondary_button_url", type="string", format="url", example="https://example.com/info"),
     *             @OA\Property(property="secondary_button_title", type="string", maxLength=255, example="Más información"),
     *             @OA\Property(property="specifications", type="array", @OA\Items(type="string", example="Característica actualizada")),
     *             @OA\Property(property="translations", type="object",
     *                 description="Traducciones opcionales por código de idioma",
     *                 @OA\Property(property="en", type="object",
     *                     @OA\Property(property="title", type="string", example="Updated Premium Product"),
     *                     @OA\Property(property="url_alias", type="string", example="updated-premium-product"),
     *                     @OA\Property(property="description", type="string", example="New product description"),
     *                     @OA\Property(property="primary_button_title", type="string", example="Buy now"),
     *                     @OA\Property(property="secondary_button_title", type="string", example="More info"),
     *                     @OA\Property(property="specifications", type="array", @OA\Items(type="string"))
     *                 )
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Producto actualizado exitosamente",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Producto actualizado exitosamente"),
     *             @OA\Property(property="product", type="object")
     *         )
     *     ),
     *     @OA\Response(response=401, description="No autenticado"),
     *     @OA\Response(response=404, description="Producto no encontrado"),
     *     @OA\Response(response=422, description="Error de validación")
     * )
     */
    public function update(Request $request, string $id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json([
                'message' => 'Producto no encontrado',
            ], 404);
        }

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'url_alias' => 'required|string|max:255|unique:products,url_alias,' . $product->id,
            'description' => 'nullable|string',
            'primary_button_url' => 'nullable|string|url',
            'primary_button_title' => 'nullable|string|max:255',
            'secondary_button_url' => 'nullable|string|url',
            'secondary_button_title' => 'nullable|string|max:255',
            'specifications' => 'nullable|array',
            'specifications.*' => 'string',
            
            // Traducciones opcionales (formato: translations.{lang_code}.{field})
            'translations' => 'nullable|array',
            'translations.*' => 'array',
            'translations.*.title' => 'nullable|string|max:255',
            'translations.*.url_alias' => 'nullable|string|max:255',
            'translations.*.description' => 'nullable|string',
            'translations.*.primary_button_title' => 'nullable|string|max:255',
            'translations.*.secondary_button_title' => 'nullable|string|max:255',
            'translations.*.specifications' => 'nullable|array',
        ]);

        // Actualizar campos principales (español)
        $product->update([
            'title' => $validated['title'],
            'url_alias' => $validated['url_alias'],
            'description' => $validated['description'] ?? null,
            'primary_button_url' => $validated['primary_button_url'] ?? null,
            'primary_button_title' => $validated['primary_button_title'] ?? null,
            'secondary_button_url' => $validated['secondary_button_url'] ?? null,
            'secondary_button_title' => $validated['secondary_button_title'] ?? null,
            'specifications' => $validated['specifications'] ?? null,
        ]);

        // Actualizar traducciones si se proporcionaron
        if (isset($validated['translations'])) {
            foreach ($validated['translations'] as $langCode => $fields) {
                foreach ($fields as $field => $value) {
                    $product->saveTranslation($field, $value, $langCode);
                }
            }
        }

        // Recargar con imágenes
        $product->load('images');

        return response()->json([
            'message' => 'Producto actualizado exitosamente',
            'product' => $product,
        ], 200);
    }

    /**
     * @OA\Delete(
     *     path="/api/products/{id}",
     *     summary="Eliminar producto",
     *     description="Elimina un producto del sistema",
     *     tags={"Products"},
     *     security={{"bearerAuth": {}}},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID del producto",
     *         required=true,
     *         @OA\Schema(type="string", example="1")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Producto eliminado exitosamente",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Producto eliminado exitosamente")
     *         )
     *     ),
     *     @OA\Response(response=401, description="No autenticado"),
     *     @OA\Response(response=404, description="Producto no encontrado")
     * )
     */
    public function destroy(string $id)
    {
        $product = Product::find($id);
        $product->delete();

        return response()->json([
            'message' => 'Producto eliminado exitosamente',
        ], 200);
    }

    /**
     * @OA\Get(
     *     path="/api/public/{lang}/products",
     *     summary="Listar productos públicos",
     *     description="Endpoint público que devuelve una lista paginada de productos con traducciones aplicadas",
     *     tags={"Products Public"},
     *     @OA\Parameter(
     *         name="lang",
     *         in="path",
     *         description="Código de idioma (2 letras)",
     *         required=true,
     *         @OA\Schema(type="string", example="en")
     *     ),
     *     @OA\Parameter(
     *         name="per_page",
     *         in="query",
     *         description="Número de productos por página",
     *         required=false,
     *         @OA\Schema(type="integer", default=15, example=15)
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Lista de productos con traducciones aplicadas",
     *         @OA\JsonContent(
     *             @OA\Property(property="current_page", type="integer", example=1),
     *             @OA\Property(property="data", type="array",
     *                 @OA\Items(
     *                     @OA\Property(property="id", type="integer", example=1),
     *                     @OA\Property(property="title", type="string", example="Premium Product"),
     *                     @OA\Property(property="url_alias", type="string", example="premium-product"),
     *                     @OA\Property(property="description", type="string", example="Product description"),
     *                     @OA\Property(property="images", type="array", @OA\Items(type="object"))
     *                 )
     *             ),
     *             @OA\Property(property="per_page", type="integer", example=15),
     *             @OA\Property(property="total", type="integer", example=50)
     *         )
     *     )
     * )
     */
    public function indexPublic(string $lang, Request $request)
    {
        $perPage = $request->input('per_page', 15);
        $products = Product::with('images')->paginate($perPage);

        // Aplicar traducciones a cada producto
        $products->getCollection()->transform(function ($product) use ($lang) {
            return $product->toArrayWithTranslations($lang);
        });

        return response()->json($products, 200);
    }

    /**
     * @OA\Get(
     *     path="/api/public/{lang}/products/{alias}",
     *     summary="Obtener producto público por alias",
     *     description="Endpoint público que devuelve un producto con las traducciones aplicadas según el idioma especificado, buscando por alias de URL",
     *     tags={"Products Public"},
     *     @OA\Parameter(
     *         name="lang",
     *         in="path",
     *         description="Código de idioma (2 letras)",
     *         required=true,
     *         @OA\Schema(type="string", example="en")
     *     ),
     *     @OA\Parameter(
     *         name="alias",
     *         in="path",
     *         description="Alias de URL del producto",
     *         required=true,
     *         @OA\Schema(type="string", example="premium-product")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Producto con traducciones aplicadas",
     *         @OA\JsonContent(
     *             @OA\Property(property="product", type="object",
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="title", type="string", example="Premium Product"),
     *                 @OA\Property(property="url_alias", type="string", example="premium-product"),
     *                 @OA\Property(property="description", type="string", example="Product description"),
     *                 @OA\Property(property="primary_button_url", type="string", example="https://example.com/buy"),
     *                 @OA\Property(property="primary_button_title", type="string", example="Buy now"),
     *                 @OA\Property(property="secondary_button_url", type="string", example="https://example.com/info"),
     *                 @OA\Property(property="secondary_button_title", type="string", example="More info"),
     *                 @OA\Property(property="specifications", type="array", @OA\Items(type="string")),
     *                 @OA\Property(property="images", type="array", @OA\Items(type="object"))
     *             )
     *         )
     *     ),
     *     @OA\Response(response=404, description="Producto no encontrado")
     * )
     */
    public function showPublic(string $lang, string $alias)
    {
        // Primero buscar por el alias en español
        $product = Product::where('url_alias', $alias)->with('images')->first();

        // Si no se encuentra, buscar en las traducciones
        if (!$product) {
            $translation = \App\Models\Translation::where('field', 'url_alias')
                ->where('value', $alias)
                ->whereHas('language', function ($query) use ($lang) {
                    $query->where('code', $lang);
                })
                ->first();

            if ($translation) {
                $product = Product::where('id', $translation->translatable_id)->with('images')->first();
            }
        }

        if (!$product) {
            return response()->json([
                'message' => 'Producto no encontrado',
            ], 404);
        }

        return response()->json([
            'product' => $product->toArrayWithTranslations($lang),
        ], 200);
    }
}
