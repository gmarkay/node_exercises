'use strict'

process.title = 'Dice Roll';
const { argv: [, , ...args] } = process;

console.log(args.length);
const { count, sides } = require('./parse-args')(args);

const { toDiceNotation, roll } = require('./dice')

const dice = toDiceNotation(count, sides),
  total = roll(dice)

console.log(total, 'total');


