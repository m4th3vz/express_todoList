// routes/index.js
const express = require('express');
const router = express.Router();

// Importa a rota de routes
const tarefasRoutes = require('./tarefas');

// Caminho da rota
router.use('/', tarefasRoutes);

module.exports = router;
