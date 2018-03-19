'use strict';
const { assert: { isFunction, isNumber, equal } } = require('chai');

const divide = require('../lib/divide');
describe('divide', () => {
  it('should be a function', () => {
    isFunction(divide);
  });
  it('should return a number', () => {
    isNumber(divide());
  });
  it('should return the product of two numbers', () => {
    equal(divide(6, 2), 3)
  });
});
