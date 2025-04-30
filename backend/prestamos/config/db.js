const mysql = require('mysql2'); // Cliente MySQL para Node.js
const dotenv = require('dotenv'); // Para leer variables de entorno desde .env
dotenv.config(); // Cargar variables de entorno

// Crear un pool de conexiones a la base de datos con los datos del archivo .env
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Función para conectar a MySQL con reintento automático
function connectDB(retries = 10) {
  pool.getConnection((err) => {
    if (err) {
      // Si falla la conexión, mostrar el error y reintentar hasta 10 veces
      console.error('MySQL connection failed:', err.message);
      if (retries > 0) {
        console.log(`Reintentando conexión... (${retries})`);
        setTimeout(() => connectDB(retries - 1), 2000); // Espera 2 segundos y vuelve a intentar
      } else {
        console.error('No se pudo conectar a MySQL después de varios intentos');
        process.exit(1); // Terminar el proceso si no se puede conectar
      }
    } else {
      console.log('MySQL conectado correctamente'); // Conexión exitosa
    }
  });
}

module.exports = { pool, connectDB }; // Exportar pool y función de conexión para usarlos en otros archivos
