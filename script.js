// JavaScript and ES6 Challenges - Do you know JavaScript - Created by Bogdan Stashchuk
"use strict"
console.clear();
/* CHALLENGE 14 - Object Destructuring

Create shortPerson() function that will destructure each person object.
Sample result:
{n: "Mike", c: "Spain", a: 23, p: 100}

If input object doesn't have postsQuantity field
it should get default value 0.*/

var person_01 = {
    name: 'VedaGna',
    info: {
        country: 'India',
        age: 5
    },
    postsQuantity: 100
}

var person_02 = {
    name: 'Gnapika',
    info: {
        country: 'India',
        age: 8
    }
};

function shortPerson(obj) {
    var {
        name: n,
        info: {
            country: c,
            age: a
        },
        postsQuantity: p = 0

    } = obj;
    return {
        n,
        c,
        a,
        p
    }
}

console.log(shortPerson(person_01));


console.log(shortPerson(person_02));