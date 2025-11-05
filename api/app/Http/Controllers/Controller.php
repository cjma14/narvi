<?php

namespace App\Http\Controllers;

/**
 * @OA\Info(
 *     title="Narvi API",
 *     version="1.0.0",
 *     description="API para la gestión de productos, usuarios, imágenes y traducciones multiidioma",
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
 */
abstract class Controller
{
    //
}
