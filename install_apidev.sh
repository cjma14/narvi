#!/bin/bash

# Script para inicializar y ejecutar el entorno de desarrollo de la API Laravel
# Autor: Narvi Team
# Fecha: 2025-11-04

set -e  # Detener el script si hay algún error

echo "🚀 Iniciando configuración del entorno de desarrollo de la API..."

# Cambiar al directorio de la API
cd "$(dirname "$0")/api"

# Paso 1: Configurar .env si no existe
if [ ! -f .env ]; then
    echo "📝 Copiando .env.example a .env..."
    cp .env.example .env
else
    echo "✓ El archivo .env ya existe"
fi

# Paso 2: Instalar dependencias con Composer usando Docker si vendor no existe
if [ ! -d "vendor" ]; then
    echo "📦 Instalando dependencias de Composer..."
    docker run --rm \
        -u "$(id -u):$(id -g)" \
        -v "$(pwd):/var/www/html" \
        -w /var/www/html \
        laravelsail/php84-composer:latest \
        composer install --ignore-platform-reqs
else
    echo "✓ Las dependencias de Composer ya están instaladas"
fi

# Paso 3: Verificar si los contenedores ya están corriendo
if [ -x "./vendor/bin/sail" ]; then
    SAIL_RUNNING=$(./vendor/bin/sail ps 2>/dev/null | grep -c "Up" || echo "0")
    
    if [ "$SAIL_RUNNING" -gt 0 ]; then
        echo "⚠️  Los contenedores ya están corriendo. Reiniciando..."
        ./vendor/bin/sail down
    fi
    
    # Paso 4: Iniciar los contenedores
    echo "🐳 Iniciando contenedores con Laravel Sail..."
    ./vendor/bin/sail up -d
    
    # Esperar a que los contenedores estén listos
    echo "⏳ Esperando a que los contenedores estén listos..."
    sleep 5
    
    # Paso 5: Generar la clave de aplicación si no existe
    if ! grep -q "APP_KEY=base64:" .env; then
        echo "🔑 Generando clave de aplicación..."
        ./vendor/bin/sail artisan key:generate
    else
        echo "✓ La clave de aplicación ya existe"
    fi
    
    # Paso 6: Ejecutar migraciones y seeders
    echo "🗄️  Ejecutando migraciones y seeders..."
    ./vendor/bin/sail artisan migrate --seed
    
    echo ""
    echo "✅ ¡Entorno de desarrollo iniciado correctamente!"
    echo ""
    echo "📍 Accede a la aplicación en:"
    echo "   - API: http://localhost:6650"
    echo "   - Documentación de la API (Scalar): http://localhost:6650/api/docs"
    echo ""
    echo "💡 Comandos útiles:"
    echo "   - Ver logs: ./api/vendor/bin/sail logs -f"
    echo "   - Detener: ./api/vendor/bin/sail down"
    echo "   - Shell: ./api/vendor/bin/sail shell"
    echo ""
else
    echo "❌ Error: No se pudo encontrar Laravel Sail"
    exit 1
fi
