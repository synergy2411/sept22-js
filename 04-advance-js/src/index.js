// COMMONJS MODULE SYSTEM
// const { sum, mul } = require("./utils/maths")

// console.log("Sum : ", sum(4, 5));
// console.log("Multiply : ", mul(4, 5));




// ESM MODULE SYSTEM - Named Export/Import
import { getDailyFortune, getLuckyNumber } from './utils/fortune';

console.log("Today Fortune : ", getDailyFortune())
console.log("Lucky Number : ", getLuckyNumber());


// ESM MODULE SYSTEM - Default Export/Import
import MyStudent from './utils/fortune';

let foo = new MyStudent("S001", "Foo Bar");
console.log(foo.getDetails())