'use strict'

module.exports.randomInt = (min, max) => {
  return Math.floor(Math.random() * +max) + +min;
}

