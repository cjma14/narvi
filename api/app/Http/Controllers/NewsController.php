<?php

namespace App\Http\Controllers;

use App\Models\Language;
use App\Models\News;
use App\Services\NewsImageSyncService;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class NewsController extends Controller
{
    public function __construct(
        protected NewsImageSyncService $imageSync
    ) {}

    /**
     * @OA\Get(
     *     path="/api/news",
     *     summary="Listar noticias",
     *     description="Lista paginada de noticias (admin). Incluye no publicadas. Usar with_trashed=1 para incluir eliminadas.",
     *     tags={"News"},
     *     security={{"bearerAuth": {}}},
     *     @OA\Parameter(name="per_page", in="query", @OA\Schema(type="integer", default=15)),
     *     @OA\Parameter(name="with_trashed", in="query", @OA\Schema(type="boolean", default=false)),
     *     @OA\Response(response=200, description="Lista de noticias"),
     *     @OA\Response(response=401, description="No autenticado")
     * )
     */
    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 15);

        return response()->json(
            News::forAdminList(withTrashed: $request->boolean('with_trashed'))->paginate($perPage),
            200
        );
    }

    /**
     * @OA\Post(
     *     path="/api/news",
     *     summary="Crear noticia",
     *     description="Crea una noticia. Las portadas se suben vía POST /api/images (type=cover) y se referencian con cover_image_ids.{lang}.",
     *     tags={"News"},
     *     security={{"bearerAuth": {}}},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"title", "url_alias"},
     *             @OA\Property(property="title", type="string", example="Nueva instalación en Ecuador"),
     *             @OA\Property(property="url_alias", type="string", example="nueva-instalacion-ecuador"),
     *             @OA\Property(property="body", type="string", example="<p>Contenido HTML</p>"),
     *             @OA\Property(property="published", type="boolean", example=false),
     *             @OA\Property(property="cover_image_ids", type="object", example={"es": 1, "en": 2}),
     *             @OA\Property(property="translations", type="object")
     *         )
     *     ),
     *     @OA\Response(response=201, description="Noticia creada exitosamente"),
     *     @OA\Response(response=401, description="No autenticado"),
     *     @OA\Response(response=422, description="Error de validación")
     * )
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'url_alias' => [
                'required',
                'string',
                'max:255',
                Rule::unique('news', 'url_alias')->whereNull('deleted_at'),
            ],
            'body' => 'nullable|string',
            'published' => 'nullable|boolean',
            'cover_image_id' => 'nullable|integer|exists:images,id',
            'cover_image_ids' => 'nullable|array',
            'cover_image_ids.*' => 'nullable|integer|exists:images,id',
            'translations' => 'nullable|array',
            'translations.*' => 'array',
            'translations.*.title' => 'nullable|string|max:255',
            'translations.*.url_alias' => 'nullable|string|max:255',
            'translations.*.body' => 'nullable|string',
        ]);

        $published = isset($validated['published']) ? (bool) $validated['published'] : false;

        $news = News::create([
            'title' => $validated['title'],
            'url_alias' => $validated['url_alias'],
            'body' => $validated['body'] ?? null,
            'published' => $published,
            'published_at' => $published ? now() : null,
            'author_id' => $request->user()->id,
        ]);

        if (isset($validated['translations'])) {
            foreach ($validated['translations'] as $langCode => $fields) {
                foreach ($fields as $field => $value) {
                    $news->saveTranslation($field, $value, $langCode);
                }
            }
        }

        $this->imageSync->sync(
            $news,
            $this->coverImageIdsFrom($validated),
            $validated['body'] ?? null
        );

        $news->load(['cover', 'covers.language', 'bodyImages', 'author:id,name,email']);

        return response()->json([
            'message' => 'Noticia creada exitosamente',
            'news' => $news,
        ], 201);
    }

    /**
     * @OA\Get(
     *     path="/api/news/{id}",
     *     summary="Obtener noticia para edición",
     *     tags={"News"},
     *     security={{"bearerAuth": {}}},
     *     @OA\Parameter(name="id", in="path", required=true, @OA\Schema(type="integer")),
     *     @OA\Response(response=200, description="Detalle de la noticia"),
     *     @OA\Response(response=404, description="Noticia no encontrada")
     * )
     */
    public function show(string $id)
    {
        $news = News::findWithRelations($id);

        if (!$news) {
            return response()->json(['message' => 'Noticia no encontrada'], 404);
        }

        $news->loadTranslationsAttribute();

        return response()->json(['news' => $news], 200);
    }

    /**
     * @OA\Put(
     *     path="/api/news/{id}",
     *     summary="Actualizar noticia",
     *     tags={"News"},
     *     security={{"bearerAuth": {}}},
     *     @OA\Parameter(name="id", in="path", required=true, @OA\Schema(type="integer")),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"title", "url_alias"},
     *             @OA\Property(property="title", type="string"),
     *             @OA\Property(property="url_alias", type="string"),
     *             @OA\Property(property="body", type="string"),
     *             @OA\Property(property="published", type="boolean"),
     *             @OA\Property(property="cover_image_ids", type="object", example={"es": 1, "en": null}),
     *             @OA\Property(property="translations", type="object")
     *         )
     *     ),
     *     @OA\Response(response=200, description="Noticia actualizada exitosamente"),
     *     @OA\Response(response=404, description="Noticia no encontrada"),
     *     @OA\Response(response=422, description="Error de validación")
     * )
     */
    public function update(Request $request, string $id)
    {
        $news = News::find($id);

        if (!$news) {
            return response()->json(['message' => 'Noticia no encontrada'], 404);
        }

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'url_alias' => [
                'required',
                'string',
                'max:255',
                Rule::unique('news', 'url_alias')->ignore($news->id)->whereNull('deleted_at'),
            ],
            'body' => 'nullable|string',
            'published' => 'nullable|boolean',
            'cover_image_id' => 'nullable|integer|exists:images,id',
            'cover_image_ids' => 'nullable|array',
            'cover_image_ids.*' => 'nullable|integer|exists:images,id',
            'translations' => 'nullable|array',
            'translations.*' => 'array',
            'translations.*.title' => 'nullable|string|max:255',
            'translations.*.url_alias' => 'nullable|string|max:255',
            'translations.*.body' => 'nullable|string',
        ]);

        $published = isset($validated['published'])
            ? (bool) $validated['published']
            : $news->published;

        $publishedAt = $news->published_at;
        if ($published && !$news->published_at) {
            $publishedAt = now();
        }

        $news->update([
            'title' => $validated['title'],
            'url_alias' => $validated['url_alias'],
            'body' => $validated['body'] ?? null,
            'published' => $published,
            'published_at' => $publishedAt,
        ]);

        if (isset($validated['translations'])) {
            foreach ($validated['translations'] as $langCode => $fields) {
                foreach ($fields as $field => $value) {
                    $news->saveTranslation($field, $value, $langCode);
                }
            }
        }

        // Clave ausente = conservar; null = quitar. Sin cover_image_ids/cover_image_id = no tocar.
        $this->imageSync->sync(
            $news,
            $this->coverImageIdsFrom($validated),
            $validated['body'] ?? null
        );

        $news->load(['cover', 'covers.language', 'bodyImages', 'author:id,name,email']);

        return response()->json([
            'message' => 'Noticia actualizada exitosamente',
            'news' => $news,
        ], 200);
    }

    /**
     * @OA\Delete(
     *     path="/api/news/{id}",
     *     summary="Eliminar noticia (soft delete)",
     *     description="Marca la noticia como eliminada. Las imágenes se purgan físicamente a los 7 días.",
     *     tags={"News"},
     *     security={{"bearerAuth": {}}},
     *     @OA\Parameter(name="id", in="path", required=true, @OA\Schema(type="integer")),
     *     @OA\Response(response=200, description="Noticia eliminada exitosamente"),
     *     @OA\Response(response=404, description="Noticia no encontrada")
     * )
     */
    public function destroy(string $id)
    {
        $news = News::find($id);

        if (!$news) {
            return response()->json(['message' => 'Noticia no encontrada'], 404);
        }

        $news->delete();

        return response()->json([
            'message' => 'Noticia eliminada exitosamente',
        ], 200);
    }

    /**
     * @OA\Post(
     *     path="/api/news/{id}/restore",
     *     summary="Restaurar noticia eliminada",
     *     tags={"News"},
     *     security={{"bearerAuth": {}}},
     *     @OA\Parameter(name="id", in="path", required=true, @OA\Schema(type="integer")),
     *     @OA\Response(response=200, description="Noticia restaurada exitosamente"),
     *     @OA\Response(response=404, description="Noticia no encontrada"),
     *     @OA\Response(response=422, description="No se puede restaurar (imágenes ya purgadas)")
     * )
     */
    public function restore(string $id)
    {
        $news = News::findTrashed($id);

        if (!$news) {
            return response()->json(['message' => 'Noticia no encontrada'], 404);
        }

        if ($news->images_purged_at) {
            return response()->json([
                'message' => 'No se puede restaurar: las imágenes ya fueron eliminadas físicamente',
            ], 422);
        }

        $news->restore();
        $news->load(['cover', 'covers.language', 'bodyImages', 'author:id,name,email']);

        return response()->json([
            'message' => 'Noticia restaurada exitosamente',
            'news' => $news,
        ], 200);
    }

    /**
     * @OA\Get(
     *     path="/api/public/{lang}/news",
     *     summary="Listar noticias públicas",
     *     description="Solo noticias con traducción (title) en el idioma. Textos vía HasTranslations; portada = la del lang o null.",
     *     tags={"News Public"},
     *     @OA\Parameter(name="lang", in="path", required=true, @OA\Schema(type="string", example="es")),
     *     @OA\Parameter(name="per_page", in="query", @OA\Schema(type="integer", default=15)),
     *     @OA\Response(response=200, description="Lista de noticias publicadas")
     * )
     */
    public function indexPublic(string $lang, Request $request)
    {
        $perPage = $request->input('per_page', 15);

        $news = News::forPublicList($lang)->paginate($perPage);

        $news->getCollection()->transform(function ($item) use ($lang) {
            return $item->toPublicArray($lang, includeBody: false);
        });

        return response()->json($news, 200);
    }

    /**
     * @OA\Get(
     *     path="/api/public/{lang}/news/{alias}",
     *     summary="Obtener noticia pública por alias",
     *     description="404 si no hay title en el idioma. Textos vía HasTranslations; portada = la del lang o null.",
     *     tags={"News Public"},
     *     @OA\Parameter(name="lang", in="path", required=true, @OA\Schema(type="string", example="es")),
     *     @OA\Parameter(name="alias", in="path", required=true, @OA\Schema(type="string", example="nueva-instalacion")),
     *     @OA\Response(response=200, description="Detalle de la noticia"),
     *     @OA\Response(response=404, description="Noticia no encontrada")
     * )
     */
    public function showPublic(string $lang, string $alias)
    {
        $news = News::findPublicByAlias($alias, $lang);

        if (!$news) {
            return response()->json(['message' => 'Noticia no encontrada'], 404);
        }

        return response()->json([
            'news' => $news->toPublicArray($lang),
        ], 200);
    }

    /**
     * Normaliza portadas: cover_image_ids; cover_image_id = alias del idioma default.
     *
     * @param  array<string, mixed>  $validated
     * @return array<string, int|null>
     */
    protected function coverImageIdsFrom(array $validated): array
    {
        $covers = $validated['cover_image_ids'] ?? [];
        $default = Language::defaultCode();

        if (array_key_exists('cover_image_id', $validated) && !array_key_exists($default, $covers)) {
            $covers[$default] = $validated['cover_image_id'];
        }

        return $covers;
    }
}
