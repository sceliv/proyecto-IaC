const { pool } = require('../config/db');

exports.getLibros = (req, res) => {
  pool.query('SELECT * FROM libros', (err, results) => {
    if (err) return res.status(500).json({ msg: 'Error al obtener libros' });
    res.status(200).json(results);
  });
};

exports.addLibro = (req, res) => {
  const { titulo, autor, categoria } = req.body;
  if (!titulo || !autor || !categoria) return res.status(400).json({ msg: 'Faltan datos' });

  pool.query('INSERT INTO libros (titulo, autor, categoria) VALUES (?, ?, ?)', [titulo, autor, categoria], (err) => {
    if (err) return res.status(500).json({ msg: 'Error al agregar libro' });
    res.status(201).json({ msg: 'Libro agregado' });
  });
};