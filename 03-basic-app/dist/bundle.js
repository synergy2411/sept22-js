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

eval("// Function Syntax\n// console.log(\"Sum is \", add(2, 5));\n// function add(n1, n2) {\n//     return n1 + n2;\n// }\n// Function Expression\n// let addition = function (n1, n2) {          // Anonymous\n//     return n1 + n2;\n// }\n// console.log(addition(4, 5));      // undefined\n// function mystry() {\n//     function chooseNumber() {               // xixoxixox\n//         return 7\n//     }\n//     return chooseNumber;\n//     function chooseNumber() {              // xixoxixox\n//         return 12;\n//     }\n// }\n// function mystry() {\n//     var chooseNumber = function () {               // xixoxixox\n//         return 7\n//     }\n//     return chooseNumber;\n//     var chooseNumber = function () {              // xixoxixox\n//         return 12;\n//     }\n// }\n// let nestedFn = mystry();\n// console.log(nestedFn());            // 12\n// ARROW FUNCTION\n// let addition = (n1, n2) => n1 + n2;\n// console.log(\"Arrow : \", addition(2, 5));\n// let multiply = (n1, n2) => {\n//     let number1 = n1 ?? 1;\n//     let number2 = n2 ?? 1;\n//     return number1 * number2;\n// }\n// console.log(\"Multiply : \", multiply(3));\n// let square = val => val * val;\n// console.log(\"Square : \", square(4))\n// let nummbers = [12, 14, 15, 16, 100];\n// let filteredArray = nummbers.filter(value => value > 15)\n// console.log(\"FilteredArray : \", filteredArray);\n// function Person(){}\n// let john = new Person()\n// const Animal = () => {\n// }\n// let rabbit = new Animal()\n// let demoArgs = () => {\n//     console.log(arguments);\n//     // for (let args in arguments) {\n//     //     console.log(args)\n//     // }\n// }\n// demoArgs(\"john@test.com\")\n// demoArgs(\"john@test.com\", 32)\n// demoArgs(\"john@test.com\", 32, true)\n// let user = {\n//     name: \"John Doe\"\n// }\n// function demoThis() {\n//     console.log(this);\n// }\n// demoThis();         // window\n// alert(\"Hello World\")\n// const boundFn = demoThis.bind(user)\n// boundFn()\n// const demoArrowThis = () => console.log(this);\n// demoArrowThis()\n// let user = {\n//     name: \"John\",\n//     age: 32,\n//     getDetails: function () {\n//         let nestedFn = () => `Hello from ARROR ${this.name}`\n//         return nestedFn();\n//     }\n//     // getDetails: function () {\n//     //     let that = this;\n//     //     function nestedFn() {\n//     //         return `Hello from ${that.name}`\n//     //     }\n//     //     return nestedFn();\n//     // }\n// }\n// console.log(user.getDetails())\n// Higher Order Function - HOF\n// Callbacks - error first, callback last\n// function greet(err, data) {\n//     if (err) {\n//         return console.error(err)\n//     }\n//     console.log(data)\n// }\nfunction hof(arr, callback) {\n  if (arr.length > 2) {\n    callback(new Error(\"Too many values\"));\n  } else {\n    callback(null, \"Too less values\");\n  }\n}\n\nhof([12, 3], function (err, data) {\n  if (err) {\n    return console.error(err);\n  }\n\n  console.log(data);\n});\n\n//# sourceURL=webpack://02-boilerplate-webpack-babel-setup/./src/index.js?");

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