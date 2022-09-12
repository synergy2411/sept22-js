// OBJECTS : unorganized collection in key-value format

// - Literal Method : directly supplied the object value to variable

// let myBooks = ["book1", "book2", "book3"];

// let box = {
//     type: "Container",
//     "width": 8,
//     "heigth": 6,
//     "no of books": 12,
//     addbook: function (book) {
//         box.books.push(book);
//     },
//     books: myBooks,
//     createdAt: new Date("Sept 12, 2022")
// }

// console.log(JSON.parse(JSON.stringify(box)))

// box.addbook("Book4")

// console.log(box);

// console.log("My Books length : ", myBooks.length);  // ?

// box.volume = box.width * box.heigth;

// console.log(box);           // { width, height, volume }

// console.log("Box Width : ", box["width"])

// console.log("Number of Books ", box["no of books"])







// - Constructor Method : Similar types of object

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.greet = function () {
        return `Hello from ${this.firstName} ${this.lastName}`;
    }
}

let john = new Person("John", "Doe");

let jenny = new Person("Jenny", "Doe");


console.log(john.greet());
console.log(jenny.greet());
















// - Instance Method : implements inheritance
