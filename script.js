// JavaScript and ES6 Challenges - Do you know JavaScript - Created by Bogdan Stashchuk
"use strict"
console.clear();
/* CHALLENGE 17 - IIFE (Immediately Invoked Function Expression)

Complete IIFE that will expose following methods:
  greet() - It will take one argument and return greeting string
  changeGreeting() - It will change greeting string

Initial greeting string "Hey, that's" must be defined inside IIFE.*/

let greeting = (() => {
    let greetingString = "Hey that's";

    function greet(name) {
        return `${greetingString} ${name}`
    }

    function changeGeet(newGreeting) {
        greetingString = newGreeting
    }

    return {
        greet, changeGeet
    }

})();



console.log(greeting.greet('VedaGna'));


console.log(greeting.changeGeet('Good Morning from'));

console.log(greeting.greet('Gnapika'));