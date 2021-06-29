require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const http = require("http");

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req,res){
  res.sendFile(__dirname +"/index.html");
});

app.listen(process.env.port ||3000)
