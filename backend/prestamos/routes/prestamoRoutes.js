const express = require('express');
const router = express.Router();
const { getPrestamos, addPrestamo } = require('../controllers/prestamoController');

router.get('/', getPrestamos);
router.post('/', addPrestamo);

module.exports = router;