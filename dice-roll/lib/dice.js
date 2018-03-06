'use strict';

function toDiceNotation(count, sides) {
  return (`${count}d${sides}`)
}

function roll(dice) {
  let splitStrs = dice.split('d');
  let countNum = +splitStrs[0];
  let sidesNum = +splitStrs[1];


  const total = require('./math');
  console.log(total.randomInt(countNum, sidesNum), 'now the thing');

  return total;

}
module.exports = { toDiceNotation, roll };