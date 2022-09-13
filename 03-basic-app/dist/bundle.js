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

eval("// // let x = 101;\n// // function a() {\n// //     console.log(x);         // 101\n// // }\n// // a();\n// // let x = 101;\n// // function a() {\n// //     // let x = 201;\n// //     function b() {\n// //         // let x = 301;\n// //         console.log(x)          // ?\n// //     }\n// //     b()\n// // }\n// // a();\n// let x = 101;\n// function b() {\n//     // let x = 301;\n//     // console.log(x);         // ?\n//     x++;\n// }\n// function a() {\n//     let x = 201;\n//     b()\n//     console.log(x);         // 201\n// }\n// a();\n// console.log(x);         // ?\n// USING 'this'\n// let user = {\n//     firstName: \"John\",\n//     lastName: \"Doe\",\n//     getDetails: function () {\n//         return `${this.firstName} ${this.lastName}`\n//     }\n// }\n// console.log(user.getDetails())\n// function demoThis() {\n//     console.log(this);\n// }\n// demoThis();         // ?\n// const btnEl = document.querySelector(\"#btn\")\n// const txtInput = document.querySelector(\"#txtInput\")\n// txtInput.addEventListener(\"change\", function () {\n//     // console.log(this);\n//     const demoArrowFn = () => console.log(this);\n//     demoArrowFn()\n// })\n// btnEl.addEventListener(\"click\", function () {\n//     console.log(this);\n// })\n// CALL APPLY BIND\n// let userOne = {\n//     name: \"John\"\n// }\n// let userTwo = {\n//     name: \"Maria\"\n// }\n// function greet() {\n//     console.log(`Hello from ${this.name}!!!`);\n// }\n// const boundedUserOneGreet = greet.bind(userOne);\n// const boundedUserTwoGreet = greet.bind(userTwo);\n// boundedUserOneGreet()\n// boundedUserTwoGreet()\nfunction greet(firstName, lastName) {\n  console.log(\"Hello from \".concat(this.name, \" - \").concat(firstName, \", \").concat(lastName));\n}\n\nvar userA = {\n  name: \"A\"\n};\nvar userB = {\n  name: \"B\"\n};\ngreet.call(userA, \"John\", \"Doe\");\ngreet.apply(userA, [\"Jenny\", \"Jenifer\"]);\n\n//# sourceURL=webpack://02-boilerplate-webpack-babel-setup/./src/index.js?");

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