// REST / SPREAD

// const demoRest = (email, ...args) => {
//     console.log(args[0]);           // ?
// }

// // demoRest("john@test.com")
// // demoRest("john@test.com", 32)
// demoRest("john@test.com", 32, true)


// Collection - Array / Object

// let friends = ["John", "Maria", "Alice"]

// let moreFriends = ["Jenny", "Jack", "Jill", ...friends]

// console.log(moreFriends);


// const demoSpread = (f1, f2, f3) => {
//     console.log(f2);
// }

// demoSpread(...friends)



// let userA = {
//     name: "John",
//     age: 32,
//     address: {
//         street: "201 MAin Road",
//         city: "Pune",
//         postal: {
//             code: "401013",
//             state: "MH"
//         }
//     },
//     friends: ["f1", "f2", "f3"]

// }

// let userB = {
//     ...userA,           // Shallow copy
//     name: "Jenny",
//     age: 28,
//     friends: [...userA.friends],        // Shallow copy
//     address: { ...userA.address }       // Shallow copy
// }

// userB.friends.push("f4");           // 4

// userB.address.postal.code = 505050;

// // console.log(userB)
// // console.log(userA);             // 4


// // DEEP COPY
// let userC = JSON.parse(JSON.stringify(userA));

// userC.address.postal.state = "HYD"

// console.log(userA);
// console.log(userB);
// console.log(userC);
















// DESTRUCTURING

// let fruits = ["Apple", "Guava", "Kiwi", "Grapes"];

// let [f1, , , f3, f4] = fruits;

// console.log(f3, f4);

// let box = {
//     width: 6,
//     height: 8,
//     books: ["book1", "book2", "book3"]
// }

// let { width: w, height: h, books: b } = box;


// b.push("books");

// console.log(w, h, b)

// console.log(box.books);     // ?





let user = {
    firstName: "Alice",
    lastName: "Martin",
    age: 23,
    address: {
        street: "201 Main Road",
        city: "Pune"
    },
    friends: ["Jack", "Jill"]
}

