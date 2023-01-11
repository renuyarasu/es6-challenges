// JavaScript and ES6 Challenges - Do you know JavaScript - Created by Bogdan Stashchuk
"use strict"
console.clear();
/* CHALLENGE 10 - Destructuring and Rest Operator

Assign values to the a, b, c variables
using destructuring and rest operator.*/

var a, b, c, d, arr;
a = [1, 2];
b = [3, 4];
c = [8, 9, 10];
d = 11;

arr = [...a, ...b, 5, 6, 7, ...c, d]
console.log(arr);