// JavaScript and ES6 Challenges - Do you know JavaScript - Created by Bogdan Stashchuk
"use strict"
console.clear();

/* CHALLENGE 8 - Check presence of the function parameters
Throw Error when function square() is called
without arguments.

Create new function and use it as default parameter.*/

function missingArg() {
    throw new Error('Function square requires an argument!')
}

function square(a = missingArg()) {
    console.log(a * a);
}

square(10)
square(20)
square(32)
square()