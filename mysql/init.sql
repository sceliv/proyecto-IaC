-- Base de datos para autenticación
CREATE DATABASE IF NOT EXISTS authdb;
USE authdb;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

-- Base de datos para libros
CREATE DATABASE IF NOT EXISTS librosdb;
USE librosdb;

CREATE TABLE IF NOT EXISTS libros (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(100),
  autor VARCHAR(100),
  categoria VARCHAR(50),
  anio_publicacion INT
);

-- Base de datos para usuarios (perfil del lector)
CREATE DATABASE IF NOT EXISTS usuariosdb;
USE usuariosdb;

CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  correo VARCHAR(100),
  rol ENUM('lector', 'admin') DEFAULT 'lector'
);

-- Base de datos para préstamos
CREATE DATABASE IF NOT EXISTS prestamosdb;
USE prestamosdb;

CREATE TABLE IF NOT EXISTS prestamos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT,
  libro_id INT,
  fecha_prestamo DATE,
  fecha_devolucion DATE,
  FOREIGN KEY (usuario_id) REFERENCES usuariosdb.usuarios(id),
  FOREIGN KEY (libro_id) REFERENCES librosdb.libros(id)
);
