<?php

namespace App\Http\Controllers;

use OpenApi\Generator;
use Psr\Log\NullLogger;

class DocsController extends Controller
{
    /**
     * Página con el visor Scalar de la referencia de la API.
     */
    public function reference()
    {
        return view('docs');
    }

    /**
     * Especificación OpenAPI generada al vuelo a partir de las anotaciones @OA en app/.
     *
     * Se silencian los warnings internos de validación de swagger-php (logger nulo): son
     * ruido informativo del scanner, pero sin logger propio los convierte en trigger_error(),
     * que Laravel escala a excepción fatal durante un request HTTP.
     */
    public function openapi()
    {
        $spec = Generator::scan([app_path()], ['logger' => new NullLogger()]);
        $document = json_decode($spec->toJson(), true);

        // swagger-php guarda \n literales en description; Scalar necesita saltos reales para el markdown
        if (isset($document['info']['description'])) {
            $document['info']['description'] = str_replace('\n', "\n", $document['info']['description']);
        }

        return response(json_encode($document, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES), 200, [
            'Content-Type' => 'application/json',
        ]);
    }
}
