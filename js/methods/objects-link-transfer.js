/**
 *
 * Created by Bogdan on 5/4/16.
 * Objects link transfer
 *
 */

'use strict';

var message = 'Some text';
var phrase = message;

var user = {
    name : 'Vasya',
    age : 24,
    position: 'UI designer'
};

var admin = user;

admin.name = 'Pedro';
console.log(admin.name);
console.log(user.name);

/*
 *
 * Клонирование объектов
 *
 */

var clone = {};

for (var key in user) {
    clone[key] = user[key];
}

clone.name = 'Bogdan';
clone.position = 'Front-end developer';

console.log(user.name, user.age, user.position);
console.log(clone.name, clone.age, clone.position);