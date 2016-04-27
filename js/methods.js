/**
 * Created by Bogdan on 4/14/16.
 * Main js file of this project.
 * Will work on it all day, all night
 * to get better results
 */

'use strict';

/*
 *
 * Methods and Properties
 *
 */

console.log("Привет! Меня зовут Алерт, я показываю сейчас этот текст, вернее кол-во символов!".length);

var text = 'Some text to find length.';
console.log(text.length + " - длинна строки");

console.log(text.toUpperCase());

var n = 12.345;

console.log( n.toFixed(1) );

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
 *
 *
 */