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

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = \"function\" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || \"@@iterator\", asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\", toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, \"\"); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = \"suspendedStart\"; return function (method, arg) { if (\"executing\" === state) throw new Error(\"Generator is already running\"); if (\"completed\" === state) { if (\"throw\" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) { if (\"suspendedStart\" === state) throw state = \"completed\", context.arg; context.dispatchException(context.arg); } else \"return\" === context.method && context.abrupt(\"return\", context.arg); state = \"executing\"; var record = tryCatch(innerFn, self, context); if (\"normal\" === record.type) { if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: \"normal\", arg: fn.call(obj, arg) }; } catch (err) { return { type: \"throw\", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { [\"next\", \"throw\", \"return\"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if (\"throw\" !== record.type) { var result = record.arg, value = result.value; return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke(\"next\", value, resolve, reject); }, function (err) { invoke(\"throw\", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke(\"throw\", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, \"throw\" === context.method) { if (delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method)) return ContinueSentinel; context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a 'throw' method\"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = \"normal\", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: \"root\" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if (\"function\" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, \"constructor\", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) { var ctor = \"function\" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, \"toString\", function () { return \"[object Generator]\"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if (\"throw\" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if (\"root\" === entry.tryLoc) return handle(\"end\"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, \"catchLoc\"), hasFinally = hasOwn.call(entry, \"finallyLoc\"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error(\"try statement without catch or finally\"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if (\"throw\" === record.type) throw record.arg; return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, \"catch\": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if (\"throw\" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }\n\n// REST / SPREAD\n// const demoRest = (email, ...args) => {\n//     console.log(args[0]);           // ?\n// }\n// // demoRest(\"john@test.com\")\n// // demoRest(\"john@test.com\", 32)\n// demoRest(\"john@test.com\", 32, true)\n// Collection - Array / Object\n// let friends = [\"John\", \"Maria\", \"Alice\"]\n// let moreFriends = [\"Jenny\", \"Jack\", \"Jill\", ...friends]\n// console.log(moreFriends);\n// const demoSpread = (f1, f2, f3) => {\n//     console.log(f2);\n// }\n// demoSpread(...friends)\n// let userA = {\n//     name: \"John\",\n//     age: 32,\n//     address: {\n//         street: \"201 MAin Road\",\n//         city: \"Pune\",\n//         postal: {\n//             code: \"401013\",\n//             state: \"MH\"\n//         }\n//     },\n//     friends: [\"f1\", \"f2\", \"f3\"]\n// }\n// let userB = {\n//     ...userA,           // Shallow copy\n//     name: \"Jenny\",\n//     age: 28,\n//     friends: [...userA.friends],        // Shallow copy\n//     address: { ...userA.address }       // Shallow copy\n// }\n// userB.friends.push(\"f4\");           // 4\n// userB.address.postal.code = 505050;\n// // console.log(userB)\n// // console.log(userA);             // 4\n// // DEEP COPY\n// let userC = JSON.parse(JSON.stringify(userA));\n// userC.address.postal.state = \"HYD\"\n// console.log(userA);\n// console.log(userB);\n// console.log(userC);\n// DESTRUCTURING\n// let fruits = [\"Apple\", \"Guava\", \"Kiwi\", \"Grapes\"];\n// let [f1, , , f3, f4] = fruits;\n// console.log(f3, f4);\n// let box = {\n//     width: 6,\n//     height: 8,\n//     books: [\"book1\", \"book2\", \"book3\"]\n// }\n// let { width: w, height: h, books: b } = box;\n// b.push(\"books\");\n// console.log(w, h, b)\n// console.log(box.books);     // ?\n// PRACTICE EXERCISE\n// let user = {\n//     firstName: \"Alice\",\n//     lastName: \"Martin\",\n//     age: 23,\n//     address: {\n//         street: \"201 Main Road\",\n//         city: \"Pune\"\n//     },\n//     friends: [\"Jack\", \"Jill\"]\n// }\n// let { firstName, lastName, age, address: { street, city }, friends: [f1, f2] } = user;\n// let users = [\n//     { email: \"john@test\", age: 20 },\n//     { email: \"jill@test\", age: 22 },\n//     { email: \"jack@test\", age: 23 },\n//     { email: \"jenny@test\", age: 26 },\n// ]\n// let [\n//     {email : e1, age : a1},\n//     {email : e2, age : a2},\n//     {email : e3, age : a3},\n//     {email : e4, age : a4},\n// ] = users;\n// let box = {\n//     \"width\": 4\n// }\n// let user = { name: \"John\" };\n// let map = new Map();\n// map.set(user, \"The Object\")\n// map.set(\"age\", 32)\n// map.set(true, \"is Admin\")\n// map.set(101, \"the Id\")\n// for (let item of map.values()) {\n//     console.log(item);\n// }\n// for (let key of map.keys()) {\n//     console.log(key)\n// }\n// console.log(map.size);\n// console.log(map.has(true))\n// map.delete(101)\n// console.log(map.get(101))\n// map.clear()\n// console.log(map.size);\n// let user = { name: \"John\" }\n// let set = new Set();\n// set.add(\"John Doe\")\n// set.add(99)\n// set.add(false)\n// set.add(user)\n// set.add(99)\n// set.add(user)\n// console.log(\"size :\", set.size);\n// for (let item of set) {\n//     console.log(item)\n// }\n// if (set.has(99)) {\n//     set.delete(99)\n// }\n// console.log(set.size);\n// WEAKMAP AND WEAKSET\n// let userA = { name: \"A\" }\n// let userB = { name: \"B\" }\n// let weakMap = new WeakMap()\n// weakMap.set(userA, \"User A\")\n// weakMap.set(userB, \"User B\")\n// console.log(weakMap.get(userA));\n// userA = null;\n// console.log(weakMap.get(userA));\n// let weakSet = new WeakSet();\n// weakSet.add(userA)\n// weakSet.add(userB)\n// userB = null;\n// if (weakSet.has(userB)) {\n//     console.log(\"Does exist\")\n// } else {\n//     console.log(\"Does not exist\");\n// }\n// TAGGED TEMPLATE LITERALS\n// function taggedFunction(firstArgs, ...secondArgs) {\n//     console.log(firstArgs);\n//     console.log(secondArgs)\n// }\n// let username = \"John Doe\";\n// let age = 32;\n// taggedFunction`Hello Mr. ${username}, You're ${age} years old.`\n// ITERATORS AND GENERATORS\n// let friends = [\"Jack\", \"Jill\", \"John\"]\n// console.log(friends);\n// const iterator = friends[Symbol.iterator]()\n// let result = iterator.next()\n// while (!result.done) {\n//     console.log(result.value);\n//     result = iterator.next();\n// }\n// let myIterator = {\n//     [Symbol.iterator]: function () {\n//         return {\n//             next: function () {\n//                 return {\n//                     value: \"First Package\",\n//                     done: false\n//                 }\n//             }\n//         }\n//     }\n// }\n// const iter = myIterator[Symbol.iterator]()\n// console.log(iter.next())\n// const makeRangeIterator = (start, end, steps) => {\n//     let startPoint = start;\n//     const rangeIterator = {\n//         next: function () {\n//             let result;\n//             if (startPoint < end) {\n//                 result = { value: startPoint, done: false };\n//                 startPoint += steps;\n//                 return result\n//             }\n//             return { value: undefined, done: true }\n//         }\n//     }\n//     return rangeIterator;\n// }\n// const rangeIterator = makeRangeIterator(2, 15, 2);\n// console.log(rangeIterator.next())\n// console.log(rangeIterator.next())\n// console.log(rangeIterator.next())\n// console.log(rangeIterator.next())\n// console.log(rangeIterator.next())\n// console.log(rangeIterator.next())\n// console.log(rangeIterator.next())\n// console.log(rangeIterator.next())\n// function* myGenerator() {\n//     yield 101;\n//     yield 202;\n//     yield \"John Doe\";\n// }\n// const it = myGenerator()\n// console.log(it.next())\n// console.log(it.next())\n// console.log(it.next())\n// console.log(it.next())\n// function* makeRangeGenerator(start, end, step) {\n//     for (let i = start; i <= end; i += step) {\n//         yield i;\n//     }\n// }\n// const it = makeRangeGenerator(1, 5, 1)\n// for (let item of it) {\n//     console.log(item)\n// }\n// console.log(it.next())\n// console.log(it.next())\n// console.log(it.next())\n// console.log(it.next())\n// console.log(it.next())\nvar myIterator = _defineProperty({}, Symbol.iterator, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {\n  return _regeneratorRuntime().wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return \"First Package\";\n\n        case 2:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n\nvar _iterator = _createForOfIteratorHelper(myIterator),\n    _step;\n\ntry {\n  for (_iterator.s(); !(_step = _iterator.n()).done;) {\n    var item = _step.value;\n    console.log(item);\n  }\n} catch (err) {\n  _iterator.e(err);\n} finally {\n  _iterator.f();\n}\n\n//# sourceURL=webpack://02-boilerplate-webpack-babel-setup/./src/index.js?");

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