// routes/tarefas.js
const express = require('express');
const router = express.Router();
const tarefasController = require('../controllers/tarefasController');

// Rota para listar tarefas
router.get('/', tarefasController.listar);

// Rota para exibir o formulário de criação de uma nova tarefa
router.get('/criar', tarefasController.formularioCriar);

// Rota para criar uma nova tarefa
router.post('/criar', tarefasController.criar);

// Rota para exibir o formulário de edição
router.get('/editar/:id', tarefasController.formularioEditar);

// Rota para atualizar uma tarefa
router.post('/editar/:id', tarefasController.editar);

// Rota para excluir uma tarefa
router.post('/excluir/:id', tarefasController.excluir);

module.exports = router;
