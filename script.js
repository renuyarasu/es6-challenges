// JavaScript and ES6 Challenges - Do you know JavaScript - Created by Bogdan Stashchuk

"use strict"
console.clear();

/*
Create a function sum() that will sum all arguments passed to it. Quantity of the arguments is unknown.
Use console.log() at the end of the sum() function to print result. Use ES6 whenever possible. */

function sum(...args) {
    // console.log(args);
    let total;
    total = args.reduce((acc, ele) => acc + ele);
    console.log(total);
}


sum(1, 2, 3)
sum(1, 2, 3, 4, 5, 6)
sum(1, 2, 3, 4, 5, 6, 7, 8, 9)

