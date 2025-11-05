# Narvi API - Laravel Backend

## Requisitos

- Docker
- Docker Compose

## Instalación

### 1. Configurar el entorno

Copia el archivo de ejemplo de variables de entorno:

```bash
cp .env.example .env
```

### 2. Instalar dependencias de Laravel con Sail

Ejecuta el siguiente comando para instalar las dependencias de Composer usando un contenedor temporal de Laravel:

```bash
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php84-composer:latest \
    composer install --ignore-platform-reqs
```

### 3. Iniciar los contenedores

Levanta los servicios con Laravel Sail:

```bash
./vendor/bin/sail up -d
```

### 4. Generar la clave de aplicación

```bash
./vendor/bin/sail artisan key:generate
```

### 5. Ejecutar migraciones

```bash
./vendor/bin/sail artisan migrate --seed
```

## Acceso a la aplicación

- API: http://localhost:6650
- Documentación Swagger: http://localhost:6650/api/docs