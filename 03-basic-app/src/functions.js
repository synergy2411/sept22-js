// Function Syntax

// console.log("Sum is ", add(2, 5));

// function add(n1, n2) {
//     return n1 + n2;
// }


// Function Expression

// let addition = function (n1, n2) {          // Anonymous
//     return n1 + n2;
// }
// console.log(addition(4, 5));      // undefined






// function mystry() {
//     function chooseNumber() {               // xixoxixox
//         return 7
//     }
//     return chooseNumber;
//     function chooseNumber() {              // xixoxixox
//         return 12;
//     }
// }



// function mystry() {
//     var chooseNumber = function () {               // xixoxixox
//         return 7
//     }
//     return chooseNumber;
//     var chooseNumber = function () {              // xixoxixox
//         return 12;
//     }
// }

// let nestedFn = mystry();

// console.log(nestedFn());            // 12





// ARROW FUNCTION
// let addition = (n1, n2) => n1 + n2;

// console.log("Arrow : ", addition(2, 5));

// let multiply = (n1, n2) => {
//     let number1 = n1 ?? 1;
//     let number2 = n2 ?? 1;
//     return number1 * number2;
// }

// console.log("Multiply : ", multiply(3));


// let square = val => val * val;

// console.log("Square : ", square(4))


// let nummbers = [12, 14, 15, 16, 100];

// let filteredArray = nummbers.filter(value => value > 15)

// console.log("FilteredArray : ", filteredArray);

// function Person(){}

// let john = new Person()

// const Animal = () => {

// }

// let rabbit = new Animal()



// let demoArgs = () => {
//     console.log(arguments);
//     // for (let args in arguments) {
//     //     console.log(args)
//     // }
// }

// demoArgs("john@test.com")
// demoArgs("john@test.com", 32)
// demoArgs("john@test.com", 32, true)

// let user = {
//     name: "John Doe"
// }

// function demoThis() {
//     console.log(this);
// }

// demoThis();         // window

// alert("Hello World")



// const boundFn = demoThis.bind(user)

// boundFn()







// const demoArrowThis = () => console.log(this);

// demoArrowThis()


// let user = {
//     name: "John",
//     age: 32,
//     getDetails: function () {
//         let nestedFn = () => `Hello from ARROR ${this.name}`
//         return nestedFn();
//     }
//     // getDetails: function () {
//     //     let that = this;
//     //     function nestedFn() {
//     //         return `Hello from ${that.name}`
//     //     }
//     //     return nestedFn();
//     // }
// }

// console.log(user.getDetails())


// Higher Order Function - HOF
// Callbacks - error first, callback last

// function greet(err, data) {
//     if (err) {
//         return console.error(err)
//     }
//     console.log(data)
// }

// function hof(arr, callback) {
//     if (arr.length > 2) {
//         callback(new Error("Too many values"));
//     } else {
//         callback(null, "Too less values")
//     }
// }

// hof([12, 3], (err, data) => {
//     if (err) {
//         return console.error(err)
//     }
//     console.log(data)
// })





// CLOSURES

// function testClosure() {
//     let x = 4;
//     return function () {
//         return ++x;
//     }
// }

// let nestedFn = testClosure()

// console.log(nestedFn());        // 5
// console.log(nestedFn());        // 6
// console.log(nestedFn());        // 6
// console.log(nestedFn());        // 6
// console.log(nestedFn());        // 6


// function buildTicket(transport) {
//     let numberOfPassengers = 0;

//     return function (name) {
//         return `Hello ${name}, You are going via ${transport}.
//         Your ticket ID is #${++numberOfPassengers}`
//     }
// }

// const shipTransport = buildTicket("Ship")

// console.log(shipTransport("John"))      // ?
// console.log(shipTransport("Jenny"))      // ?
// console.log(shipTransport("Alice"))      // ?

// let kangarooTansport = buildTicket("Kangaroo")

// console.log(kangarooTansport("Maria"))  // ?