/**
 * Created by Bogdan on 5/4/16.
 *
 * .length (это свойство)
 * .charAt(0) (это метод)
 * .toLowerCase()
 * .toUpperCase()
 * .indexOf(0)
 * .lastIndexOf(0)
 * .trim()
 *
 */

var string = "       string have some length.";
console.log(string);
string = string.trim();
console.log(string);
var str = 'also a string.';

var stringCorrect = "So I\'m a good man."; // Экранирование строки
console.log(stringCorrect);

console.log(stringCorrect.length); // Длинна строки

console.log(string.charAt(0)); // Получение доступа к символу в строке, если символа нет - возвращает пустую строку

console.log(string[33]); // Если сивола нет, то этот вариант со скобками возвращает undefined

console.log(string[1] + string[2] + string.charAt(3)); // Вернет tri

console.log(str.toLowerCase());

console.log(str.charAt(5).toUpperCase());

console.log(str.indexOf('also')); // 0
console.log(str.indexOf('afa')); // -1
console.log(str.indexOf('string.')); // ??? почему вывело 7?
console.log(str.lastIndexOf('also')); // 0

/*
 *
 * Красивый вызов indexOf через ~
 *
 */

console.log(~2); // -(2+1) = -3
console.log(~1); // -(1+1) = -2
console.log(~0); // -(0+1) = -1
console.log(~-1); // -(-1+1) = 0

var someStr = 'widget';

if(~someStr.indexOf('some')) {
    console.log('Совпадение есть!');
} else {
    console.log('Совпадения нет!');
}

/*
 *
 * Поиск всех вхождений
 * с использованием цикла
 *
 */

var newVarStr = 'Текст, которые имеет несколько слов текст. Но может быть и не только текст в тексте.';
var target = 'текст';
newVarStr = newVarStr.toLocaleLowerCase();

var position = -1;
while((position = newVarStr.indexOf(target, position + 1)) != -1) {
    console.log(position);
}

/*
 *
 * Взятие подстроки
 *
 * .substr()
 * .substring()
 * .slice()
 *
 */

var stringWith = 'text a lot of text';

console.log(stringWith.substring(0,4)); // 'text'
console.log(stringWith.substring(4)); // ' a lot of text'

console.log(stringWith.substr(1,4)); // 'ext '
console.log(stringWith.slice(0,5));

console.log('some string here andlongthemeswwrwesd'.slice(1,-1));
console.log('some string here andlongthemeswwrwesd'.slice(1,-3));

/*
 *
 * Unicode symbols
 *
 * .charCodeAt()
 * .fromCharCode()
 *
 */

console.log(String.fromCharCode(1072));

var stringmore = 'text for all';

for(var i = 0; i < stringmore.length; i++) {
    if (stringmore[i].charCodeAt() != 32) {
        console.log('code - ' + stringmore[i] + ' : ' + stringmore[i].charCodeAt());
    }
}

var willBe = '';
for (var i = 1034; i <= 1113; i++) {
    willBe += String.fromCharCode(i);
}
console.log(willBe);

/*
 *
 * Посимвольное сравнение
 *
 */

var oneStr = 'Some string1';
var twoStr = 'Some string';
console.log(oneStr > twoStr);

/*
 *
 * Правильное сравнение
 * .localeCompare()
 *
 */

var strElky = "Ёлки";
console.log(strElky.localeCompare("Ёлки"));


/*
 *
 * Задача 1
 *
 */

function ucFirst(str) {
    str = str.trim();

    if(!str) {
        return 'return пустота';
    }

    return str.charAt(0).toUpperCase() + str.slice(1);
}

var someStt = 'this is';
var someS2tt = '     вася пилит раму';
console.log(ucFirst(someStt));
console.log(ucFirst(someS2tt));
console.log(ucFirst(""));

/*
 *
 * Проверьте спам
 *
 */

function checkSpam(str) {
    var lowerStr = str.toLowerCase();

    return !!(~lowerStr.indexOf('xxx') || ~lowerStr.indexOf('viagra'));
}

if (checkSpam('buY ViAgra now') == true) {
    console.log(true);
} else {
    console.log(false);
}

if (checkSpam('XXX it is some') == true) {
    console.log(true);
} else {
    console.log(false);
}

if (checkSpam('as user I want be able') == true) {
    console.log(true);
} else {
    console.log(false);
}


/*
 *
 * Усечение строки
 *
 */

function truncate(str, maxlength) {
    var trimed = str.trim();
    if (trimed.length > maxlength) {
        return trimed.slice(0, maxlength - 3) + '...';
    }

    return trimed;
}

console.log(truncate('Авокадо может расти на разных континентах!', 20));

/*
 *
 * Выделить число
 *
 */

function extractCurrencyValue(str) {
    return +str.slice(1);
}

console.log(extractCurrencyValue('$120'));