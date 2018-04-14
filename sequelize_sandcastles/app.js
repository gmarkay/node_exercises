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
    raw: true,
    include: [{ model: Lifeguard, attributes: ["name"], model: Shark, attributes: ["name", "eats_humans"] }],
    where: { id: req.params.id },
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
    raw: true,
    where: { id: req.params.id },
    include: { model: Beach, attributes: ["name", "location"] }
  })
    .then((lifeguard) => {
      res.status(200).json(lifeguard);
    });
});

app.post('/beaches', ({ body: { name, location, sand_rating } }, res, next) => {
  Beach.create({name, location,sand_rating })
    .then((newBeach) => {
      console.log(newBeach.dataValues)
      res.status(201).json(newBeach);
    });
});
app.post('/lifeguards', ({ body: { first_name, last_name, beachId } }, res, next) => {
  Lifeguard.create({ first_name, last_name, beachId})
    .then((newLG) => {
      console.log(newLG.dataValues)
      res.status(201).json(newLG);
    });
});

module.exports = app;

const port = process.env.PORT || 5555;
app.listen(port, () => {
  console.log(`listen on port ${port}`);
});