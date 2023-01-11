// JavaScript and ES6 Challenges - Do you know JavaScript - Created by Bogdan Stashchuk

"use strict"
console.clear();

/* CHALLENGE 4 - Hoisting

Change code to fix first error after the line 15.
Error after the line 20 should still be generated.
*/


var a = 5;
var b = 10;

if (b > a) {
    let c = 15;
    c = a + b + c
    console.log(c);
}

console.log(c);