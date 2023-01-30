// JavaScript and ES6 Challenges - Do you know JavaScript - Created by Bogdan Stashchuk
"use strict"
console.clear();
/* CHALLENGE 13 - Template Literals

Create carInfo() function that
will return info about each car.

Car is considered cheap if it's price is <= 20000
Car is considered expensive it it's price is > 20000 */

var cars = [
    { brand: 'Honda', price: 13000 },
    { brand: 'Rolls-Royce', price: 120000 }
];

function carInfo(car) {
    let s;
    s = (car.price <= 20000) ? 'cheep' : 'expensive'
    /* if (car.price <= 20000) s = 'cheep'
    else s = 'expensive' */

    return `Price of my new ${car.brand} is ${car.price}$ and it is ${(car.price <= 20000) ? 'cheep' : 'expensive'} car.`
}

cars.forEach(car => console.log(carInfo(car))); 