const mysql = require("../config/mysql");

const Items = mysql.define(
  "items",
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: sequelize.STRING,
    },
    price: {
      type: sequelize.STRING,
    },
    description: {
      type: sequelize.STRING,
    },
  },
  {
    paranoid: true,
    timestamps: true,
  }
);

module.exports = Items;
