console.log('File B is loading...');

exports.done = false;

var a = require('./testA');
console.log('in testB, testA.done = ', a.done);

exports.done = true;

console.log('File B is done!');