import React from 'react';

/*
function FunctionName(something) {
  return something;
}
*/

/*
const incrementNumber = ({ oldNumber }) => {
  return <div>{oldNumber + 1}</div>;
};
// incrementNumber(2);
*/

/*!
 * ----------------------------------------------------------
 * Math
 * ----------------------------------------------------------
 */

// Add
let mmAdd = function(a = 0, b = 0) {
  return a + b;
};

// Multiply
let mmMultiply = function(a = 0, b = 0) {
  return a * b;
};

// Deduct
let mmDeduct = function(a = 0, b = 0) {
  return a - b;
};

// Power
let mmPower = function(a = 0, b = 0) {
  return a ** b;
};

// Division
let mmDivide = function(a = 0, b = 0) {
  return a / b;
};

// Percent
let mmPercent = function(a = 0, b = 0) {
  return (a * b) / 100;
};

const mmCalc = function(calcFunc, num1, num2) {
  return calcFunc(num1, num2);
};

// usage
// let result = mmCalc(mmPercent, 500, 10);
// console.log(result);

/*!
 * ----------------------------------------------------------
 * N number of Math by using rest parameter
 * its not spread operator here
 * 'spread operator' as an argument is a 'rest parameter'
 * ----------------------------------------------------------
 */

// Add all numbers
let mmAddAll = function(...allnums) {
  let sum = 0;
  for (let i = 0; i < allnums.length; i++) {
    //sum = sum + allnums[i];
    sum += allnums[i];
  }
  return sum;
};

// usage
// let result = mmAddAll(1, 2, 3, 4, 5);
// console.log(result);

// multiply all numbers
let mmMultiplyAll = function(...allnums) {
  // not 0 bcoz 0 will result in 0 output coz 0*anything=0
  let res = 1;
  for (let i = 0; i < allnums.length; i++) {
    // res = res * allnums[i];
    res *= allnums[i];
  }
  return res;
};

// usage
// let result = mmMultiplyAll(2, 2, 2, 2, 2);
// console.log(result);

/*!
 * ----------------------------------------------------------
 * Spread Operator
 * ----------------------------------------------------------
 */

// Spread into array items
const mmSpread = function(a = '') {
  return [...a];
};

// usage
// let result = mmSpread("universe");
// console.log(result);

/*!
 * ----------------------------------------------------------
 * Convert Array into Object via spread operator
 * ----------------------------------------------------------
 */

const mmObj = function(a = '') {
  return { ...a };
};

// usage
// let result = mmObj("universe");
// console.log(result);

/*!
 * ----------------------------------------------------------
 * Merge Array into single Array via spread operator
 * ----------------------------------------------------------
 */

const mmMergeArray = function(a = [], b = []) {
  return [...a, ...b];
};

// usage
// let result = mmMergeArray([1, 2, 3], [4, 5, 6]);
// console.log(result);

/*!
 * ----------------------------------------------------------
 * Merge Objects into single New Object via spread operator
 * This will overide keys values if found duplicate
 * old value in an object will be overidden by new value in second object if key is same
 * ----------------------------------------------------------
 */

const mmMergeObj = function(a = {}, b = {}) {
  return { ...a, ...b };
};

// usage
// let result = mmMergeObj(
//   { Name: "John", Age: 20 },
//   { Email: "john@msn.com", Age: 40 },
// ); // 40 will replace 20 in merging process
// console.log(result);

/*!
 * ----------------------------------------------------------
 * hasClass / addClass / removeClass
 * ----------------------------------------------------------
 */

function hasClass(el, className) {
  return el.classList
    ? el.classList.contains(className)
    : new RegExp('\\b' + className + '\\b').test(el.className);
}

function addClass(el, className) {
  if (el.classList) el.classList.add(className);
  else if (!hasClass(el, className)) el.className += ' ' + className;
}

function removeClass(el, className) {
  if (el.classList) el.classList.remove(className);
  else
    el.className = el.className.replace(
      new RegExp('\\b' + className + '\\b', 'g'),
      '',
    );
}

// usage
// let bodyTag = document.querySelector("body");
// if (!hasClass(bodyTag, "is-mobile")) addClass(bodyTag, "is-mobile");

/*!
 * ----------------------------------------------------------
 * Mobile or Non-Mobile Test // Screen Width Test
 * ----------------------------------------------------------
 */

function screenCheck() {
  let bodyTag = document.querySelector('body');
  var deviceAgent = navigator.userAgent.toLowerCase();
  var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
  if (agentID || window.innerWidth <= 1024) {
    // Mobile screen code here
    addClass(bodyTag, 'is-mobile');
    removeClass(bodyTag, 'not-mobile');
  } else {
    // Desktop screen code here
    addClass(bodyTag, 'not-mobile');
    removeClass(bodyTag, 'is-mobile');
  }
}

/*!
 * ----------------------------------------------------------
 * Sort via callback / ascending descending
 * by default sort() sorts things as strings
 * ----------------------------------------------------------
 */

const sortAsc = function(a, b) {
  return a - b;
};

const sortDesc = function(a, b) {
  return b - a;
};

/*
//in case you want to sort by specific unit // number
const sortAsc = function(a, b) {
  return a.age - b.age;
};
//in case you want to sort by specific unit // string
// descending
const sortDesc = function(a, b) {
  return a.name > b.name ? -1 : 1;
};
// ascending
const sortAsc = function(a, b) {
  return a.name > b.name ? 1 : -1;
};
*/

//usage
// let myArray = [1, 3, 4, 2, 11, 22];
// let result = myArray.sort(sortAsc);
// console.log(result);

/*!
 * ----------------------------------------------------------
 * Clean form fields and trim spaces // strip html tags
 * ----------------------------------------------------------
 */

function cleanForm() {
  let formElement = document.querySelectorAll('input, textarea');
  formElement.forEach(eachFrmElement => {
    eachFrmElement.addEventListener('change', function(e) {
      //formElement.trimStart().trimEnd();
      let getVal = this.value;
      let newVal = getVal
        .replace(/(<([^>]+)>)/gi, '')
        .trim()
        .trimStart()
        .trimEnd();
      this.value = newVal;
      //console.log(this.value);
    });
  });

  // formElement.addEventListener("change", function(e) {
  //   //formElement.trimStart().trimEnd();
  //   let getVal = this.value;
  //   let newVal = getVal.trimStart().trimEnd();
  //   this.value = newVal;
  //   console.log(this.value);
  // });
}

/*!
 * ----------------------------------------------------------
 * Document Ready / Window Resize / Window Load Plain JS
 * ----------------------------------------------------------
 */

document.addEventListener('DOMContentLoaded', function() {
  // DOM loaded // DOM Ready
  DOMLoaded();
});

window.addEventListener('resize', function() {
  // Window Resized
  windowResized();
});

window.addEventListener('load', function(event) {
  // Window Loaded with all Content
  windowLoaded();
});

/*
window.onload = function(){
  //
};
*/

function DOMLoaded() {
  //
}
function windowResized() {
  //
}
function windowLoaded() {
  //
}
