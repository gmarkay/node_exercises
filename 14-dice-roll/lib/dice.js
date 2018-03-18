'use strict';

const { randomInt } = require('./math');

function toDiceNotation(count, sides) {
  return (`${count}d${sides}`)
}

function roll(dice) {
  let [countNum, sidesNum] = dice.split('d');

  let diceTotal = 0;
  for (let i = 0; i < countNum; i++) {
    diceTotal += randomInt(1, sidesNum);
  }
  return diceTotal;
}
module.exports = { toDiceNotation, roll };