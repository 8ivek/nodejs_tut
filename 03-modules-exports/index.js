/**
 * Example for logging in console
 * Require using exports.variable in m1
 * Require using module exports in m2
 * See how require and module.exports works
 * @type {string}
 */

var m1 = require ('./m1');
var m2 = require ('./m2');

function fun1() {
    return {module1: m1,module2: m1.bread,module3: m1.bread2};
}

function fun2() {
    return {module2: m2()};
}

console.log(fun1());
console.log(fun2());