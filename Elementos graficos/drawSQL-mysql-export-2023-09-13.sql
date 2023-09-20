CREATE TABLE `imagenes`(
    `id_imagen` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `imagen` BLOB NOT NULL
);
CREATE TABLE `Detalles_piezas`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre` VARCHAR(255) NOT NULL,
    `categoria` VARCHAR(255) NOT NULL
);
CREATE TABLE `Registros_servicios`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_perfi` INT NOT NULL,
    `fecha` DATE NOT NULL,
    `status` VARCHAR(255) NOT NULL,
    `piezas` VARCHAR(255) NOT NULL
);
CREATE TABLE `Piezas`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_detalles` INT NOT NULL
);
CREATE TABLE `Perfiles`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `marca` VARCHAR(255) NOT NULL,
    `modelo` VARCHAR(255) NOT NULL,
    `año` INT NOT NULL,
    `km_actual` DOUBLE NOT NULL,
    `id_imagen` INT NOT NULL
);
CREATE TABLE `Viajes`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `fotografia` BLOB NOT NULL,
    `destino` VARCHAR(255) NOT NULL,
    `km_viaje` DOUBLE NOT NULL,
    `fecha` DATE NOT NULL,
    `km_total` BIGINT NOT NULL
);
CREATE TABLE `Usuarios`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre_usuario` VARCHAR(255) NULL,
    `tipo_membresia` VARCHAR(255) NULL
);
ALTER TABLE
    `Perfiles` ADD CONSTRAINT `perfiles_id_imagen_foreign` FOREIGN KEY(`id_imagen`) REFERENCES `imagenes`(`id_imagen`);