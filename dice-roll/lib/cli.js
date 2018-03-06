'use strict'


const { argv: [, , ...args] } = process;

console.log(args.length);
if (args.length == 2) {
  const { count, sides } = require('./parse-args')(args);

  const { toDiceNotation, roll } = require('./dice')

  const dice = toDiceNotation(count, sides)
  console.log(dice);

  const total = roll(dice)

} else {
  console.log('please enter two numbers');
}


