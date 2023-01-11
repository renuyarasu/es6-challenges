// JavaScript and ES6 Challenges - Do you know JavaScript - Created by Bogdan Stashchuk

"use strict"
console.clear();
/* CHALLENGE 7 - Default parameters

Answer following question:
1. Why on the line 14 we can't simply use following statement:
mult = mult || 2;

Set default value of the mult parameter
in the multiplyBy() function.*/

function multiplyBy(a, mult = 2) {
    console.log(a * mult);
}

multiplyBy(2);
multiplyBy(2, undefined);
multiplyBy(2, null);
multiplyBy(2, NaN);
multiplyBy(2, 10);
multiplyBy(5, 25);