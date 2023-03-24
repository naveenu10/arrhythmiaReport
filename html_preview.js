const express = require("express");
const dataBinding=require('./data');
const app = express()
const port = 3000;
const handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");

app.get('/', (req, res) => {
  const template = handlebars.compile(fs.readFileSync(path.resolve(__dirname, "report.html"), 'utf8'));

  res.send(template(dataBinding.dataBinding))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})