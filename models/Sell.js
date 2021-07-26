'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sell extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // models.Sell.hasMany(models.Product);
      // models.Product.belongsTo(models.Sell);
      models.Sell.belongsTo(models.Product, {foreignKey: 'idproduct', as: 'products'});
      models.Product.hasMany(models.Sell, {as: 'sells', foreignKey: 'idproduct'});
      models.Sell.belongsTo(models.User, { foreignKey: "iduser", as: 'users'});
      models.User.hasMany(models.Sell, {as: 'sells', foreignKey: 'iduser'});
    }
  };
  Sell.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    iduser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User",
        key: "id",
      },
    },
    idproduct: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Product",
        key: "id",
      },
    },
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Sell',
  });
  return Sell;
};