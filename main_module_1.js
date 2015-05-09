// file modTwo.js
console.log("modTwo => start");
var modOne = require("./module1");
console.log("modTwo => modOne[%j]", modOne.someVar);
exports.someVar = true;
console.log("modTwo => finish");