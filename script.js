// JavaScript and ES6 Challenges - Do you know JavaScript - Created by Bogdan Stashchuk
"use strict"
console.clear();
/* CHALLENGE 15 - Iterate over String

Count number of the lowercase vowel letters in the string.
Vowel letters - a, e, i, o, u*/


var vowelsCount = 0;
var vowels = ['a', 'e', 'i', 'o', 'u'];
var str = 'Count number of the lowercase vowel letters in the string';

for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) vowelsCount++;
}
console.log(vowelsCount); //17