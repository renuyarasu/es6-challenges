// JavaScript and ES6 Challenges - Do you know JavaScript - Created by Bogdan Stashchuk
"use strict"
console.clear();
/* CHALLENGE 13 - Template Literals

Create carInfo() function that
will return info about each car.

Car is considered cheap if it's price is <= 20000
Car is considered expensive it it's price is > 20000 */

var cars = [
    { brand: 'Honda', price: '10L' },
    { brand: 'Rolls-Royce', price: '10C' }
]

function carInfo(car) {
    return `Price of my new ${car.brand} is ${car.price}  and it is cheap car.`
}

cars.forEach(car => console.log(carInfo(car)));