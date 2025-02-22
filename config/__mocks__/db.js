const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({dialect: "sqlite", storage: "data/productsDB.sqlite"});

module.exports = sequelize;
