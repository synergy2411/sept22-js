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

eval("// REST / SPREAD\n// const demoRest = (email, ...args) => {\n//     console.log(args[0]);           // ?\n// }\n// // demoRest(\"john@test.com\")\n// // demoRest(\"john@test.com\", 32)\n// demoRest(\"john@test.com\", 32, true)\n// Collection - Array / Object\n// let friends = [\"John\", \"Maria\", \"Alice\"]\n// let moreFriends = [\"Jenny\", \"Jack\", \"Jill\", ...friends]\n// console.log(moreFriends);\n// const demoSpread = (f1, f2, f3) => {\n//     console.log(f2);\n// }\n// demoSpread(...friends)\n// let userA = {\n//     name: \"John\",\n//     age: 32,\n//     address: {\n//         street: \"201 MAin Road\",\n//         city: \"Pune\",\n//         postal: {\n//             code: \"401013\",\n//             state: \"MH\"\n//         }\n//     },\n//     friends: [\"f1\", \"f2\", \"f3\"]\n// }\n// let userB = {\n//     ...userA,           // Shallow copy\n//     name: \"Jenny\",\n//     age: 28,\n//     friends: [...userA.friends],        // Shallow copy\n//     address: { ...userA.address }       // Shallow copy\n// }\n// userB.friends.push(\"f4\");           // 4\n// userB.address.postal.code = 505050;\n// // console.log(userB)\n// // console.log(userA);             // 4\n// // DEEP COPY\n// let userC = JSON.parse(JSON.stringify(userA));\n// userC.address.postal.state = \"HYD\"\n// console.log(userA);\n// console.log(userB);\n// console.log(userC);\n// DESTRUCTURING\n// let fruits = [\"Apple\", \"Guava\", \"Kiwi\", \"Grapes\"];\n// let [f1, , , f3, f4] = fruits;\n// console.log(f3, f4);\n// let box = {\n//     width: 6,\n//     height: 8,\n//     books: [\"book1\", \"book2\", \"book3\"]\n// }\n// let { width: w, height: h, books: b } = box;\n// b.push(\"books\");\n// console.log(w, h, b)\n// console.log(box.books);     // ?\n// PRACTICE EXERCISE\nvar user = {\n  firstName: \"Alice\",\n  lastName: \"Martin\",\n  age: 23,\n  address: {\n    street: \"201 Main Road\",\n    city: \"Pune\"\n  },\n  friends: [\"Jack\", \"Jill\"]\n};\nvar users = [{\n  email: \"john@test\",\n  age: 20\n}, {\n  email: \"jill@test\",\n  age: 22\n}, {\n  email: \"jack@test\",\n  age: 23\n}, {\n  email: \"jenny@test\",\n  age: 26\n}];\n\n//# sourceURL=webpack://02-boilerplate-webpack-babel-setup/./src/index.js?");

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