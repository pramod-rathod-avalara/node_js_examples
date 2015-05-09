console.log("modOne => start");
var modTwo = require("./module2");
console.log("modOne => modTwo[%j]", modTwo.someVar);
exports.someVar = true;
console.log("modOne => finish");