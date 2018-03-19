'use strict';
const { assert: { isFunction, isNumber, equal } } = require('chai');

const multiply = require('../lib/multiply');
describe('multiply', () => {
  it('should be a function', () => {
    isFunction(multiply);
  });
  it('should return a number', () => {
    isNumber(multiply());
  });
  it('should return the product of two numbers', () => {
    equal(multiply(3, 4), 12)
  });
});
