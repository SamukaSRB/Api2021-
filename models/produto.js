'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Produto.hasMany(models.Categoria)
    }
  };
  Produto.init({
    prodNome: DataTypes.STRING,
    prodDescricao: DataTypes.STRING,
    prodPreco: DataTypes.STRING,
    prodQuant: DataTypes.STRING,
    prodVenc: DataTypes.STRING,
    categoriaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Produto',
  });
  return Produto;
};