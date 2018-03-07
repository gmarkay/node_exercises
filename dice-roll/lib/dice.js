'use strict';

function toDiceNotation(count, sides) {
  return (`${count}d${sides}`)
}

function roll(dice) {
  let splitStrs = dice.split('d');
  let countNum = +splitStrs[0];
  let sidesNum = +splitStrs[1];


  const total = require('./math');

 const finalNum = total.randomInt(countNum, sidesNum);

  return finalNum;

}
module.exports = { toDiceNotation, roll };