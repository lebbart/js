/**
 *
 *
 * Created by Bogdan on 5/4/16.
 *
 * push/pop, shift/unshift, splice
 * split(', ', 2) Второй аргумент не обязателен и он ограничевает длинну массива
 * join()
 * splice()
 * slice()
 * sort()
 * reverse()
 * concat()
 * indexOf() / lastIndexOf
 * Object.keys(obj)
 *
 */

'use strict';

var names = 'Peter, Jack, Greg, Bob, Julia';
var arr = names.split(', ');
for (var i = 0; i < arr.length; i++) {
    console.log("Сообщение пришло, " + arr[i]);
}

console.log("a, b, c, d, e".split(', ', 2));

var str = "apokrefichno";
console.log(str.split(''));

// join()

var someArr = ['One', 'Two', 'Three', 'Four', 'Five'];

var someStr = someArr.join(', ');
console.log(someArr);
console.log(someStr);

/*
 *
 * Метод
 * splice()
 *
 */

var arrJs = ["Я", "изучаю", "JavaScript"];

arrJs.splice(1, 1); // Начиная с первой позиции удалить 1 элемент

console.log(arrJs); // Я Javascript

var arrJs2 = ["Я", "сейчас", "изучаю", "JavaScript"];
var removed = arrJs2.splice(0, 3, 'Мы', 'изучаем');

console.log(removed); // Возвращает массив из удаленных элементов
console.log(arrJs2);

arrJs2.splice(1, 0, '1', '13', '144');
console.log(arrJs2);

var oneFive = [1, 2, 5];
oneFive.splice(-1, 0, 3, 4); // -1 значит что счет идет с конца
console.log(oneFive);

/*
 *
 * Метод
 * slice(0,4)
 * -1 (с конца счет)
 * Если не указывать воторой элемент то скопируется до конца от указанного элемента
 *
 */

var newArrJs2 = arrJs2.slice(1,5);
console.log(newArrJs2);

var fullCopy = arrJs2.slice();
console.log(fullCopy);

/*
 *
 * Метод
 * sort()
 *
 */

var sortThis = [1, 2, 15, 9, 9, 9, 8 , 6 , 14, 63];
sortThis.sort();
console.log(sortThis);

function compareNumeric(a, b) {
    //if (a > b) return 1;
    //if (a < b) return -1;
    return a-b;
}

sortThis.sort(compareNumeric);
console.log(sortThis);

/*
 *
 * Метод
 * reverse()
 *
 */

var revert = sortThis.reverse();
console.log(revert);

/*
 *
 * Метод
 * concat()
 *
 */

var arN = [1, 2];
var newArN = arN.concat([3,4], 5);
console.log(newArN);

/*
 *
 * Метод
 * indexOf() / lastIndexOf()
 *
 */

var someArr = [1, 0, false];

console.log(someArr.indexOf(1));        //  0
console.log(someArr.indexOf(0));        //  1
console.log(someArr.indexOf(false));    //  2
console.log(someArr.indexOf(null));     // -1

// lastIndexOf() ищет просто с конца массива (справа налево)

var store = {};
var items = ['div', 'a', 'form'];

for (var i = 0; i < items.length; i++) {
    var key = items[i];
    store[key] = true;
}

/*
 *
 * Object.keys(obj)
 *
 */

var user = {
    name: 'Petro',
    age: 24
};

var keys = Object.keys(user);
console.log(keys);

/*
 *
 * Home work
 *
 */

/*
 *
 * Task 1
 *
 */

function addClass(obj, cls) {
    var classes = obj.className ? obj.className.split(' ') : [];

    for (var i = 0; i < classes.length; i++) {
        if (classes[i] == cls) return;
    }

    classes.push(cls);

    obj.className = classes.join(' ');
}

var someObj = {
    className: 'open menu'
};

addClass(someObj, 'new');
addClass(someObj, 'me');

console.log(someObj.className);

/*
 *
 * Task 2
 *
 */

function camelize(str) {
    var arr = str.split('-');
    for(var i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    return arr.join('');
}

console.log(camelize('border-box-size')); // borderLeft

/*
 *
 * Task 3
 *
 */

var someObj2 = {
    className: 'open menu'
};

function removeClass(obj, cls) {

    var classes = obj.className.split(' ');

    for (var i = 0; i < classes.length; i++) {
        if (classes[i] == cls) {
            classes.splice(i, 1);
            i--;
        }
    }

    obj.className = classes.join(' ');
}

removeClass(someObj2, 'menu');
addClass(someObj2, 'classss');
addClass(someObj2, 'classss');
addClass(someObj2, 'classss');
removeClass(someObj2, 'classss');

console.log(someObj2.className);


/*
 *
 * Task 4
 *
 */

var arr4 = [1,4,63,234,5,2,3];

function filterRangeInPlace(arr, a, b) {
    for(var i = 0; i < arr.length; i++) {
        var val = arr[i];
        if (val <= a || val >= b) {
            arr.splice(i--, 1);
        }
    }
}

filterRangeInPlace(arr4, 10, 70);

console.log("Filter - " + arr4);

/*
 *
 * Task 5
 *
 */

var arr5 = [5, 2, 1, -10, 8];

function correctSort(a, b) {
    return b - a;
}

arr5.sort(correctSort);
console.log(arr5);

/*
 *
 * Task 6
 *
 */

var technologies = ['JavaScript', 'CSS', 'HTML', 'AngularJS', 'SASS', 'LESS'];
var arrSorted = technologies.slice().sort();
console.log(arrSorted);

/*
 *
 * Task 7
 *
 */

var arrToSort = [1, 24, 5, 465, 3, 2, 46];

function randomFunc(a, b) {
    return Math.random() - 0.5;
}

arrToSort.sort(randomFunc);

console.log(arrToSort);

/*
 *
 * Task 8
 *
 */

var petro = {name: 'Petro', age: 20};
var vasya = {name: 'Vasya', age: 6};
var maria = {name: 'Maria', age: 14};

var people = [petro, vasya, maria];

function sortObject(personA, personB) {
    return personA.age - personB.age;
}

people.sort(sortObject);

var arrPeople = [];
for(var i = 0; i < people.length; i++) {
    arrPeople.push(people[i].name);
}
console.log(arrPeople);
console.log(people[0].age);

/*
 *
 * Task 9
 *
 */

/*
 *
 * Task 10
 *
 */

/*
 *
 * Task 11
 *
 */