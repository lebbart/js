/**
 *
 *
 * Created by Bogdan on 5/4/16.
 *
 *
 *
 */

'use strict';

var array = ["Apple", "Orange", "Lemon"];
array.forEach(function(item, i, arr){
    console.log(i + ": " + item + ' (Массив: ' + arr + ')');
});