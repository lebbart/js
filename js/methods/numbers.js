/**
 * Created by Bogdan on 5/4/16.
 */

/*
 *
 * Numbers
 * 0xFF (16bit) => 255
 * 3e5 => 300000
 * 2e-5 => 0.00002
 * 1/0 => Infinity
 * NaN => not a number
 *
 */

console.log(1234/0);
console.log(0 / 0);

var notanum = 0/0;
console.log(isNaN(notanum));
console.log(isNaN(notanum + 1));
console.log(isNaN(124));

if (notanum !== notanum) {
    console.log('n = NaN');
}

/*
 var value = prompt("Введите Infinity", 'Infinity');

 var number = value;
 console.log(number);

 console.log(isFinite(number));
 */

console.log(isFinite(Infinity));
console.log(isFinite(NaN));

var s = +"124.45";
console.log(typeof(s));

console.log(+"   -123");
// -123
console.log(+"1 2");
// NaN
console.log(+"  \n 12 \n");
// 12
console.log(+"  ");
// 0

console.log(parseInt("123px"));
console.log(parseFloat("113.44ppppp"));


/*
 *
 * Функция для преобразования строки с начальными символами
 * например asd12314
 * в 12314
 * с помощью функции parseInt
 *
 */

var someVar = "asd12314";
var newArray = someVar.split('').reverse();
var more = [];

newArray.forEach(function(item) {

    if(isFinite(item)) {
        more.push(item);
    }
});

more.reverse();
var moreThan = more.join('');
parseInt(moreThan);
console.log(moreThan, isFinite(moreThan));

/*
 * End of func
 */


/*
 jsstudy * isFinitie()
 * parseInt()
 * parseFloat()
 *
 *
 */

console.log(isNaN(someVar));


/*
 *
 * Function
 * isNumeric()
 *
 */

function isNumeric(n) {
    return !isNaN(parseFloat(n) && isFinite(n));
}

console.log(isNumeric(someVar));

/*
 *
 * Система исчисления
 * toString()
 *
 */

var m = 255;
console.log('toString - ' + m.toString(16));

var someN = 1234567890;
console.log(someN.toString(36));

/*
 *
 * Округление
 * Math.floor() => округляет вниз
 * Math.ceil() => округляет вверх
 * Math.round() => округляет до ближайшего целого
 *
 */

console.log(Math.floor(22.34));
console.log(Math.ceil(22.34));
console.log(Math.round(22.34));

/*
 *
 * Побитовое округление
 * ~~
 * ^
 *
 */

console.log(~~12.4);
console.log(123.235 ^ 0);
console.log(155.34 + 123.234 ^ 0);

var x = 123 * 55 / 3 ^ 0;
console.log(x);

/*
 *
 * Interesting method
 *
 */

var someX = 3.457;
console.log(Math.round(someX * 100)/100);

/*
 *
 * toFixed()
 *
 */

var thisIsIt = 124.136523;
console.log(+thisIsIt.toFixed(2));

/*
 *
 * Math.round() & toFixed()
 * not equal!
 *
 */

var price = 6.35;

console.log(+price.toFixed(1));
console.log(Math.round(price * 10)/10);

console.log(0.1 + 0.2 == 0.3);
console.log(0.1 + 0.2 > 0.3);

// var 1
console.log((0.1 * 10 + 0.2 * 10) / 10 == 0.3);

// var 2
var result = 0.1 + 0.3;
console.log(+result.toFixed(6) == 0.4);

/*
 *
 * Другие полезные функции
 * Math.random()
 * Math.min()
 * Math.max()
 * Math.sqrt()
 *
 */

/*
 *
 * Красиво вывести число
 * toLocaleString()
 *
 */

var nums = 123413423524;
console.log(nums.toLocaleString());

/*
 *
 * Tasks for homework
 *
 */

/*
 *
 * Task 1
 *
 */

//var valueSome = +prompt("Введите 1e число","");
//var valueOther = +prompt("Введите 2e число","");

//var calculate = valueSome + valueOther;
//console.log("Summ = " + calculate);

/*
 *
 * Task 2
 *
 */

console.log(6.35.toFixed(1)); // 6.34999999999999964473 (if toFixed(20))
console.log(1.35.toFixed(1));

/*
 *
 * Task 3
 *
 */

var priceOne = 0.1;
var priceTwo = 0.5;

var summBy = (priceOne + priceTwo).toFixed(2);
console.log(summBy + "$");

/*
 *
 * Task 4
 *
 */

//var k = 0;
//while (k != 10) {
//    k += 0.2;
//}

/*
 *
 * Task 5
 * Decimial end of num
 *
 */

function getDecimial(num) {
    return (num - Math.floor(num)).toFixed(5);
}

console.log(getDecimial(1.1124514));

/*
 *
 * Task 6
 * Bine formula (need to do this)
 *
 */

/*
 *
 * Task 7
 *
 */

var maxx = 100;
console.log((Math.random() * maxx).toFixed(2));


/*
 *
 * Task 8
 *
 */

var someMin = 10,
    someMax = 900;

var getRandom = (someMin + Math.random() * (someMax - someMin)).toFixed(0);
console.log(getRandom);

/*
 *
 * Task 9
 *
 */

function randomInteger(min,max) {
    var result = (min + Math.random() * (max - min)).toFixed(0);
    result = Math.round(result);
    return result;
}

console.log(randomInteger(1,4));