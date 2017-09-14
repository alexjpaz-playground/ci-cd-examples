const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send("<h1>I can't do that Alex!</h1>");
})

module.exports = app;
