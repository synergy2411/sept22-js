// // OBJECTS : unorganized collection in key-value format

// // - Literal Method : directly supplied the object value to variable

// // let myBooks = ["book1", "book2", "book3"];

// // let box = {
// //     type: "Container",
// //     "width": 8,
// //     "heigth": 6,
// //     "no of books": 12,
// //     addbook: function (book) {
// //         box.books.push(book);
// //     },
// //     books: myBooks,
// //     createdAt: new Date("Sept 12, 2022")
// // }

// // console.log(JSON.parse(JSON.stringify(box)))

// // box.addbook("Book4")

// // console.log(box);

// // console.log("My Books length : ", myBooks.length);  // ?

// // box.volume = box.width * box.heigth;

// // console.log(box);           // { width, height, volume }

// // console.log("Box Width : ", box["width"])

// // console.log("Number of Books ", box["no of books"])







// // - Constructor Method : Similar types of object

// // function Person(firstName, lastName) {
// //     this.firstName = firstName;
// //     this.lastName = lastName;
// //     this.greet = function () {
// //         return `Hello from ${this.firstName} ${this.lastName}`;
// //     }
// // }

// // let john = new Person("John", "Doe");

// // let jenny = new Person("Jenny", "Doe");


// // console.log(john.greet());
// // console.log(jenny.greet());
















// // - Instance Method : implements inheritance

// // let shoe = {
// //     size: 8
// // }

// // let magicShoe = Object.create(shoe);

// // console.log("Magic Shoe : ", magicShoe);

// // console.log("Size : Magic Shoe", magicShoe.size);

// // console.log(shoe.isPrototypeOf(magicShoe))
// // console.log(magicShoe.isPrototypeOf(shoe))
// // console.log(Object.prototype.isPrototypeOf(shoe))


// // let str = "Hello World";
// // let str = new String("Hello World");

// // console.log(str.length);
// // console.log(str.indexOf("o"))

// // console.log(str.doesNotExist)




// // PROTOTYPE INHERITANCE / EXTENDING THE FUNCTIONALITY

// function Person(firstName, lastname) {
//     this.firstName = firstName;
//     this.lastname = lastname;
//     this.sayHi = function () {
//         console.log("Hi");
//     }
// }

// Person.prototype.greet = function () {
//     return `Hello from ${this.firstName} ${this.lastname}`
// }


// let john = new Person("John", "Doe")
// let jenny = new Person("Jenny", "Doe")

// console.log(john)               // Person { firstName, lastName, sayHi()}
// console.log(jenny.toString())



// let str = "Welcome to the world of JavaScript";
// let strTwo = "Javascript is awesome";

// String.prototype.numberOfOccurance = function (letter) {
//     let count = 0;
//     for (let i = 0; i < this.length; i++) {
//         if (this.charAt(i).toLowerCase() === letter.toLowerCase()) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(str.numberOfOccurance("t"))         // 3

// console.log(strTwo.numberOfOccurance("a"));