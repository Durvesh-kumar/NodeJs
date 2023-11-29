
/*
module.exports

require() a built-in function to include  external modules that exitst in separate files.

module.exports  a special object

*/

const sum = (a, b)=> a+b;
const mult = (a, b)=> a*b;
const g= 9.8;
const PI = 3.14;

const obj = {
    sum: sum,
    mult: mult,
    g: g,
    PI: PI
}

module.exports = obj
