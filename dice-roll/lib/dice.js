'use strict';

function toDiceNotation(count, sides) {
  return (`${count}d${sides}`)
}

function roll(dice) {
  let splitStrs = dice.split('d');
  let countNum = +splitStrs[0];
  let sidesNum = +splitStrs[1];

  let diceNum = 0;
  const { randomInt } = require('./math');
  for (let i = 0; i < countNum; i++) {

    diceNum += randomInt(1, sidesNum);
  }
  return diceNum;
}
module.exports = { toDiceNotation, roll };