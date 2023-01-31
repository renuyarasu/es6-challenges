// JavaScript and ES6 Challenges - Do you know JavaScript - Created by Bogdan Stashchuk
"use strict"
console.clear();

/* CHALLENGE 20 - Sum positive and negative numbers
Create a function sumPlusMinus() that takes array and sums separately positive and negative numbers.
It should return an object like this:
{
  plus: 74, // sum of all positive numbers
  minus: -54 // sum of all negative numbers}
*/

let nums = [10, 20, 30, 40, 50, -10, -20, -30, -40, -50];

function sumPlusMinus(arr) {
    return arr.reduce((acc, ele) => {
        return {
            plus: ele > 0 ? acc.plus + ele : acc.plus,
            minus: ele < 0 ? acc.minus + ele : acc.minus,
        }
    }, { plus: 0, minus: 0 })
}
console.log(sumPlusMinus(nums));