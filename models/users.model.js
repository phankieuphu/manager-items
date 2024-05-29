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
      type: sequelize.STRING,
    },
    email: {
      type: sequelize.STRING,
    },
    password: {
      type: sequelize.STRING,
    },
    role: {
      type: sequelize.STRING,
    },
  },
  {
    paranoid: true,
    timestamps: true,
  }
);

module.exports = Users;
