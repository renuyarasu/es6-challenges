// JavaScript and ES6 Challenges - Do you know JavaScript - Created by Bogdan Stashchuk

"use strict"
console.clear();

/* CHALLENGE 6 - Arrow Functions

Use arrow functions instead of functions
where possible.*/

/* function multiply(a, b) {
    return a * b;
} */

let multiply = (a, b) => a * b;

setTimeout(function () {
    console.log(multiply(10, 20));
}, 1000)

setTimeout(function () {
    console.log(multiply(1, 2));
}, 0)

setTimeout(() =>  console.log(multiply(3, 3)), 5000)