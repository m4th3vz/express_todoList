// models/index.js
const sequelize = require('../config/database');
const Tarefa = require('./tarefa');

// Inicializa o modelo Tarefa com o Sequelize
// Utilizando a configuração definida em ../config/database.js
Tarefa.init(sequelize);

// Sincroniza o modelo com o banco de dados. Isso cria a tabela no banco
// Garante que a estrutura da tabela esteja atualizada com o código definido no modelo.
sequelize.sync();

module.exports = {
  Tarefa
};
