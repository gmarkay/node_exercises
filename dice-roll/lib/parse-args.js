'use strict'

module.exports = (args) => {

  const numObj = {
    count: +args[0],
    sides: +args[1]
  }
  console.log(numObj);
  return numObj;
};