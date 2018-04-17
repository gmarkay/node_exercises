"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("models", require('./models'))
const { Beach, Lifeguard, Shark, SharkType } = app.get("models");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/beaches', (req, res, next) => {
  Beach.findAll({ include: [{ model: Lifeguard, attributes: ["name"], model: Shark, attributes: ["name", "eats_humans"] }] })
    .then((beaches) => {
      res.status(200).json(beaches);
    });
});
app.get('/beaches/:id', (req, res, next) => {
  Beach.findOne({
    include: [{ model: Lifeguard, attributes: ["name"], model: Shark, attributes: ["name", "eats_humans"] }],
    where: { id: req.params.id }
  })
    .then((beach) => {
      res.status(200).json(beach);
    });
});

app.get('/lifeguards', (req, res, next) => {
  Lifeguard.findAll({ include: { model: Beach, attributes: ["name", "location"] } })
    .then((lifeguards) => {
      res.status(200).json(lifeguards);
    })
})
app.get('/lifeguards/:id', (req, res, next) => {
  Lifeguard.findOne({
    where: { id: req.params.id },
    include: { model: Beach, attributes: ["name", "location"] }
  })
    .then((lifeguard) => {
      res.status(200).json(lifeguard);
    });
});

app.post('/beaches', (req, res, next) => {
  Beach.create(req.body)
    .then((newBeach) => {
      res.status(201).json(newBeach);
    });
});
app.post('/lifeguards', (req, res, next) => {
  Lifeguard.create(req.body)
    .then((newLG) => {
      res.status(201).json(newLG);
    });
});

module.exports = app;

const port = process.env.PORT || 5555;
app.listen(port, () => {
  console.log(`listen on port ${port}`);
});