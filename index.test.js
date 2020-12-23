"use strict";
var greeter = require('./src/index');
console.log('Starting tests...');
var resOne = greeter();
if (resOne !== 'Hello User!') {
    throw new Error('greet not working with default arguments!');
}
var restTwo = greeter('Matheus');
if (restTwo !== 'Hello Matheus!') {
    throw new Error('greet not working with name argument!');
}
