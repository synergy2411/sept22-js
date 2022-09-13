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

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// REST / SPREAD\n// const demoRest = (email, ...args) => {\n//     console.log(args[0]);           // ?\n// }\n// // demoRest(\"john@test.com\")\n// // demoRest(\"john@test.com\", 32)\n// demoRest(\"john@test.com\", 32, true)\n// Collection - Array / Object\n// let friends = [\"John\", \"Maria\", \"Alice\"]\n// let moreFriends = [\"Jenny\", \"Jack\", \"Jill\", ...friends]\n// console.log(moreFriends);\n// const demoSpread = (f1, f2, f3) => {\n//     console.log(f2);\n// }\n// demoSpread(...friends)\nvar userA = {\n  name: \"John\",\n  age: 32,\n  address: {\n    street: \"201 MAin Road\",\n    city: \"Pune\",\n    postal: {\n      code: \"401013\",\n      state: \"MH\"\n    }\n  },\n  friends: [\"f1\", \"f2\", \"f3\"]\n};\n\nvar userB = _objectSpread(_objectSpread({}, userA), {}, {\n  // Shallow copy\n  name: \"Jenny\",\n  age: 28,\n  friends: _toConsumableArray(userA.friends),\n  // Shallow copy\n  address: _objectSpread({}, userA.address) // Shallow copy\n\n});\n\nuserB.friends.push(\"f4\"); // 4\n\nuserB.address.postal.code = 505050; // console.log(userB)\n// console.log(userA);             // 4\n// DEEP COPY\n\nvar userC = JSON.parse(JSON.stringify(userA));\nuserC.address.postal.state = \"HYD\";\nconsole.log(userA);\nconsole.log(userB);\nconsole.log(userC);\n\n//# sourceURL=webpack://02-boilerplate-webpack-babel-setup/./src/index.js?");

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