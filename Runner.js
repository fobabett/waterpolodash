// new file named runner.js
var _ = require('./waterpolodash'); // your "whatever" file name (no .js is needed)

// not done yet 
var compact_result = _.compact([0,1,2,'',false,3]);
console.log(compact_result);

var initial_result = _.initial([1,2,3]);
console.log(initial_result);

var last_result = _.last([1,2,3,6,7,'meow']);
console.log(last_result);

var rest_result = _.rest([1,2,3]);
console.log(rest_result);