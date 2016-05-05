/**
 * Created by Bogdan on 5/4/16.
 * Objects options
 *
 *
 */

'use strict';

//for...in

//for (key in obj) {
//    ...
//}

//for (var key in obj) ...

var menu = {
    width : '200px',
    height : '150px',
    title : 'JavaScript'
};

for (var key in menu) {
    console.log('Ключ: ' + key + ', значение: ' + menu[key]);
}

/*
 *
 * Количество свойств в объекте
 *
 */

var menuSecond = {
    width : '200px',
    height : '150px',
    title : 'JavaScript'
};

var counter = 0;

for (var key in menu) {
    counter++;
}

console.log('Counted options: ' + counter);

// end

var codes = {
    '+7' : 'Russian',
    '+3' : 'Ukraine',
    '+1' : 'USA'
};

var user = {
    name : 'Andrew',
    surname : 'Petrov'
};

user.age = 35;

for (var key in user) {
    console.log(key, user[key]);
}

for (var code in codes) {
    var value = codes[code];
    code = +code;

    console.log(code + ': ' + value);
}

/*
 *
 * Homework
 *
 */

/*
 *
 * Task 1
 *
 */

function isEmpty(obj) {
    for (var key in obj) {
        return false
    }
    return true;
}

var someObj = {};
var someOb = {
  name : 'asrewrg'
};

console.log(isEmpty(someOb));
console.log(isEmpty(someObj));


/*
 *
 * Task 2
 *
 */

var salaries = {
    peter : 1000,
    alex : 2000,
    andrew : 1240
};

var summ = 0;

for (var name in salaries) {
    summ += salaries[name];
}

console.log("Сумма з/п - " + summ);

/*
 *
 * Task 3
 *
 */

var salariesMore = {
    'peter' : 1000,
    'alex' : 2000,
    'andrew' : 1240,
    'kostya' : 12450
};

var manWithBig = '',
    salaryBig = 0;
for (var more in salariesMore) {
    if (salaryBig <= salariesMore[more]) {
        salaryBig = salariesMore[more];
        manWithBig = more;
    }
}

console.log(manWithBig || 'Нет сотрудников');

/*
 *
 * Task 4
 *
 */

var newObj = {
    'Tesla' : 10000,
    'Mercedes' : 15000,
    'Toyota' : 14155,
    'Name' : 'Ivan',
    'Age' : 25,
    'Language' : 'Russian'
};

function isNumeric(n) {
    return !isNaN(parseFloat(n) && isFinite(n));
}

console.log(newObj);

function multiplyNumeric(obj) {
    for (var key in obj) {
        if(isNumeric(obj[key])) {
            obj[key] *= 2;
        }
    }

    return obj;
}

console.log(multiplyNumeric(newObj));