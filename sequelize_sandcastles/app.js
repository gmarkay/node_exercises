"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("models", require('./models'))

const { Beach, Lifeguard } = app.get('models');

// app.get('/beaches', (req, res, next)=>{
//   Beach.findAll
// })
module.exports = app;