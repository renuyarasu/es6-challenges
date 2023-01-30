// JavaScript and ES6 Challenges - Do you know JavaScript - Created by Bogdan Stashchuk
"use strict"
console.clear();
/* CHALLENGE 16 - Swap values of the two variables

Swap values of the a and b.
Don't use for this any new variable.*/

let a = 'first';
let b = 'second';

[a, b] = [b, a] // destructuring arrays

console.log(a, b); // second first
