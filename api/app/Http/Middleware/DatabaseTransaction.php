<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class DatabaseTransaction
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Iniciar transacción
        DB::beginTransaction();

        try {
            $response = $next($request);

            // Si la respuesta es exitosa (2xx), hacer commit
            if ($response->getStatusCode() >= 200 && $response->getStatusCode() < 300) {
                DB::commit();
            } else {
                // Si hay error (4xx, 5xx), hacer rollback
                DB::rollBack();
            }

            return $response;
        } catch (Throwable $e) {
            // En caso de excepción, hacer rollback
            DB::rollBack();
            throw $e;
        }
    }

    /**
     * Handle tasks after the response has been sent to the browser.
     */
    public function terminate(Request $request, Response $response): void
    {
        // Asegurarse de que no queden transacciones pendientes
        if (DB::transactionLevel() > 0) {
            DB::rollBack();
        }
    }
}
