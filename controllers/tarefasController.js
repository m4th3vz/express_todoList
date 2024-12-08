// controllers.tarefasController.js
const { Tarefa } = require('../models');

module.exports = {
  // Lista todas as tarefas cadastradas no banco de dados
  listar: async (req, res) => {
    const tarefas = await Tarefa.findAll();
    res.render('index', { tarefas });
  },

  // Renderiza o formulário para criar uma nova tarefa
  formularioCriar: (req, res) => {
    res.render('criar');
  },

  // Cria uma nova tarefa no banco de dados
  criar: async (req, res) => {
    await Tarefa.create({ descricao: req.body.descricao });
    res.redirect('/');
  },

  // Renderiza o formulário para editar uma tarefa existente
  formularioEditar: async (req, res) => {
    const tarefa = await Tarefa.findByPk(req.params.id);
    res.render('editar', { tarefa });
  },

  // Edita uma tarefa existente no banco de dados
  editar: async (req, res) => {
    const tarefa = await Tarefa.findByPk(req.params.id);
    tarefa.descricao = req.body.descricao;
    tarefa.concluida = req.body.concluida === 'on';
    await tarefa.save();
    res.redirect('/');
  },

  // Exclui uma tarefa do banco de dados
  excluir: async (req, res) => {
    const tarefa = await Tarefa.findByPk(req.params.id);
    await tarefa.destroy();
    res.redirect('/');
  }
};
