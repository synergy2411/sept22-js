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

eval("window.onload = function () {\n  var ulContainer = document.querySelector(\"#expense-container\");\n  var amountEl = document.querySelector(\"#txtAmount\");\n  var titleEl = document.querySelector(\"#txtTitle\");\n  var btnAddExpense = document.querySelector(\"#btnAddExpense\");\n  var url = \"http://localhost:3030/expenses\";\n\n  var fetchExpenses = function fetchExpenses() {\n    fetch(url).then(function (response) {\n      return response.json();\n    }).then(function (expenses) {\n      expenses.forEach(function (expense) {\n        var li = document.createElement(\"li\");\n        li.innerHTML = \"\\n                    <h6>\".concat(expense.title.toUpperCase(), \" <span class='fluid-right'>$\").concat(expense.amount, \"</span> </h6>\\n                    <button class='btn btn-danger btn-sm'>DELETE</button>\\n                    \");\n        li.classList.add(\"list-group-item\");\n        ulContainer.appendChild(li);\n      });\n    })[\"catch\"](console.error);\n  };\n\n  var createExpense = function createExpense(title, amount) {\n    fetch(url, {\n      method: \"POST\",\n      body: JSON.stringify({\n        title: title,\n        amount: amount\n      }),\n      headers: {\n        \"Content-Type\": \"application/json\"\n      }\n    }).then(function (response) {\n      return response.json();\n    }).then(function (result) {\n      ulContainer.innerHTML = '';\n      fetchExpenses();\n    })[\"catch\"](console.error);\n  };\n\n  btnAddExpense.addEventListener(\"click\", function (event) {\n    event.preventDefault();\n    createExpense(titleEl.value, amountEl.value);\n  });\n  fetchExpenses();\n};\n\n//# sourceURL=webpack://02-boilerplate-webpack-babel-setup/./src/index.js?");

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