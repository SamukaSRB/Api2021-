'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      prodNome: {
        type: Sequelize.STRING
      },
      prodDescricao: {
        type: Sequelize.STRING
      },
      prodPreco: {
        type: Sequelize.STRING
      },
      prodQuant: {
        type: Sequelize.STRING
      },
      prodVenc: {
        type: Sequelize.STRING
      },
      categoriaId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'categoria',
          key:'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
   
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Produtos');
  }
};