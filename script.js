// JavaScript and ES6 Challenges - Do you know JavaScript - Created by Bogdan Stashchuk
"use strict"
console.clear();

/* CHALLENGE 18 - Classes ~ Rewrite code below using ES6 Classes */

/* function Fruit(title, price) {
    this.title = title;
    this.price = price;
}


Fruit.prototype.priceInfo = function () {
    return `Price of the ${this.title} is ${this.price}₹`
}
 */

class Fruit{
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    priceInfo() {
        return `Price of the ${this.title} is ${this.price}₹`
    }
}

let apple = new Fruit('Apple', 25);
console.log(apple.priceInfo());


let banana = new Fruit('Banana', 10);
console.log(banana.priceInfo());