const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

function connectDB(retries = 10) {
  pool.getConnection((err) => {
    if (err) {
      console.error('MySQL connection failed:', err.message);
      if (retries > 0) {
        console.log(`Reintentando conexión... (${retries})`);
        setTimeout(() => connectDB(retries - 1), 2000);
      } else {
        console.error('No se pudo conectar a MySQL después de varios intentos');
        process.exit(1);
      }
    } else {
      console.log('MySQL conectado correctamente');
    }
  });
}

module.exports = { pool, connectDB };
