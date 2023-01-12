// JavaScript and ES6 Challenges - Do you know JavaScript - Created by Bogdan Stashchuk
"use strict"
console.clear();
/* CHALLENGE 12 - Copy Array
Create copy of the a array.*/

var a = [1, 2, 3];

var b;

b = a;
b = [...a];
b = a.slice();
b.push('Veda')



console.log(a);
console.log(b);