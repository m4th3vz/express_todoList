// models/tarefa.js
const { Model, DataTypes } = require('sequelize');

class Tarefa extends Model {
  static init(sequelize) {
    // Inicializa o modelo Tarefa com os campos 'descricao' e 'concluida'
    super.init({
      descricao: {
        type: DataTypes.STRING,
        allowNull: false // O campo 'descricao' não pode ser nulo
      },
      concluida: {
        type: DataTypes.BOOLEAN,
        defaultValue: false // Valor padrão para 'concluida' é falso
      }
    }, { sequelize, modelName: 'Tarefa' }); // Define o nome do modelo como 'Tarefa'
  }
}

// Exporta o modelo Tarefa para ser utilizado em outras partes da aplicação
module.exports = Tarefa;
