/*
 *
 * Created by Bogdan on 5/4/16.
 * forEach – для перебора массива.
 * filter – для фильтрации массива.
 * every/some – для проверки массива.
 * map – для трансформации массива в массив.
 * reduce/reduceRight – для прохода по массиву с вычислением значения.
 *
 */

'use strict';

/*
 *
 * forEach()
 *
 */

var array = ["Apple", "Orange", "Lemon"];
array.forEach(function(item, i, arr){
    console.log(i + ": " + item + ' (Массив: ' + arr + ')');
});

/*
 *
 * filter()
 *
 */

var arr = [-1, 3, 4, 5, 0, 9, -1, -3, 10, 1111];

var positiveArr = arr.filter(function(num){
    return num > 0 && num <= 1000;
});

console.log(positiveArr);

/*
 *
 * map()
 *
 */

var anotherMap = ['HTML', 'CSS', 'JavaScript'];

var nameLength = anotherMap.map(function(name){
    return name.length;
});

console.log(nameLength);

/*
 *
 * every / some
 *
 */

function isPositive(num) {
    return num > 0;
}

console.log(arr.every(isPositive)); // false
console.log(arr.some(isPositive)); // true

/*
 *
 * reduce / reduceRight
 *
 */

var reduceArr = [1,2,3,4,5];

var result = reduceArr.reduceRight(function(sum, current){
    return sum + current;
}, 0);

console.log(result);

// The same but with _lodash func()

_.reduce(reduceArr, function(sum, current) {
    return sum + current;
});

console.log(result);