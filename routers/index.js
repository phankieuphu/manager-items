const express = require("express")
const router = express.Router();
const userRouter = require("./users.router")
const itemRouter = require("./items.router")


router.use("/items", itemRouter)
router.use("/users" , userRouter)


module.exports = router
