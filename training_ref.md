# Break Timing

Break : 11:00 - 11:15 (15 Minutes)
Lunch : 01:00 - 01:45 (45 Minutes)
Break : 03:30 - 03:45 (15 Minutes)

# JavaScript Engine determines the type of the variable based upon the value present in the variable at runtime.

# Block Scoping - Both let and const restricts the scope of variables to the nearest block / curly braces

# "VAR" keyword are restricted to the function level.

# Data Types

- Primitive -> Numbers, String, Boolean, undefined, null
- Reference -> Object, Array, Date, Function

# Operators

- Arithematic : + - \* /
- Logical : && || !
- Comparison : > < >= <= ! == ===
- Assignment : =
- Increment / Decrement : ++ --
- parenthesis : ()
- Short Circuit Operators : && ||
- Nullish Coalescing : ??

# RTL -> Assignment, Exponentation, Ternary

# LTR -> Rest all operators

# TYPE CONVERSION AND COERCION

- Conversion -> Explicitly changing the type using -
  > Wrapper Classes - Number, String, Boolean
  > Associate Functions - parseInt, parseFloat
  > JSON to JS Object - JSON.stringify() / JSON.parse()
- Coercion -> JS Engine implicitly converts the type

# Conditions

- if
- if/else
- else if
- ternary
- switch...case

# Loops

- while
- do...while
- for
  > for...of - can be used on iterable - (Symbol.iterator) (Array, Arguments)
  > for...in - can be used with Objects
  > for(initializer, condition, increment/decrement)

# DOCUMENT OBJECT MODEL (DOM)

- Hierarchical representation of web page

html
head
script
link
title
meta
body
header
nav
ul
li
a
main
div
h1
p
img
footer
div
p
div
p

# Build Tools

- Webpack : Module Bundler
- Babel : Transpiler / Converter

<!-- Arrow functions -> ES2015 -->
<!-- Spread / Rest Operator -> ES2017 -->

# Package.json file entry point for NodeJS project

> npm init : generate package.json file in project directory

# Webpack and Babel

> npm install webpack webpack-cli -D
> npm install @babel/core @babel/cli @babel/preset-env babel-loader -D

> npm run build

# Objects

- Literal => let user = { name : "john doe", age : 32}
- Constructor => let john = new Person("John","Doe")
- Instance => let magicShoe = Object.create(shoe)

# Array

- Array can hold any data type
- One value in Array() constructor, treated as size of the array
- More than one value in Array() constructor, treated as elements in the array.

# JavaScript Engine run in two phases -

1. Creation Phase : JS Engine allocates the memory to the variables and functions

2. Execution Phase : executes the programs i.e assignments, return statements etc

## Functions -

- Function Syntax -
  : creates hot-spot in memory and hence return the values without compiling
  : Can be called before they are declared

- Function Expression -
  : always re-compiled before returning the result

- Arrow Function - args_list => fn_body
  : Two flavours > with curly braces - {} > without curly braces - only one line

  : Limitations - > Can't call them with 'new' operator > Can't access 'arguments' keyword > Don't have their own 'this' keyword

- Higher Order Function - receives other functions as parameters

- Callbacks - sent as a parameter to other functions (HOF)

  - error first, callback last

- Closure - process of binding the outer scope variables with inner functions

# Scope Chaining

-> local scope -> outer scope -> global scope

# Lexical Scoping is depends upon the actual placement of the function.

# When we go for nested function, we loose the reference of 'this' keyword

# Call, Apply, Bind

- bind : return the bounded function with supplied context
- call : immediately call the function with supplied context and accepts arguments as individual elements
- apply : immediately call the function with supplied context and accepts arguments as an Array

# Spread creates shallow copy of collection - Array / Object

# Iterators and generators

- Iterable Protocol
  : should contain next() method
  : should return the object with value & done properties

# Modules -

- CommonJS Module System : followed by NodeJS
  : module.exports -> to export
  : require() -> to import

- ES6 Module System (ESM) : Commonly used amoung browsers
  : export keyword
  : import statement
- AMD
- UMD

## Libraries that load Modules

- SystemJS
- RequireJS
- Webpack
- Parcel

# One default export each Module is permitted

# Module implement encapsulation

# JavaScript runs all the synchronous code first before any asynchronous code

- Asynchronous Activity :
  : Timers
  : Remote Server Calls
  : Reading/Writing
  : Obtaining Socket
  : DB Connection
  : DB Operations

- Promises / Async...await

- Promise

  > Resolve / Success
  > Reject / Failure

- Producer Code / Build
- Consumer Code

# PROMISE API - STATIC METHODS OF PORMISE CLASS

- all : excutes many promises parallely and return the result at once. "ALL OR NOTHING"

- race : executes many promises and return the result of first completed promise

- allSettled : will wait for all the promises to be settled

- any : returns the result of first settled/resolved promise.

- reject : immediately reject the promise.

- resolve : immediately resolve the promise.

# Expenses App

- Create expenses
- Display expenses
- Expenses will be fetched/stored by making server call
- Create a DELETE button
