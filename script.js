// JavaScript and ES6 Challenges - Do you know JavaScript - Created by Bogdan Stashchuk
"use strict"
console.clear();

/* CHALLENGE 19 - Iterate over Object
Create a function sumObjectValues() that will sum all values
of the fields that contain numbers.
Ensure that iteration is done only over own properties of the object. */

let nums = {
    a: 10,
    b: 20,
    c: 'VedGna',
    d: 30,
}
function sumObjectValues(object) {
    for (let k in object) {
        console.log(k);
    }
}

console.log(sumObjectValues(nums));