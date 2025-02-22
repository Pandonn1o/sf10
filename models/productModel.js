const { DataTypes } = require('sequelize');
const sequelize = require('../config/__mocks__/db.js');

module.exports = Product = sequelize.define("product", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL,
  },
  description: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: false
});


///123123123213123123