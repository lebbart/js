/**
 * Created by Bogdan on 5/4/16.
 * Objects like assosiative array
 *
 *
 */

'use strict';

//o = new Object();
//obj = {};

var person = {};

person.name = 'Богдан';
person.age = 23;

console.log(person.name + ' : ' + person.age);

delete person.age;

if ('name' in person) {
    console.log('True');
} else {
    console.log('False');
}

console.log(person.laaaaa === undefined);
console.log(person.name === undefined);

var object = {
    test: undefined,
    some: 'more',
    name: 'Bogdan'
};

console.log(person.test === undefined); // true
console.log(person.someee === undefined); // true

console.log('name' in object); // true
console.log('name1' in object); // false

var car = {};
car['brand'] = 'Tesla';
car['model'] = 'Model X';

// Start
// Доступ через переменную (квадратные скобки)

var brandMore = 'brand';
console.log(car[brandMore]);
console.log(car['model']);

// End

var menuSetup = {
    'width' : '200px',
    'height' : '200px',
    'title' : 'Menu',
    'color' : '#000'
};

var user = {
    name: 'Таня',
    age: 23,
    size: {
        top: 90,
        middle: 60,
        bottom: 90
    }
};

console.log(user.name);
console.log(user.size.top);

var userOne = {};
userOne.name = 'Вася';
userOne.surname = 'Петров';
userOne.name = 'Сергей';
delete userOne.name;