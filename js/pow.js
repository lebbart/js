/*
 *
 * Function for x(n) calculations
 * You should enter 1st number
 * Than enter second number which will be exponent for 1st number
 * Author: Bogdan Lebedenko
 * Contacts: bogdan.lebedenko@gmail.com | +38093 26 76 494
 * Created: 18/04/2016 year
 *
 */

var n = prompt("Введите число:", "");
var m = prompt("Введите степень, в которую будем возводить:", "");

function pow(n, m) {
    var count = n;
    for (var i = 1; i < m; i++) {
        count *= n;
    }
    return count;
}

if (m <= 1) {
    confirm('Степень ' + m + ' не может быть меньше 1!');
} else {
    alert(pow(n, m));
}