const mysql = require("../config/mysql");
const sequelize = require("sequelize")

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
      type: sequelize.DOUBLE,
    },
    description: {
      allowNull:true,
      type: sequelize.STRING,
    },
  },
  {
    paranoid: true,
    timestamps: true,
  }
);

module.exports = Items;
