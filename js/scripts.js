/**
 * Created by Bogdan on 4/14/16.
 * Main js file of this project.
 * Will work on it all day, all night
 * to get better results
 */

'use strict';

function addScript(src) {
    var script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.head.appendChild(script);
}

addScript('app1.js');
addScript('app2.js');
addScript('app3.js');

//alert('Сейчас будет error');
//[1,3].forEach(alert);

var msg;
msg = "some text here";
//alert(msg);

var newMsg = "some other text";
//alert(newMsg);

var user = "Bogdan", age = 23, gender = "M";

if(gender == "M") {
    gender = 'Male';
} else if (gender == "F") {
    gender = 'Female';
}

var concat = user + " - " + age + "," + gender;
//alert(concat);

var $ = 12;
var _ = 13;
//alert($ + _);

// Constants

var COLOR_GREEN = "green";
var COLOR_ORANGE = "orange";

var name, admin;

var name = "Василий";

admin = name;

//alert(admin);

var planetName = 'Земля';
var userName = 'Peter';

/*

    number
    string
    boolean
    null
    undefined
    object
    typeof
    NaN

*/

var number = 123.213;

var inf = 1/0;
console.log(inf);

var nnan = "dsfdf" * 2;
console.log(typeof(nnan));

var string = "Some text";

console.log(typeof(string));

var boolean = true;

var age = null;
console.log('age - ' + typeof(age));

var x;
console.log('x - ' + typeof(x));

var userData = {
    "name" : "Bogdan",
    "age" : 23,
    "sex" : "M",
    "languages" : [
        "javascript",
        "php",
        "mysql",
        "AngularJS"
    ]
};

console.log(userData.name + ", " + userData.age + ", " + userData.sex + ", " + userData.languages[0]);

var persent = 8 % 3;
console.log(persent);

//var i = 1;
//i++;
//console.log(i);
//
//var someI = ++i;
//console.log(i);

var carUsed = [
    'Opel Astra',
    'Toyota Corolla',
    'Mitsubishi Colt',
    'Toyota Auris',
    'Mitsubishi Pajero',
    'Mercedes Vito',
    'Toyota Yaris'
];

for (var i = 0; i <= carUsed.length ;i++) {
    console.log(carUsed[i]);
}

var item = carUsed[Math.floor(Math.random()*carUsed.length)];
console.log(item);

var title = 'Сколько вам лет?';
var def = 23;

//var userAge = prompt(title, def);
//if (userAge == null) {
//    alert('Вы отменили данное окно.');
//} else {
//    alert('Ваш возраст - ' + userAge);
//}
//
//var isAdmin = confirm("Is you Admin?");
//if (isAdmin) {
//    alert('Yes, I\'am ');
//} else {
//    alert('No, I\'am not ');
//}
//
//var someName = prompt('Укажите ваше имя:', '');
//
//if(someName){
//    alert(someName);
//}

//var specYear = prompt('В каком году появилась спецификация ECMA-262, ...?', '');
//if(specYear == 2011) {
//    alert('Это очень точный и правильный ответ!');
//} else if (specYear > 2011 && specYear <= 2016) {
//    alert('Это поздновато');
//} else if (specYear < 2011) {
//    alert('Это рановато.')
//}

var newCar = carUsed[3] == "Toyota Auris" ? "Toyota Avalon" : "Toyota Corolla";
console.log(newCar);

//var ecma = prompt('«Каково «официальное» название JavaScript?»', '');
//if(ecma == "ECMAScript") {
//    alert('Все верно!');
//} else {
//    alert('Не знаете? «ECMAScript»!»');
//}

//var newPromt = prompt('Введите число!', '');

//if(newPromt < 0) {
//    alert(-1);
//} else if (newPromt > 0) {
//    alert(1);
//} else {
//    alert(0);
//}

// Administrator pass
//
//var authenthification = prompt("Вы админ?", '');
//
//if (authenthification == "admin") {
//    var password = prompt("Введите пароль", '');
//
//    if (password == "admin123") {
//        alert("Добро пожаловать!");
//    } else if (!password) {
//        alert('Вход отменен');
//    } else {
//        alert('Пароль не принят!');
//    }
//
//} else if(!authenthification) {
//    alert("Вход отменен!");
//} else {
//    alert("Я вас не знаю.");
//}

//if (a + b < 4) {
//    var result = 'Мало';
//} else  {
//    var result = 'Много';
//}
//
//var result = (a+b < 4) ? 'Мало' : 'Много';

//var message;
//
//if (login == 'Вася') {
//    message = 'Привет';
//} else if (login == 'Директор') {
//    message = 'Здравствуйте';
//} else if (login == '') {
//    message = 'Нет логина';
//} else {
//    message = '';
//}


var login = 'Вася';

var message = (login == 'Вася') ?
    'Привет' : (login == 'Директор') ?
    'Здравствуйте' : (login == '') ?
    'нет логина' :
    '';

console.log(login + ", " + message);

var workingTime = {
    "hour" : '12',
    "weekend" : true
};


if (workingTime.hour < 10 || workingTime.hour > 18 || workingTime.weekend == true) {
    console.log('Офис закрыт.');
} else {
    console.log('На данный момент офис работает!');
}

var someAge = 1;
if (someAge >= 18 && someAge <= 90) {
    console.log('Да, ваш возраст в промежутке от 18 до 90');
}

if (someAge < 18 || someAge > 90) {
    console.log('Ваш возраст либо меньше 18 либо больше 90');
}

var nummber = "123";
var newNumb = Number(number);

console.log(typeof newNumb);

var k = 0;
while(k < 3) {
    k++;
    console.log('Now k = ' + k);
}

for (var i = 1; i <= 10; i++) {
    console.log('For i = ' + i);
}

var sum = 0;
while (true) {
    var value = +prompt("Введите число",'');
    if(!value) break;
    sum += value;
}
console.log('Сумма = ' + sum);

for (var i = 0; i <= 11; i++) {
    if (i % 2 == 0) continue;
    console.log(i);
}