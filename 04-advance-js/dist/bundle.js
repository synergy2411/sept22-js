/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_fortune__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/fortune */ \"./src/utils/fortune.js\");\n// COMMONJS MODULE SYSTEM\n// const { sum, mul } = require(\"./utils/maths\")\n// console.log(\"Sum : \", sum(4, 5));\n// console.log(\"Multiply : \", mul(4, 5));\n// ESM MODULE SYSTEM - Named Export/Import\n\nconsole.log(\"Today Fortune : \", (0,_utils_fortune__WEBPACK_IMPORTED_MODULE_0__.getDailyFortune)());\nconsole.log(\"Lucky Number : \", (0,_utils_fortune__WEBPACK_IMPORTED_MODULE_0__.getLuckyNumber)()); // ESM MODULE SYSTEM - Default Export/Import\n\n\nvar foo = new _utils_fortune__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"S001\", \"Foo Bar\");\nconsole.log(foo.getDetails());\n\n//# sourceURL=webpack://02-boilerplate-webpack-babel-setup/./src/index.js?");

/***/ }),

/***/ "./src/utils/fortune.js":
/*!******************************!*\
  !*** ./src/utils/fortune.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getDailyFortune\": () => (/* binding */ getDailyFortune),\n/* harmony export */   \"getLuckyNumber\": () => (/* binding */ getLuckyNumber)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n// Named Export\nvar getDailyFortune = function getDailyFortune() {\n  return \"Run 5 miles today\";\n};\nvar MAGIC_NUMBER = Math.round(Math.random() * 100);\nvar getLuckyNumber = function getLuckyNumber() {\n  return MAGIC_NUMBER;\n}; // Default Export\n\nvar Student = /*#__PURE__*/function () {\n  function Student(studId, name) {\n    _classCallCheck(this, Student);\n\n    this.studId = studId;\n    this.name = name;\n  }\n\n  _createClass(Student, [{\n    key: \"getDetails\",\n    value: function getDetails() {\n      return \"\".concat(this.studId, \" : \").concat(this.name);\n    }\n  }]);\n\n  return Student;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Student);\n\n//# sourceURL=webpack://02-boilerplate-webpack-babel-setup/./src/utils/fortune.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;