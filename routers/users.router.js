const routers = require("express").Router()
const userController = require("../controllers/user.controller")

routers.post("/login", userController.Login)

module.exports = routers
