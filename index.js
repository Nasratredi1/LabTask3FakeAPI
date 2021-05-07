const express = require("express");
const app = express();
const importdata= require("./data.json");

let port = process.env.PORT || 3000;

app.get("/",(req, res) =>{
  res.send(importdata);
});


app.listen(port);