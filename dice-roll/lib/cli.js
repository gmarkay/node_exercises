'use strict'


const { argv: [, , ...args] } = process;

console.log(args.length);
  const { count, sides } = require('./parse-args')(args);

  const { toDiceNotation, roll } = require('./dice')

  const dice = toDiceNotation(count, sides)

  const total = roll(dice)

  console.log(total, 'total');


