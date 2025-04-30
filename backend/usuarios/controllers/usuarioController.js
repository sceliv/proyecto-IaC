const { pool } = require('../config/db');

exports.getUsuarios = (req, res) => {
  pool.query('SELECT * FROM usuarios', (err, results) => {
    if (err) return res.status(500).json({ msg: 'Error al obtener usuarios' });
    res.status(200).json(results);
  });
};

exports.addUsuario = (req, res) => {
  const { nombre, correo, rol } = req.body;
  if (!nombre || !correo || !rol) return res.status(400).json({ msg: 'Faltan datos' });

  pool.query('INSERT INTO usuarios (nombre, correo, rol) VALUES (?, ?, ?)', [nombre, correo, rol], (err) => {
    if (err) return res.status(500).json({ msg: 'Error al agregar usuario' });
    res.status(201).json({ msg: 'Usuario agregado' });
  });
};