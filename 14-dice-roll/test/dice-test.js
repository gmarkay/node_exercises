
const { assert: { isFunction, isNumber, isNotNaN, oneOf, match, isString } } = require('chai');

const { roll, toDiceNotation } = require('../lib/dice.js')

describe('dice module', () => {

  describe('roll', () => {
    it('should be a function', () => {
      isFunction(roll)
    });
    it('should return a number', () => {
      let result = roll('2d6');
      console.log(result, 'result');
      isNumber(result);
    });
    it('should not return not a number', () => {
      isNotNaN(roll('5d30'))
    });
    it('should accept a string and return a computer number', () => {
      for (let i = 1; i < 10; i++) {
        let dice = `${i}d6`;
        oneOf(roll(dice), Array.from(Array(61).keys()));
      }
    });
  });

  describe('toDiceNotation', () => {
    it('should be a string', () => {
      isString(toDiceNotation(1, 6));
    });
    
    it('should match the dice pattern', () => {
      match(toDiceNotation(33, 6), /^[0-9]+d[0-9]+/, 'matches pattern');

    });
  });
});