/**
  *
  * Created by Bogdan on 4/20/16.
  * This file is for test running by
  * Mocha & Chai test tools
  *
  */

//var assert = require('chai').assert;

describe("pow", function() {

    it("Возводит в n-ю степень 2 в степени 3 = 8", function(){
        assert.equal(pow(2,3), 8);
    });

    it("Возводит в n-ю степень 3 в степени 4 = 81", function(){
        assert.equal(pow(3,4), 81);
    });

    function makeTest(x) {
        var expected = x * x * x;
        it("при возведении " + x + " в степень 3 результат: " + expected, function() {
            assert.equal(pow(x, 3), expected);
        });
    }

    for (var x = 1; x <= 5; x++) {
        makeTest(x);
    }

    describe("возводит x в степень n", function() {

        function makeTest(x) {
            var expected = x * x * x;
            it("при возведении " + x + " в степень 3 результат: " + expected, function() {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (var x = 1; x <= 5; x++) {
            makeTest(x);
        }

    });

});