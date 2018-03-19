'use strict';
const { assert: { isFunction, isNumber, equal } } = require('chai');

const subtract = require('../lib/subtract');
describe('subtract', () => {
  it('should be a function', () => {
    isFunction(subtract);
  });
  it('should return a number', () => {
    isNumber(subtract());
  });
  it('should return the difference of  two numbers', () => {
    equal(subtract(333, 111), 222)
  });
});
