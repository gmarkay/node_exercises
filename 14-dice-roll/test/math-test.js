const { randomInt } = require('../lib/math');
const {assert: { isFunction, isNumber, isNotNaN, oneOf } } = require('chai');

describe('math module', ()=>{
  describe('randomInt()', ()=>{
    it('should be a function, obv', ()=>{
      isFunction(randomInt);
    });
    it('should return a number', ()=>{
      isNumber(randomInt(1,6));
      // isNumber(randomInt("fred", 1));
      // isNotNaN(randomInt('fred', 6));
      for(let i =0; i<1000; i++){
        oneOf(randomInt(1,6),[1,2,3,4,5,6] )
      }
    });
    it('should handle aregs that are not numbers', ()=>{
        oneOf(randomInt('1', 6), [1,2,3,4,5,6]);
        oneOf(randomInt('1', '6'), [1,2,3,4,5,6]);
        oneOf(randomInt(1, '6'), [1,2,3,4,5,6]);
    });
  });


});