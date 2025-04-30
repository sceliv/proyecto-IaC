const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { pool } = require('../config/db');

exports.register = (req, res) => {
  const { username, email, password } = req.body; // 👈 añade email
  if (!username || !email || !password)
    return res.status(400).json({ msg: 'Datos incompletos' });

  const hashedPassword = bcrypt.hashSync(password, 10);
  pool.query(
    'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
    [username, email, hashedPassword],
    (err) => {
      if (err) {
        console.error(err); // para ver el error real si vuelve a fallar
        return res.status(500).json({ msg: 'Error al registrar usuario' });
      }
      res.status(201).json({ msg: 'Usuario registrado' });
    }
  );
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ msg: 'Datos incompletos' });

  pool.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (err) return res.status(500).json({ msg: 'Error de servidor' });
    if (results.length === 0) return res.status(404).json({ msg: 'Usuario no encontrado' });

    const user = results[0];
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) return res.status(401).json({ msg: 'Contraseña incorrecta' });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  });
};