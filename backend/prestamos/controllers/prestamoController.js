const { pool } = require('../config/db');

exports.getPrestamos = (req, res) => {
  pool.query('SELECT * FROM prestamos', (err, results) => {
    if (err) return res.status(500).json({ msg: 'Error al obtener préstamos' });
    res.status(200).json(results);
  });
};

exports.addPrestamo = (req, res) => {
  const { usuario_id, libro_id, fecha_prestamo, fecha_devolucion } = req.body;
  if (!usuario_id || !libro_id || !fecha_prestamo || !fecha_devolucion)
    return res.status(400).json({ msg: 'Faltan datos' });

  pool.query(
    'INSERT INTO prestamos (usuario_id, libro_id, fecha_prestamo, fecha_devolucion) VALUES (?, ?, ?, ?)',
    [usuario_id, libro_id, fecha_prestamo, fecha_devolucion],
    (err) => {
      if (err) return res.status(500).json({ msg: 'Error al registrar préstamo' });
      res.status(201).json({ msg: 'Préstamo registrado' });
    }
  );
};