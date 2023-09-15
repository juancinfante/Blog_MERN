const express = require('express');
const router = express.Router();
const { agregarArticulo, obtenerArticulos, obtenerArticulo } = require('../controladores/articulos');
const { registroUsuario } = require('../controladores/usuarios');

router.post('/articulo', agregarArticulo);
router.get('/articulos', obtenerArticulos);
router.get('/articulo/:id', obtenerArticulo);

module.exports = router;