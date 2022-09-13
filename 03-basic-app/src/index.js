// // let x = 101;

// // function a() {
// //     console.log(x);         // 101
// // }

// // a();


// // let x = 101;
// // function a() {
// //     // let x = 201;
// //     function b() {
// //         // let x = 301;
// //         console.log(x)          // ?
// //     }
// //     b()
// // }

// // a();




// let x = 101;

// function b() {
//     // let x = 301;
//     // console.log(x);         // ?
//     x++;
// }

// function a() {
//     let x = 201;
//     b()
//     console.log(x);         // 201
// }

// a();

// console.log(x);         // ?





// USING 'this'


// let user = {
//     firstName: "John",
//     lastName: "Doe",
//     getDetails: function () {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// console.log(user.getDetails())

// function demoThis() {
//     console.log(this);
// }

// demoThis();         // ?

// const btnEl = document.querySelector("#btn")
// const txtInput = document.querySelector("#txtInput")


// txtInput.addEventListener("change", function () {
//     // console.log(this);

//     const demoArrowFn = () => console.log(this);
//     demoArrowFn()
// })

// btnEl.addEventListener("click", function () {
//     console.log(this);
// })




// CALL APPLY BIND

// let userOne = {
//     name: "John"
// }

// let userTwo = {
//     name: "Maria"
// }

// function greet() {
//     console.log(`Hello from ${this.name}!!!`);
// }

// const boundedUserOneGreet = greet.bind(userOne);
// const boundedUserTwoGreet = greet.bind(userTwo);

// boundedUserOneGreet()
// boundedUserTwoGreet()


function greet(firstName, lastName) {
    console.log(`Hello from ${this.name} - ${firstName}, ${lastName}`);
}


let userA = { name: "A" }
let userB = { name: "B" }

greet.call(userA, "John", "Doe")
greet.apply(userA, ["Jenny", "Jenifer"])