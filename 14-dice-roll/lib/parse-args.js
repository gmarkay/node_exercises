'use strict'

module.exports = (args) => {
  const numObj = {
  }

  if (args.length < 2) {
    numObj.count = 1;
    
    if (args.length === 1) {
      numObj.sides = args[0]
      // console.log(numObj, 'numObj');
    }
     else {
      numObj.sides = 6;
    }

  } else if (args.length === 2) {
      numObj.count =  args[0],
      numObj.sides = args[1]
  } else {
    console.log('please enter two or less numbers');
  }


  return numObj;
};



// joes way

// module.exports = ([num, sides]) => {
//   const dieNums = {};
//   dieNums.count = sides ? num : 1;
//   dieNums.sides = sides || num || 6;

//   return dieNums;

// }