/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// OBJECTS : unorganized collection in key-value format\n// - Literal Method : directly supplied the object value to variable\n// let myBooks = [\"book1\", \"book2\", \"book3\"];\n// let box = {\n//     type: \"Container\",\n//     \"width\": 8,\n//     \"heigth\": 6,\n//     \"no of books\": 12,\n//     addbook: function (book) {\n//         box.books.push(book);\n//     },\n//     books: myBooks,\n//     createdAt: new Date(\"Sept 12, 2022\")\n// }\n// console.log(JSON.parse(JSON.stringify(box)))\n// box.addbook(\"Book4\")\n// console.log(box);\n// console.log(\"My Books length : \", myBooks.length);  // ?\n// box.volume = box.width * box.heigth;\n// console.log(box);           // { width, height, volume }\n// console.log(\"Box Width : \", box[\"width\"])\n// console.log(\"Number of Books \", box[\"no of books\"])\n// - Constructor Method : Similar types of object\n// function Person(firstName, lastName) {\n//     this.firstName = firstName;\n//     this.lastName = lastName;\n//     this.greet = function () {\n//         return `Hello from ${this.firstName} ${this.lastName}`;\n//     }\n// }\n// let john = new Person(\"John\", \"Doe\");\n// let jenny = new Person(\"Jenny\", \"Doe\");\n// console.log(john.greet());\n// console.log(jenny.greet());\n// - Instance Method : implements inheritance\n// let shoe = {\n//     size: 8\n// }\n// let magicShoe = Object.create(shoe);\n// console.log(\"Magic Shoe : \", magicShoe);\n// console.log(\"Size : Magic Shoe\", magicShoe.size);\n// console.log(shoe.isPrototypeOf(magicShoe))\n// console.log(magicShoe.isPrototypeOf(shoe))\n// console.log(Object.prototype.isPrototypeOf(shoe))\n// let str = \"Hello World\";\n// let str = new String(\"Hello World\");\n// console.log(str.length);\n// console.log(str.indexOf(\"o\"))\n// console.log(str.doesNotExist)\n// PROTOTYPE INHERITANCE / EXTENDING THE FUNCTIONALITY\nfunction Person(firstName, lastname) {\n  this.firstName = firstName;\n  this.lastname = lastname;\n\n  this.sayHi = function () {\n    console.log(\"Hi\");\n  };\n}\n\nPerson.prototype.greet = function () {\n  return \"Hello from \".concat(this.firstName, \" \").concat(this.lastname);\n};\n\nvar john = new Person(\"John\", \"Doe\");\nvar jenny = new Person(\"Jenny\", \"Doe\");\nconsole.log(john); // Person { firstName, lastName, sayHi()}\n\nconsole.log(jenny.toString());\nvar str = \"Welcome to the world of JavaScript\";\nvar strTwo = \"Javascript is awesome\";\n\nString.prototype.numberOfOccurance = function (letter) {\n  var count = 0;\n\n  for (var i = 0; i < this.length; i++) {\n    if (this.charAt(i).toLowerCase() === letter.toLowerCase()) {\n      count++;\n    }\n  }\n\n  return count;\n};\n\nconsole.log(str.numberOfOccurance(\"t\")); // 3\n\nconsole.log(strTwo.numberOfOccurance(\"a\"));\n\n//# sourceURL=webpack://02-boilerplate-webpack-babel-setup/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;