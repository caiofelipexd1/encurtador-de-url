# Dockerfile for PHP-FPM
FROM php:8.2-fpm

WORKDIR /var/www/html

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    zip \
    unzip \
    cron \
    nano \
    && docker-php-ext-install pdo_mysql gd exif pcntl bcmath opcache

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

# Copy application files
COPY ./backend .

# Install Laravel dependencies
RUN composer install --no-dev --optimize-autoloader

# Set permissions
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache \
    && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# Configure cron file to run shcedules
COPY schedule-cron /etc/cron.d/schedule-cron

RUN chmod 0744 /etc/cron.d/schedule-cron

RUN crontab /etc/cron.d/schedule-cron

RUN touch /var/log/cron.log

CMD tail -f /var/log/cron.log

EXPOSE 9000

CMD bash -c "cron && php-fpm"