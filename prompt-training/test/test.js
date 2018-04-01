
const { assert: { isFunction, equal, deepEqual, isObject, isArray, isNumber } } = require('chai');

let { getAll, getOne, create } = require('../program.js');

let testId = Math.floor(Math.random() * (13) + 1);

let firstProgram = { program_id: 1, seats: 25, instructor: 'Morton Lubowitz', start_date: 'Thu Nov 16 2017 06:39:32 GMT-0600 (CST)', end_date: 'Fri May 18 2018 21:24:18 GMT-0500 (CDT)', category: 'architectures' };

let lastProgram = { program_id: 14, seats: 6, instructor: 'Rodrick Hauck', start_date: 'Thu Mar 01 2018 07:46:18 GMT-0600 (CST)', end_date: 'Sun Mar 24 2019 00:40:33 GMT-0500 (CDT)', category: 'partnerships' };


describe('model functions', () => {
  it('all CRUDs should be functions', () => {
    isFunction(getAll);
    isFunction(getOne);
    // isFunction(delete);
    isFunction(create);
  });
});

describe('get all', () => {
  it('should return an array of objects', () => {
    return getAll().then(programs => {
      isArray(programs);
      isObject(programs[testId])
    });
  });
  it('it should return the correct objects for first and last in the array', () => {
    return getAll().then(programs => {
      deepEqual(programs[0], firstProgram)
      deepEqual(programs[13], lastProgram)
    });
  });
});

describe('get one', () => {
  it('it should return an object ', () => {
    console.log(testId);
    return getOne(testId).then(program => {
      isObject(program);
    });
  });
  it('it should return the correct program', () => {
    return getOne(1).then(program => {
      deepEqual(program, firstProgram);
    })
  });
});

describe('create', () => {
  it('should return a number', () => {
    return create(22, 'Bob Jenkins', '12-12-2012', '12-12-2222', 'test course').then(newId => {
      isNumber(newId);
    });
  });
  it('should create a new program in the database', () => {
    return create(22, 'Bob Jenkins', '12-12-2012', '12-12-2222', 'test course')
      .then(newId => {
        return getOne(newId)
          .then(lastProg => {
            equal(newId, lastProg.program_id)
          });
      });
  });
});
