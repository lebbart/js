/**
 *
 * Created by Bogdan on 5/4/16.
 * Arrays Numbered Index
 *
 * array.length длинна массива
 * array.push() добавить в конец элемент (быстро)
 * array.pop() удалить с конца элемент (быстро)
 * array.shift() удалить в начале элемент (Работает медленно)
 * array.unshift() добавить в начало элемент (Работает медленно)
 *
 * Перебор массивов быстрее с помощью цикла
 * for (var i = 0; i <= arr.length-1; i++) {...}
 * Чем с использованием (for key in arr) {...}
 * в 10..100 раз быстрее
 *
 * Длинна массива .length - это последний индекс + 1
 *
 *
 */

'use strict';

var array = [];

var fruits = ['apple', 'banana', 'orange'];
fruits[3] = 'Brutto';

for (var i = 0; i <= fruits.length-1; i++) {
    console.log(fruits[i]);
}

console.log(fruits);

var moreArray = [
    1,
    'Name',
    {
        name : 'Petya'
    },
    true
];

console.log(moreArray[2].name);

fruits.pop();
console.log(fruits);

fruits.push("SomeElement");
console.log(fruits);

fruits.unshift("Фруктовый массивчик!");
console.log(fruits);
fruits.shift();
console.log(fruits);

fruits.unshift({name: 'more Elements of object here'}, 'One more str');
fruits.shift();
console.log(fruits);

fruits.push('More', "pineapple");
console.log(fruits);

function eat(arr) {
    arr.pop();
}

var arr = ["нам", "не страшен", "серый", "волк"];
console.log(arr.length);
eat(arr);
eat(arr);
console.log(arr.length);

var anotherArr = [];

anotherArr[2] = 5;
anotherArr.name = "Петя";
anotherArr.age = 23;

console.log(anotherArr);

var a = [];
a[0] = 123;
a[10] = 134;
console.log(a);

for (var i = 0; i <= arr.length-1; i++) {
    console.log(arr[i]);
}

var checkL = [];
checkL[1000] = 12;
console.log(checkL.length);

// Укоротить .length можно принудительно, но элементы не возвращаются.

var someArr = [1,2,3,4,5,6];
someArr.length = 3;
console.log(someArr);
someArr.length = 6;
console.log(someArr[4]); // undefined

// new Array

var arrr = new Array(4,2,4,5,6,7,8,7);
console.log(arrr[3]);

// Многомерные массивы

var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[2][2]);

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

var homeArr = [113,414,525,643,63,63,63,3,5,2,6,7,5];
console.log(homeArr[homeArr.length-1]);

/*
 *
 * Task 2
 *
 */

var goods = ['iPad', 'iPhone', 'MacBook', 'Apple Watch'];
goods[goods.length] = ('Компьютер');
console.log(goods);


/*
 *
 * Task 3
 *
 */

var styles = ['jazz', 'bluez'];
styles.push('Rock-n-Roll');
styles[styles.length-2] = 'Classic';
styles.shift();
styles.unshift('Rap', 'Reggy');
console.log(styles);

/*
 *
 * Task 4
 *
 */

var arrFruits = ['Apple', 'Orange', 'Pineapple', 'Banana', 'Onion'];
var rand = Math.floor(Math.random() * arrFruits.length-1);
console.log(arrFruits[rand]);

/*
 *
 * Task 5
 *
 */

//var arraySumm = [];
//
//while (true) {
//    var value = prompt('Enter some value', 0);
//    if (value === "" || value === null || isNaN(value)) break;
//    arraySumm.push(+value);
//}
//
//var getSumm = 0;
//for (var i = 0; i < arraySumm.length; i++) {
//    getSumm += arraySumm[i];
//}
//
//console.log(getSumm);

/*
 *
 * Task 6
 *
 */

var arr1 = [1,2,3];
var arr2 = arr1;

arr2[0] = 5;

console.log(arr1);
console.log(arr2);

/*
 *
 * Task 7
 *
 */

function find(arr, value) {
    for(var i = 0; i < arr.length; i++) {
        if (value == arr[i]) {
            return i;
        }
    }

    return -1;
}

var arrFind = ['need', 234, 1.2, 5, 'insert'];
console.log(find(arrFind, 5));

/*
 *
 * Task 8
 * Фильтр диапазона
 *
 */



/*
 *
 * Task 9
 * Решето Эратосфена
 *
 */

var arr100 = [];
for (var i = 2; i <= 100; i++) {
    arr100.push(i);
}



console.log(arr100);

/*
 *
 * Task 10
 * Подмассив наибольшей суммы
 *
 */


// Slow
function getMaxSubSum(arr) {
    var maxSumm = 0;
    for(var i = 0; i < arr.length; i++) {
        var sumFixedStart = 0;
        for(var j = i; j < arr.length; j++) {
            sumFixedStart += arr[j];
            maxSumm = Math.max(maxSumm, sumFixedStart);
        }
    }
    return maxSumm;
}

var arrMax = [110,1,-1,-2,-54,-144,100];
console.log(getMaxSubSum(arrMax));

// Fast

function getMaxSubSumFast(arr) {
    var maxSum = 0,
        partialSum = 0;
    for (var i = 0; i < arr.length; i++) {
        partialSum += arr[i];
        maxSum = Math.max(maxSum, partialSum);
        if (partialSum < 0) partialSum = 0;
    }
    return maxSum;
}

console.log(getMaxSubSumFast(arrMax));