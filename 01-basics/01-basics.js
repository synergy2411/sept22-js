// var x = "Some string";

// console.log(typeof x);

// x = 101;

// console.log(typeof x);

// x = false;

// console.log(typeof x);


// LET, CONST & VAR
// - let & const -> Block Scope Variables
// - Restricts the variable to the nearest block - if, else, for, while, function


// function demo(arr) {
//     if (arr.length > 2) {
//         const LAOD = "LAODING";
//         console.log(FLASH);         // undefined
//     } else {
//         const FLASH = "FLASHING";
//     }
// }

// demo([1, 2, 3, 4, 5]);


// function a() {
//     var x = 101;
// }

// function b() {
//     var x = 201;
// }


// const user = "John Doe";

// user = "Jenny Doe";


// const userTwo = "Alice Doe";

// const user = {
//     name: "John"
// }

// user.name = "Jenny";

// console.log(user);


// // user = {
// //     name: "Alice"
// // }

// user.age = 32

// console.log(user)


// const friends = ["John", "Jenny", "Alice"];

// friends.push("Maria");

// console.log(friends)

// // error
// friends = ["John", "Jenny", "Alice", "Maria"];


// const userOne = {
//     name: "John"
// }

// const userTwo = userOne;

// userTwo.name = "Jenny";

// console.log(userOne)        // "Jenny"





// Operators

// let x = "20";

// let y = 10;

// // let result = x + y;
// let result = x - y;

// console.log("RESULT : ", result);           // 2010

// let z = 20;

// let isMatch = x === z;

// console.log("Match : ", isMatch);


// console.log("20" + 10 * 5);         // ?


// console.log(3 > 2 > 1);     // 3 > 2 = true > 1 = false



// SHORT CIRCUIT OPERATORS
let result = (3 < 2) && (3 > 2);

console.log("RESULT : ", result);       // ?

let resultTwo = false || true;

console.log("RESULT : ", resultTwo);        // ?



// Nullish Coalescing (??) -> null, undefined
// - Will not treat Zero (0) as falsy value

// function demoNullish(value) {
//     let username = value ?? "John Doe";
//     // let username = value ? value : "John Doe";

//     console.log("USERNAME : ", username);
// }

// // demoNullish();
// demoNullish(0);
// demoNullish("Jenny Doe");




// OR - null, undefined, Zero

// function sum(n1) {
//     // let numberOne = n1 ? n1 : 0;
//     let numberOne = n1 ?? 10;

//     let result = 2 + numberOne;

//     console.log("RESULT : ", result);
// }

// sum(0)



// STRING TEMPLATE LITRALS

// " " || ' ' || ` ` (back tick)

// - Embedd the variable within string without concatenate operator (+)
// - Write Multiline string without carrige return (\n)

// let username = "John Doe";
// let age = 32;

// let greetings = "Hello " + username + "\n I'm " + age + " years old!!";

// let goodGreet = `
// Hello ${username},
// I'm ${age} years old!!
// `;

// console.log(greetings);
// console.log(goodGreet);




// TYPE CONVERSION AND COCERCION

// let x = "20";

// let y = 10;

// console.log("SUM : ", parseInt(x) + y)
// console.log("SUM : ", Number(x) + y)



// FOR LOOP

let friends = ["Joe", "Chandler", "Ross", "Rachel"]

for (let f of friends) {
    console.log("My Friends : ", f);
}

let user = {
    name: "John",
    age: 32,
    email: "john@test.com"
}

for (let key in user) {
    console.log(`${key} : ${user[key]}`)
}