FROM php:8.4-fpm

# Instalar dependencias del sistema
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    git \
    curl \
    supervisor \
    nginx \
    libzip-dev \
    libpq-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libicu-dev \
    libssl-dev \
    libsasl2-dev \
    libcurl4-openssl-dev \
    pkg-config \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Configurar e instalar extensiones PHP
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) \
        pdo \
        pdo_mysql \
        pdo_pgsql \
        mbstring \
        exif \
        pcntl \
        bcmath \
        gd \
        zip \
        intl \
        ftp \
        opcache

# Configuración PHP personalizada
RUN echo "opcache.enable=1" > /usr/local/etc/php/conf.d/custom.ini \
    && echo "opcache.jit=tracing" >> /usr/local/etc/php/conf.d/custom.ini \
    && echo "opcache.jit_buffer_size=256M" >> /usr/local/etc/php/conf.d/custom.ini \
    && echo "memory_limit=512M" >> /usr/local/etc/php/conf.d/custom.ini \
    && echo "upload_max_filesize=64M" >> /usr/local/etc/php/conf.d/custom.ini \
    && echo "post_max_size=64M" >> /usr/local/etc/php/conf.d/custom.ini \
    && echo "max_execution_time=300" >> /usr/local/etc/php/conf.d/custom.ini

COPY ./docker/coolify/php.ini /usr/local/etc/php/conf.d/custom.ini

# Instalar Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Configurar directorio de trabajo
WORKDIR /var/www

# Crear directorios necesarios con permisos correctos
RUN mkdir -p storage/app \
             storage/framework/cache \
             storage/framework/sessions \
             storage/framework/views \
             storage/logs \
             bootstrap/cache \
    && chown -R www-data:www-data storage bootstrap/cache \
    && chmod -R 775 storage bootstrap/cache

# Copiar archivos de la aplicación
COPY --chown=www-data:www-data . .

# Configurar Git para evitar problemas de ownership
RUN git config --global --add safe.directory /var/www

# Instalar dependencias PHP (evitar conexión DB durante composer install)
RUN DB_CONNECTION=sqlite DB_DATABASE=/tmp/temp.sqlite touch /tmp/temp.sqlite \
    && DB_CONNECTION=sqlite DB_DATABASE=/tmp/temp.sqlite composer install --no-dev --optimize-autoloader --no-interaction \
    && rm -f /tmp/temp.sqlite

# Limpiar variables de entorno temporales
RUN unset DB_CONNECTION DB_DATABASE 

# Configuración de Nginx y Supervisor desde archivos externos
RUN rm -f /etc/nginx/sites-enabled/default
COPY ./docker/coolify/laravel.conf /etc/nginx/sites-available/laravel
RUN ln -s /etc/nginx/sites-available/laravel /etc/nginx/sites-enabled/

COPY ./docker/coolify/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Asegurar permisos finales
RUN chown -R www-data:www-data /var/www \
    && chmod -R 755 /var/www \
    && chmod -R 775 /var/www/storage /var/www/bootstrap/cache

# Exponer puerto 8000
EXPOSE 8000

# Comando de inicio
CMD ["/usr/bin/supervisord", "-n"]