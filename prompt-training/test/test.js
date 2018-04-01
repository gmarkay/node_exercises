const { assert: { isFunction, equal, deepEqual, isArray } } = require('chai');
// const { assert: { equal, isFunction, isObject, isArray } } = require("chai");

let Program = require('../program.js');
let programCtrl = require('../programCtrl.js');

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
    isFunction(Program.getAll);
    isFunction(Program.getOne);
    isFunction(Program.delete);
    isFunction(Program.create);
  });
  it('return of getAllshould be an array', () => {
    return Program.getAll().then(programs => {
      isArray(programs);
    });
  });

  it('first and last programs in program array should equal the correct object', () => {
    return Program.getAll().then(programs => {
      deepEqual(programs[0], firstProgram)
      deepEqual(programs[13], lastProgram)
    });
  });
});


