# AGENTS.md

Guía rápida para trabajar en este repo. Es un monorepo: sitio Astro en la raíz + API Laravel en [`api/`](api/).

## Estructura general

- `/` — Astro. Sitio público + panel de administración (`src/admin`).
- `/api` — Laravel 12. API REST que alimenta el sitio público y el panel admin.

## Frontend (Astro) — resumen básico

> El frontend lo lleva otro dev; esto es solo para ubicarse, no una guía de estilo de Astro.

- Astro 4 en modo SSR (`output: "server"`, adapter `@astrojs/node` standalone), i18n `en`/`es` (default `en`). Ver [`astro.config.mjs`](astro.config.mjs).
- `src/pages` — rutas del sitio. `src/components` — UI. `src/layouts` — layouts.
- `src/admin/**` — panel de administración: islas React montadas dentro de páginas Astro (`src/pages/admin`). Habla con la API vía [`src/admin/utils/api.ts`](src/admin/utils/api.ts), que agrega `Authorization: Bearer <token>` (token de Sanctum guardado en la cookie `narvi_token`) a cada request.
- La URL de la API se configura con la env var `PUBLIC_API_URL` (ver [`.env.example`](.env.example)), por defecto `http://localhost:6650/api`.
- `src/content/docs` usa Starlight: es documentación **pública del sitio** (guías, etc.), no tiene relación con la documentación de la API descrita más abajo.
- Dev: `npm run dev` en la raíz.

## API (Laravel) — `api/`

El setup local (Docker/Sail, variables de entorno, comando de purga de imágenes) está en [`api/README.md`](api/README.md). Acá va la convención de código.

### Capas: Controller → Model / Service

Regla principal: **los controllers no arman queries Eloquent**. Nada de `where`, `orderBy`, `with`, `find`, `paginate`, etc. suelto en un método de controller — esa lógica se abstrae al Model.

- **Controller**: recibe el `Request`, valida (`$request->validate(...)`), llama a un método del Model o de un Service, devuelve la respuesta. Sin `where`/`with`/`orderBy` ni reglas de negocio propias.
- **Model**: dueño de toda su lógica Eloquent — scopes, relaciones, métodos de consulta reutilizables (`News::forAdminList(...)`, etc.) y las reglas de negocio propias de esa entidad. [`HasTranslations`](api/app/Traits/HasTranslations.php) (`app/Traits`) es un ejemplo ya en el repo de esto: la lógica de traducciones vive ahí, no en los controllers.
- **Service** (`app/Services`): solo cuando hay que **orquestar** — coordinar el modelo con otra integración (filesystem, conversión de imágenes, otro modelo, etc.) de una forma que no es responsabilidad natural de un solo modelo. Ejemplos ya en el repo: [`ImageService`](api/app/Services/ImageService.php) (sube el archivo, lo convierte a AVIF, crea el registro `Image`) y [`NewsImageSyncService`](api/app/Services/NewsImageSyncService.php) (vincula/desvincula imágenes de una noticia). No crear un Service solo para envolver el query de un único modelo — eso va directo al Model.

Ejemplo real de lo que hay que evitar a futuro — `NewsController@index` tal como está hoy:

```php
// ❌ query armado en el controller
$query = News::with(['cover', 'author:id,name,email'])->orderByDesc('created_at');

if ($request->boolean('with_trashed')) {
    $query->withTrashed();
}

return response()->json($query->paginate($perPage), 200);
```

Debería quedar así, con el query abstraído al modelo:

```php
// ✅ Controller
return response()->json(
    News::forAdminList(withTrashed: $request->boolean('with_trashed'))->paginate($perPage),
    200
);

// ✅ News.php
/**
 * Query base del listado admin: incluye portada/autor y ordena por más reciente.
 */
public static function forAdminList(bool $withTrashed = false): Builder
{
    $query = static::with(['cover', 'author:id,name,email'])->orderByDesc('created_at');

    return $withTrashed ? $query->withTrashed() : $query;
}
```

`NewsController`, `ProductController` y `AuthController` todavía tienen queries sueltas (son de antes de definir esta convención) — son candidatos a migrar cuando se toquen, no hace falta una pasada masiva ahora.

### Documentar funciones

- Toda función/método lleva un PHPDoc, aunque sea de una línea.
- `@param` **solo** si el parámetro no es explícito por su nombre + type-hint. `int $userId` no necesita `@param`; algo como `bool $strict` cuyo efecto no es obvio, sí.
- En los métodos de Controller que son endpoints, el bloque `@OA\...` (ver abajo) ya cumple como documentación — no hace falta duplicarlo con un PHPDoc encima. Fuera de eso (Models, Services, Traits, métodos privados/protegidos), PHPDoc normal.

### Documentación de la API: `/api/docs` (Scalar, antes Swagger)

`/api/docs` sirve ahora **Scalar** en vez de Swagger UI (`darkaonline/l5-swagger` se eliminó). La fuente de la doc sigue siendo las anotaciones `@OA\...` (OpenAPI) que ya existen en cada Controller — esas no cambiaron, Scalar solo las renderiza distinto.

- El spec OpenAPI se genera al vuelo en cada request (`OpenApi\Generator::scan()` de `zircote/swagger-php`, sin caché ni paso de build) — [`DocsController@openapi`](api/app/Http/Controllers/DocsController.php).
- `GET /api/docs` → HTML con el visor Scalar (vía CDN) — [`resources/views/docs.blade.php`](api/resources/views/docs.blade.php).
- `GET /api/docs/openapi.json` → el spec generado.
- Al agregar un endpoint nuevo: se le agrega su bloque `@OA\...` igual que siempre, en el método del controller. Los tags/metadata globales (`@OA\Info`, `@OA\Tag`, etc.) están en [`Controller.php`](api/app/Http/Controllers/Controller.php).
