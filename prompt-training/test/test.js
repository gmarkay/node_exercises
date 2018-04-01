
const { assert: { isFunction, equal, deepEqual, isObject, isArray } } = require('chai');

let { getAll, getOne, create } = require('../program.js');

let firstProgram = {
  program_id: 1,
  seats: 17,
  instructor: 'Easton Eichmann',
  start_date: 'Sun Aug 27 2017 19:45:15 GMT-0500 (CDT)',
  end_date: 'Tue Jul 31 2018 22:55:37 GMT-0500 (CDT)',
  category: 'action-items'
};

let lastProgram = {
  program_id: 14,
  seats: 16,
  instructor: 'Esteban Hirthe',
  start_date: 'Fri Oct 13 2017 07:18:47 GMT-0500 (CDT)',
  end_date: 'Fri Oct 19 2018 22:35:08 GMT-0500 (CDT)',
  category: 'e-commerce'
};

describe('model functions', () => {
  it('all CRUDs should be functions', () => {
    isFunction(getAll);
    isFunction(getOne);
    // isFunction(delete);
    isFunction(create);
  });
  it('getAll should return an array', () => {
    return getAll().then(programs => {
      isArray(programs);
    });
  });

  it('first and last programs in programs array should equal the correct object', () => {
    return getAll().then(programs => {
      deepEqual(programs[0], firstProgram)
      deepEqual(programs[13], lastProgram)
    });
  });
  it('getOne should return an object ', () => {
    let testId = Math.floor(Math.random() * (14) + 1);
    return getOne(testId).then(program => {
      isObject(program);
    });
  });
  it('getOne should return the correct program', () => {
    return getOne(1).then(program => {
      deepEqual(program, firstProgram)
    })
  });

});


