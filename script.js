// JavaScript and ES6 Challenges - Do you know JavaScript - Created by Bogdan Stashchuk
"use strict"
console.clear();
/* CHALLENGE 10 - Destructuring and Rest Operator

Assign values to the a, b, c variables
using destructuring and rest operator.*/


var a, b, c;
var arr = [1, 2, 3, 4, 5, 6];


[a, b, ...c] = arr;

console.log(a, b, c);
console.log(c);