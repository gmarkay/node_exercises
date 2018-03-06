'use strict'

module.exports = {
  randomInt: (min, max) => {
    let randNum = Math.floor(Math.random() * max) + min;
    return (randNum);
  }
}

