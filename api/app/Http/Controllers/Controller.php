<?php

namespace App\Http\Controllers;

/**
 * @OA\Info(
 *     title="Narvi API",
 *     version="1.0.0",
 *     description="API para la gestión de productos, usuarios, imágenes y traducciones multiidioma.\n\n## Traducciones\n\nLos campos del cuerpo principal (`title`, `url_alias`, etc.) se guardan en **español** (idioma por defecto) en las entidades explicitamente definidas (Producto, Noticias). Las traducciones a otros idiomas van en un objeto `translations` opcional al crear o actualizar.\n\n**Formato de entrada** — clave de primer nivel = código de idioma (`en`, `fr`, …); dentro, solo los campos traducibles de esa entidad:\n\n```\n{\n  ""title"": ""Título en español"",\n  ""url_alias"": ""mi-producto"",\n  ""translations"": {\n    ""en"": {\n      ""title"": ""My product"",\n      ""url_alias"": ""my-product""\n    }\n  }\n}\n```\n\n**Campos traducibles**\n\n| Entidad | Campos |\n| --- | --- |\n| Product | `title`, `url_alias`, `description`, `primary_button_title`, `secondary_button_title`, `specifications` |\n| News | `title`, `url_alias`, `body` |\n\n`specifications` acepta un array; se almacena como JSON en la tabla de traducciones.\n\n**Respuestas admin** — en el detalle (`GET /api/products/{id}`, `GET /api/news/{id}`) la respuesta incluye `translations_data`: todas las traducciones agrupadas por código de idioma.\n\n**Endpoints públicos** — bajo `/api/public/{lang}/…` los campos traducibles se sustituyen por el idioma de la URL. El alias puede ser el del idioma por defecto o el traducido para ese `lang`.",
 *     @OA\Contact(
 *         email="support@narvi.com"
 *     )
 * )
 * 
 * @OA\SecurityScheme(
 *     securityScheme="bearerAuth",
 *     type="http",
 *     scheme="bearer",
 *     bearerFormat="JWT",
 *     description="Ingrese su token de autenticación"
 * )
 * 
 * @OA\Tag(
 *     name="Authentication",
 *     description="Endpoints de autenticación"
 * )
 * 
 * @OA\Tag(
 *     name="Users",
 *     description="Gestión de usuarios"
 * )
 * 
 * @OA\Tag(
 *     name="Products",
 *     description="Gestión de productos con soporte multiidioma (Admin)"
 * )
 * 
 * @OA\Tag(
 *     name="Products Public",
 *     description="Endpoints públicos de productos con traducciones aplicadas"
 * )
 * 
 * @OA\Tag(
 *     name="Product Images",
 *     description="Gestión de imágenes de productos"
 * )
 * 
 * @OA\Tag(
 *     name="Roles",
 *     description="Gestión de roles y permisos"
 * )
 * 
 * @OA\Tag(
 *     name="Languages",
 *     description="Gestión de idiomas disponibles"
 * )
 * 
 * @OA\Tag(
 *     name="News",
 *     description="Gestión de noticias / blog (Admin)"
 * )
 * 
 * @OA\Tag(
 *     name="News Public",
 *     description="Endpoints públicos de noticias"
 * )
 * 
 * @OA\Tag(
 *     name="Images",
 *     description="Subida de imágenes (portada y cuerpo) con conversión a AVIF"
 * )
 */
abstract class Controller
{
    //
}
