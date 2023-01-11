// JavaScript and ES6 Challenges - Do you know JavaScript - Created by Bogdan Stashchuk

"use strict"
console.clear();

/* CHALLENGE 5 - Ternary Operator
Change contents of the isNumber function
using ternary operator. */

function isNum(a) {
    return typeof a === 'number' ? 'Number' : 'Not a Number';
}


console.log(isNum(10)); // Number
console.log(isNum(NaN)); // Number
console.log(isNum('Number')); // Not a Number
console.log(isNum(true)); // Not a Number
console.log(isNum(null)); // Not a Number
console.log(isNum(undefined)); // Not a Number