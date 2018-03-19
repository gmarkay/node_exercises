'use strict';
const { assert: { isFunction, isNumber, equal } } = require('chai');

const add = require('../lib/add');
describe('add', () => {
  it('should be a function', () => {
    isFunction(add);
  });
  it('should return a number', () => {
    isNumber(add());
  });
  it('should return the sum of  two numbers', () => {
    equal(add(2, 3), 5)
  });
});


