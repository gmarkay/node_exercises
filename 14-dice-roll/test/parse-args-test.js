
const parseFile = require('../lib/parse-args');
const {assert:{isFunction, isObject, deepEqual }} = require('chai');

describe('parse args module', ()=>{
  describe('parse-args', ()=>{
    it('should be the correct object',()=>{
      let correctObj = { count: 1, sides: 6 };
      // console.log(parseFile(['1','3']), 'parseFile');
      deepEqual(parseFile([]), correctObj);
      deepEqual(parseFile([6]), correctObj);
      deepEqual(parseFile([13, 6]), correctObj);

    });
  })
});