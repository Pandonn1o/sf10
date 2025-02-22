const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({dialect: "sqlite", storage: "data/productsInfo.sqlite"});

module.exports = sequelize;
