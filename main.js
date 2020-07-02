/******************
 * YOUR CODE HERE *
******************/
const doubleAll = function (num) {
  let result = [];
  for (i = 0; i < num.length; i++) {
    result.push(num[i] * 2)
  }
  result;
  return result;
}

let test = doubleAll([2, 3, 5])
test;

////////////////************************ */
const yelledGreetings = function (str) {
  let array = []
  for (i = 0; i < str.length; i++) {
    array.push(str[i] + '!')
  }
  return array
}

let test2 = yelledGreetings(['hello', 'there', 'you absolute fiend'])
test2;



////////////////************************ */Done
const absoluteValues = function (num) {
  let array = []
  for (i = 0; i < num.length; i++) {
    array.push(Math.abs(num[i]))
  }
  return array
}
let test3 = absoluteValues([-1, -3, 1000])
test3;



/////////////////************************ */Done
const upperCaseFirstLetters = function (str) {
  let result = []
  for (i = 0; i < str.length; i++) {
    result.push(str[i][0].toUpperCase() + str[i].slice(1).toLowerCase())
  }
  return result
}

let test4 = upperCaseFirstLetters(['cOlin', 'geNghis', 'mesUara', 'ginny', 'michael', 'pak', 'tenzin'])
test4;




/////////////////************************ */ teacher fix
const changeToInitials = function (name) {
  const result = []

  for (i = 0; i < name.length; i++) {
    // const newName = name[i]
    // const initial1 = newName[0]
    // const spaceIndex = newName.indexOf(' ')
    // const initial2 = newName[spaceIndex + 1]
    // result.push(initial1 + initial2 )

    ////or
    result.push(name[i][0] + name[i][name[i].indexOf(' ') + 1].toUpperCase())
  }
  return result
}

let test5 = changeToInitials(['Larry Bird', 'Robert Parrish'])
test5;


/////////////////************************ */
const doubleOdd = function (num) {
  let result = [];
  for (i = 0; i < num.length; i++) {
    if (num[i] % 2 !== 0) {
      console.log(num[i])
      result.push(num[i] * 2)
    } else {
      result.push(num[i])
    }
  }
  return result 
}
let test6 = doubleOdd([-5, 1, 3, -100, -2])
test6;


/////////////////************************ */////////////////
////teacher method
const add1ToLeft = function (num) {
  const result = []
  for (let i = 0; i < num.length; i++) {
    const numToString = num[i].toString();
    if (num[i] < 0) {
      result.push('-1' + num[i].toString().slice(1))
    } else {
      result.push('1' + num[i].toString())
    }
  }
  return result.map(parseFloat);
}
let test7 = add1ToLeft([1, 2, -30, 600])
test7;


////// METHOD 2 LINH SOLUTION ////////////////////////////////
const add1ToLeft2 = function (num) {
  let newStr = []
  for (i = 0; i < num.length; i++) {
    if (num[i] < 0) {
      newStr.push('-1' + num[i].toString().slice(1))
    } else {
      newStr.push('1' + num[i].toString())
    }
  }
  newStr;
  return newStr.map(parseFloat)
}

let test7a = add1ToLeft2([1, 2, -30, 400])
test7a;


//////////// METHOD 3 - Use Math.abs  ///////////////////////
const add1ToLeft3 = function (num) {
  let newArr = []
  for (let i = 0; i < num.length; i++) {
    if (num[i] < 0) {
      newArr.push('-1' + Math.abs(num[i]))
    } else {
      newArr.push('1' + num[i])
    }
  }
  return newArr.map(parseFloat)
}
let test7b = add1ToLeft3([-1, 2, 40, -600])
test7b;

/*******************************************
* CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
*           PLEASE DON'T TOUCH!            *
*******************************************/

if (typeof doubleAll === 'undefined') {
  doubleAll = undefined;
}

if (typeof yelledGreetings === 'undefined') {
  yelledGreetings = undefined;
}

if (typeof absoluteValues === 'undefined') {
  absoluteValues = undefined;
}

if (typeof upperCaseFirstLetters === 'undefined') {
  upperCaseFirstLetters = undefined;
}

if (typeof changeToInitials === 'undefined') {
  changeToInitials = undefined;
}

if (typeof doubleOdd === 'undefined') {
  doubleOdd = undefined;
}

if (typeof add1ToLeft === 'undefined') {
  add1ToLeft = undefined;
}


module.exports = {
  doubleAll,
  yelledGreetings,
  absoluteValues,
  upperCaseFirstLetters,
  changeToInitials,
  doubleOdd,
  add1ToLeft,
}
