const express = require("express");
const app = express()
require('dotenv').config()


app.listen(process.env.PORT || 8000, function () {
  console.log(`App listening on port ${process.env.PORT || 8000}!`)
})
