const mysql = require("../config/mysql");
const sequelize = require("sequelize");

const Users = mysql.define(
  "users",
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      allowNull:true,
      type: sequelize.STRING,
    },
    email: {
      allowNull:true,
      type: sequelize.STRING,
    },
    password: {
      type: sequelize.STRING,
    }
  },
  {
    paranoid: true,
    timestamps: true,
  }
);

module.exports = Users;
