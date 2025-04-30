const express = require('express');
const router = express.Router();
const { getUsuarios, addUsuario } = require('../controllers/usuarioController');

router.get('/', getUsuarios);
router.post('/', addUsuario);

module.exports = router;