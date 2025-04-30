const express = require('express');
const router = express.Router();
const { getLibros, addLibro } = require('../controllers/libroController');

router.get('/', getLibros);
router.post('/', addLibro);

module.exports = router;