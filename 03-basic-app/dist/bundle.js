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

eval("// OBJECTS : unorganized collection in key-value format\n// - Literal Method : directly supplied the object value to variable\n// let myBooks = [\"book1\", \"book2\", \"book3\"];\n// let box = {\n//     type: \"Container\",\n//     \"width\": 8,\n//     \"heigth\": 6,\n//     \"no of books\": 12,\n//     addbook: function (book) {\n//         box.books.push(book);\n//     },\n//     books: myBooks,\n//     createdAt: new Date(\"Sept 12, 2022\")\n// }\n// console.log(JSON.parse(JSON.stringify(box)))\n// box.addbook(\"Book4\")\n// console.log(box);\n// console.log(\"My Books length : \", myBooks.length);  // ?\n// box.volume = box.width * box.heigth;\n// console.log(box);           // { width, height, volume }\n// console.log(\"Box Width : \", box[\"width\"])\n// console.log(\"Number of Books \", box[\"no of books\"])\n// - Constructor Method : Similar types of object\nfunction Person(firstName, lastName) {\n  this.firstName = firstName;\n  this.lastName = lastName;\n\n  this.greet = function () {\n    return \"Hello from \".concat(this.firstName, \" \").concat(this.lastName);\n  };\n}\n\nvar john = new Person(\"John\", \"Doe\");\nvar jenny = new Person(\"Jenny\", \"Doe\");\nconsole.log(john.greet());\nconsole.log(jenny.greet()); // - Instance Method : implements inheritance\n\n//# sourceURL=webpack://02-boilerplate-webpack-babel-setup/./src/index.js?");

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