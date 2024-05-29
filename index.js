const express = require("express");
const app = express()
require('dotenv').config()
const router = require("./routers")

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/v1", router)

app.listen(process.env.PORT || 8000, function () {
  console.log(`App listening on port ${process.env.PORT || 8000}!`)
})
