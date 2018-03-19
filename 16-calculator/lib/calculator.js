'use strict';
const { argv: [, , num1, operation, num2] } = process;

let operator;

switch (operation) {
  case '+':
    operator = 'add';
    break;
  case '-':
    operator = 'subtract';
    break;
  case 'x':
    operator = 'multiply';
    break;
  case '/':
    operator = 'divide';
    break
}
const math = require(`./${operator}`)(+num1, +num2);

