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

eval("// REST / SPREAD\n// const demoRest = (email, ...args) => {\n//     console.log(args[0]);           // ?\n// }\n// // demoRest(\"john@test.com\")\n// // demoRest(\"john@test.com\", 32)\n// demoRest(\"john@test.com\", 32, true)\n// Collection - Array / Object\n// let friends = [\"John\", \"Maria\", \"Alice\"]\n// let moreFriends = [\"Jenny\", \"Jack\", \"Jill\", ...friends]\n// console.log(moreFriends);\n// const demoSpread = (f1, f2, f3) => {\n//     console.log(f2);\n// }\n// demoSpread(...friends)\n// let userA = {\n//     name: \"John\",\n//     age: 32,\n//     address: {\n//         street: \"201 MAin Road\",\n//         city: \"Pune\",\n//         postal: {\n//             code: \"401013\",\n//             state: \"MH\"\n//         }\n//     },\n//     friends: [\"f1\", \"f2\", \"f3\"]\n// }\n// let userB = {\n//     ...userA,           // Shallow copy\n//     name: \"Jenny\",\n//     age: 28,\n//     friends: [...userA.friends],        // Shallow copy\n//     address: { ...userA.address }       // Shallow copy\n// }\n// userB.friends.push(\"f4\");           // 4\n// userB.address.postal.code = 505050;\n// // console.log(userB)\n// // console.log(userA);             // 4\n// // DEEP COPY\n// let userC = JSON.parse(JSON.stringify(userA));\n// userC.address.postal.state = \"HYD\"\n// console.log(userA);\n// console.log(userB);\n// console.log(userC);\n// DESTRUCTURING\n// let fruits = [\"Apple\", \"Guava\", \"Kiwi\", \"Grapes\"];\n// let [f1, , , f3, f4] = fruits;\n// console.log(f3, f4);\n// let box = {\n//     width: 6,\n//     height: 8,\n//     books: [\"book1\", \"book2\", \"book3\"]\n// }\n// let { width: w, height: h, books: b } = box;\n// b.push(\"books\");\n// console.log(w, h, b)\n// console.log(box.books);     // ?\n// PRACTICE EXERCISE\n// let user = {\n//     firstName: \"Alice\",\n//     lastName: \"Martin\",\n//     age: 23,\n//     address: {\n//         street: \"201 Main Road\",\n//         city: \"Pune\"\n//     },\n//     friends: [\"Jack\", \"Jill\"]\n// }\n// let { firstName, lastName, age, address: { street, city }, friends: [f1, f2] } = user;\n// let users = [\n//     { email: \"john@test\", age: 20 },\n//     { email: \"jill@test\", age: 22 },\n//     { email: \"jack@test\", age: 23 },\n//     { email: \"jenny@test\", age: 26 },\n// ]\n// let [\n//     {email : e1, age : a1},\n//     {email : e2, age : a2},\n//     {email : e3, age : a3},\n//     {email : e4, age : a4},\n// ] = users;\n// let box = {\n//     \"width\": 4\n// }\n// let user = { name: \"John\" };\n// let map = new Map();\n// map.set(user, \"The Object\")\n// map.set(\"age\", 32)\n// map.set(true, \"is Admin\")\n// map.set(101, \"the Id\")\n// for (let item of map.values()) {\n//     console.log(item);\n// }\n// for (let key of map.keys()) {\n//     console.log(key)\n// }\n// console.log(map.size);\n// console.log(map.has(true))\n// map.delete(101)\n// console.log(map.get(101))\n// map.clear()\n// console.log(map.size);\n// let user = { name: \"John\" }\n// let set = new Set();\n// set.add(\"John Doe\")\n// set.add(99)\n// set.add(false)\n// set.add(user)\n// set.add(99)\n// set.add(user)\n// console.log(\"size :\", set.size);\n// for (let item of set) {\n//     console.log(item)\n// }\n// if (set.has(99)) {\n//     set.delete(99)\n// }\n// console.log(set.size);\nvar userA = {\n  name: \"A\"\n};\nvar userB = {\n  name: \"B\"\n}; // let weakMap = new WeakMap()\n// weakMap.set(userA, \"User A\")\n// weakMap.set(userB, \"User B\")\n// console.log(weakMap.get(userA));\n// userA = null;\n// console.log(weakMap.get(userA));\n\nvar weakSet = new WeakSet();\nweakSet.add(userA);\nweakSet.add(userB);\nuserB = null;\n\nif (weakSet.has(userB)) {\n  console.log(\"Does exist\");\n} else {\n  console.log(\"Does not exist\");\n}\n\n//# sourceURL=webpack://02-boilerplate-webpack-babel-setup/./src/index.js?");

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