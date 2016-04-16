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

