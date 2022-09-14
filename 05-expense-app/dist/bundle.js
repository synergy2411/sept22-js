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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_expenses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/expenses */ \"./src/model/expenses.js\");\n\n\nwindow.onload = function () {\n  var ulContainer = document.querySelector(\"#expense-container\");\n  var amountEl = document.querySelector(\"#txtAmount\");\n  var titleEl = document.querySelector(\"#txtTitle\");\n  var btnAddExpense = document.querySelector(\"#btnAddExpense\");\n  var expObj = new _model_expenses__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  expObj.fetchExpenses();\n  btnAddExpense.addEventListener(\"click\", function (event) {\n    event.preventDefault();\n    expObj.createExpense(titleEl.value, amountEl.value);\n  });\n};\n\n//# sourceURL=webpack://02-boilerplate-webpack-babel-setup/./src/index.js?");

/***/ }),

/***/ "./src/model/expenses.js":
/*!*******************************!*\
  !*** ./src/model/expenses.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Expenses = /*#__PURE__*/function () {\n  function Expenses() {\n    _classCallCheck(this, Expenses);\n\n    _defineProperty(this, \"url\", \"http://localhost:3030/expenses\");\n\n    _defineProperty(this, \"container\", null);\n\n    this.container = document.querySelector(\"#expense-container\");\n    console.log(this.container);\n  }\n\n  _createClass(Expenses, [{\n    key: \"fetchExpenses\",\n    value: function fetchExpenses() {\n      var _this = this;\n\n      console.log(\"FETCHING\");\n      fetch(this.url).then(function (response) {\n        return response.json();\n      }).then(function (expenses) {\n        console.log(expenses);\n        _this.container.innerHTML = '';\n        expenses.forEach(function (expense) {\n          var li = document.createElement(\"li\");\n          li.innerHTML = \"\\n                    <p class='lead'>\\n                        \".concat(expense.title.toUpperCase(), \" - $\").concat(expense.amount, \"\\n                        <span class='float-end'>\\n                            <button class='btn btn-danger btn-sm'>DELETE</button>\\n                        </span>\\n                    </p>\\n                    \\n                    \");\n          li.classList.add(\"list-group-item\");\n\n          _this.container.appendChild(li);\n        });\n      })[\"catch\"](console.error);\n    }\n  }, {\n    key: \"createExpense\",\n    value: function createExpense(title, amount) {\n      var _this2 = this;\n\n      fetch(this.url, {\n        method: \"POST\",\n        body: JSON.stringify({\n          title: title,\n          amount: amount\n        }),\n        headers: {\n          \"Content-Type\": \"application/json\"\n        }\n      }).then(function (response) {\n        return response.json();\n      }).then(function (result) {\n        _this2.fetchExpenses();\n      })[\"catch\"](console.error);\n    }\n  }]);\n\n  return Expenses;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Expenses);\n\n//# sourceURL=webpack://02-boilerplate-webpack-babel-setup/./src/model/expenses.js?");

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