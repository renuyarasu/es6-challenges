// JavaScript and ES6 Challenges - Do you know JavaScript - Created by Bogdan Stashchuk
"use strict"
console.clear();

/* CHALLENGE 9 - Object Destructuring

Declare mult() function that will multiply values
of the x, y, z fields of the passed object.*/

var num = {
    x: 10,
    y: 20,
    z: 30
}
/* 
function mult(obj) {
    let { x, y, z } = obj;
    return x * y * z;
}
 */
let mult = ({ x, y, z }) => x * y * z;

console.log(mult(num)); //6000