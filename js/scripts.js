/**
 * Created by Bogdan on 4/14/16.
 * Main js file of this project.
 * Will work on it all day, all night
 * to get better results
 */

'use strict';

//function addScript(src) {
//    var script = document.createElement('script');
//    script.src = src;
//    script.async = false;
//    document.head.appendChild(script);
//}

//addScript('app1.js');
//addScript('app2.js');
//addScript('app3.js');

//alert('Сейчас будет error');
//[1,3].forEach(alert);

//var msg;
//msg = "some text here";
//alert(msg);

//var newMsg = "some other text";
//alert(newMsg);

//var user = "Bogdan", age = 23, gender = "M";
//
//if(gender == "M") {
//    gender = 'Male';
//} else if (gender == "F") {
//    gender = 'Female';
//}
//
//var concat = user + " - " + age + "," + gender;
//alert(concat);

//var $ = 12;
//var _ = 13;
//alert($ + _);

// Constants

//var COLOR_GREEN = "green";
//var COLOR_ORANGE = "orange";
//
//var name, admin;
//
//var name = "Василий";
//
//admin = name;

//alert(admin);

//var planetName = 'Земля';
//var userName = 'Peter';

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

//var number = 123.213;
//
//var inf = 1/0;
//console.log(inf);
//
//var nnan = "dsfdf" * 2;
//console.log(typeof(nnan));
//
//var string = "Some text";
//
//console.log(typeof(string));
//
//var boolean = true;
//
//var age = null;
//console.log('age - ' + typeof(age));
//
//var x;
//console.log('x - ' + typeof(x));
//
//var userData = {
//    "name" : "Bogdan",
//    "age" : 23,
//    "sex" : "M",
//    "languages" : [
//        "javascript",
//        "php",
//        "mysql",
//        "AngularJS"
//    ]
//};
//
//console.log(userData.name + ", " + userData.age + ", " + userData.sex + ", " + userData.languages[0]);
//
//var persent = 8 % 3;
//console.log(persent);

//var i = 1;
//i++;
//console.log(i);
//
//var someI = ++i;
//console.log(i);

//var carUsed = [
//    'Opel Astra',
//    'Toyota Corolla',
//    'Mitsubishi Colt',
//    'Toyota Auris',
//    'Mitsubishi Pajero',
//    'Mercedes Vito',
//    'Toyota Yaris'
//];
//
//for (var i = 0; i <= carUsed.length ;i++) {
//    console.log(carUsed[i]);
//}
//
//var item = carUsed[Math.floor(Math.random()*carUsed.length)];
//console.log(item);
//
//var title = 'Сколько вам лет?';
//var def = 23;

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
//
//var newCar = carUsed[3] == "Toyota Auris" ? "Toyota Avalon" : "Toyota Corolla";
//console.log(newCar);

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


//var login = 'Вася';
//
//var message = (login == 'Вася') ?
//    'Привет' : (login == 'Директор') ?
//    'Здравствуйте' : (login == '') ?
//    'нет логина' :
//    '';
//
//console.log(login + ", " + message);
//
//var workingTime = {
//    "hour" : '12',
//    "weekend" : true
//};
//
//
//if (workingTime.hour < 10 || workingTime.hour > 18 || workingTime.weekend == true) {
//    console.log('Офис закрыт.');
//} else {
//    console.log('На данный момент офис работает!');
//}
//
//var someAge = 1;
//if (someAge >= 18 && someAge <= 90) {
//    console.log('Да, ваш возраст в промежутке от 18 до 90');
//}
//
//if (someAge < 18 || someAge > 90) {
//    console.log('Ваш возраст либо меньше 18 либо больше 90');
//}
//
//var nummber = "123";
//var newNumb = Number(number);
//
//console.log(typeof newNumb);
//
//var k = 0;
//while(k < 3) {
//    k++;
//    console.log('Now k = ' + k);
//}
//
//for (var i = 1; i <= 10; i++) {
//    console.log('For i = ' + i);
//}

//var sum = 0;
//while (true) {
//    var value = +prompt("Введите число",'');
//    if(!value) break;
//    sum += value;
//}
//console.log('Сумма = ' + sum);
//
//for (var i = 0; i <= 11; i++) {
//    if (i % 2 == 0) continue;
//    console.log(i);
//}
//
//outer: for (var i = 0; i < 5; i++) {
//    for (var j = 0; j < 5; j++) {
//        var input = prompt('Значение в координатах' +i+','+j, '');
//        if (!input) break outer;
//        console.log(i + ", " + j);
//    }
//    console.log(i + ", " + j);
//}


//for (var j = 2; j <= 10; j++) {
//    //if (j%2 == 0) {
//    //    console.log(j);
//    //}
//
//    if (j%2 != 0) continue;
//    console.log(j);
//}

//for (var i = 0; i < 3; i++) {
//    alert( "номер " + i + "!" );
//}
//
//var iIi = 0;
//while(iIi < 3) {
//
//    alert( "номер " + iIi + "!" );
//    iIi++;
//
//}

//while(true) {
//    var value = +prompt("Введите число больше 100",'');
//    if (value > 100) {
//        break;
//    } else {
//        alert("Неверно, повторите попытку!");
//    }
//}
//alert('Число ' + value + ' больше 100. Все верно!');


//someStop: for (var i = 2; i < 10; i++) {
//
//    for (var j = 2; j < i; j++) {
//        if (i%j == 0) continue someStop;
//    }
//
//    console.log('Prostoe ' + i);
//
//}

//var someA = 2 + 4;
//
//switch (someA) {
//    case 3: alert('Мало'); break;
//    case 6: alert('Самое то!'); break;
//    case 6: alert('Многовато'); break;
//    default: alert('Что то не так!');
//}

//var someOtherA = 4;
//var someOtherB = someOtherA + 3;
//
//switch (someOtherB) {
//    case someOtherA + 2: "Маловато-то как-то";
//        break;
//    case someOtherA + 3: "О, это то число!";
//        break;
//    default: "Не, тут что-то не так";
//}

//if (browser == "IE") {
//    alert('О да, у вас IE');
//} else if (browser == "Chrome" || browser == "Firefox" || browser == "Safari" || browser == "Opera") {
//    alert('Мы их так же поддерживаем!');
//} else {
//    alert('Мы надеемся и ваш браузер тоже ничего :) ');
//}

//var switchSome = +prompt('A?', '');
//
//switch (switchSome) {
//    case 0: alert(0);
//        break;
//    case 1: alert(1);
//        break;
//    case 2:
//    case 3:
//        alert('2,3');
//        break;
//    case null:
//        alert('You have not entered nothing.');
//    default: 'You\'ve entered wrong A.';
//}

//var msg = prompt("Введите сообщение:", "");
//var another = prompt("Введите сообщение номер 2:", "");
//
//function showMsg(msg) {
//    alert(msg);
//}
//
//showMsg(msg);
//showMsg(another);
//
//var userNameChange = prompt("Введите ваше имя:", "");
//
//function showMsgName (name) {
//
//    name = "мистер " + name;
//    console.log('Привет, ' + name);
//
//}
//
//showMsgName(userNameChange);

//function showMessage(from, text) {
//    from = from || 'Noname';
//    text = text || 'текст не передан :(';
//
//    from = "** " + from + " **";
//    alert(from + " : " + text);
//}
//
//showMessage('Миша', "привет!");
//showMessage();
//
//function calcDe (a,b,c) {
//    return b*b - 4*a*c;
//}
//
//var test = calcDe(12,4,5);
//console.log(test);
//
//function checkAge(ageDer) {
//    if (ageDer > 18) {
//        return true;
//    } else {
//        return confirm("Родители разрешили?");
//    }
//}

//var ageDer = prompt('Ваш возраст?', '');
//
//if (checkAge(ageDer)) {
//    console.log('Доступ разрешен');
//} else {
//    console.log('В доступе отказано!');
//}
//
//
//function checkage(age) {
//    return (age > 18) ? true : confirm("Родители разрешили?");
//}
//
//function moreCheckAge(age) {
//    return (age > 18) || confirm("Родители разрешили?");
//}

//function min(a,b) {
//    return (a < b) ? alert(a) : alert(b);
//}

//min(14,56);
//min(5235,56);

//var age = +prompt('Сколько вам лет?', 23);
//var sayHi;
//sayHi = (age >= 18) ?
//    function() {alert('Прошу вас!')} :
//    function() {alert('Вы еще слишком юны!')};
//sayHi();


/*
 *
 * Function for question if you are
 * a blondin?
 *
 */

//function ask(question, yes, no) {
//    if(confirm(question)) yes();
//    else no()
//}
//
//ask("Вы натуральный блондин?",
//    function() {alert("Вы согласились!");},
//    function() {alert("Вы не натуральный блондин?");}
//);

/*
 *
 * Вычислить сумму чисел от 1 до n
 * Чере вычисление циклом for
 *
 */

function sumTo(n) {
    var sum = 0;
    for(var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumTo(15));

/*
 *
 * Вычислить сумму чисел от 1 до n
 * Чере вычисление рекурсией
 *
 */

function recSumTo(n) {
    if (n == 1) {
        return n
    } else {
        return n + recSumTo(n-1);
    }
}

console.log(recSumTo(15));

/*
 *
 * Вычислить сумму чисел от 1 до n
 * Через формулу арифметической прогрессии
 *
 */

function formulaSumTo(n) {
    return ((1+n) / 2) * n;
}

console.log(formulaSumTo(15));

/*
 *
 * Function to find n! (factorial)
 *
 */

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log('Факториал = ' + factorial(3));

/*
 *
 * Function to find Fibbonachi numbers
 *
 */

function fib(n) {
    var a = 1,
        b = 1;

    for (var i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }

    return b;
}

console.log("Фиббоначи: " + fib(20));