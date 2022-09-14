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



// PRACTICE EXERCISE

// let user = {
//     firstName: "Alice",
//     lastName: "Martin",
//     age: 23,
//     address: {
//         street: "201 Main Road",
//         city: "Pune"
//     },
//     friends: ["Jack", "Jill"]
// }

// let { firstName, lastName, age, address: { street, city }, friends: [f1, f2] } = user;



// let users = [
//     { email: "john@test", age: 20 },
//     { email: "jill@test", age: 22 },
//     { email: "jack@test", age: 23 },
//     { email: "jenny@test", age: 26 },
// ]


// let [
//     {email : e1, age : a1},
//     {email : e2, age : a2},
//     {email : e3, age : a3},
//     {email : e4, age : a4},
// ] = users;



// let box = {
//     "width": 4
// }

// let user = { name: "John" };

// let map = new Map();

// map.set(user, "The Object")
// map.set("age", 32)
// map.set(true, "is Admin")
// map.set(101, "the Id")

// for (let item of map.values()) {
//     console.log(item);
// }

// for (let key of map.keys()) {
//     console.log(key)
// }

// console.log(map.size);

// console.log(map.has(true))

// map.delete(101)

// console.log(map.get(101))

// map.clear()

// console.log(map.size);



// let user = { name: "John" }

// let set = new Set();

// set.add("John Doe")
// set.add(99)
// set.add(false)
// set.add(user)
// set.add(99)
// set.add(user)

// console.log("size :", set.size);

// for (let item of set) {
//     console.log(item)
// }

// if (set.has(99)) {
//     set.delete(99)
// }

// console.log(set.size);


// WEAKMAP AND WEAKSET

// let userA = { name: "A" }
// let userB = { name: "B" }

// let weakMap = new WeakMap()

// weakMap.set(userA, "User A")
// weakMap.set(userB, "User B")

// console.log(weakMap.get(userA));

// userA = null;

// console.log(weakMap.get(userA));

// let weakSet = new WeakSet();

// weakSet.add(userA)
// weakSet.add(userB)

// userB = null;

// if (weakSet.has(userB)) {
//     console.log("Does exist")
// } else {
//     console.log("Does not exist");
// }


// TAGGED TEMPLATE LITERALS

// function taggedFunction(firstArgs, ...secondArgs) {
//     console.log(firstArgs);
//     console.log(secondArgs)
// }


// let username = "John Doe";
// let age = 32;

// taggedFunction`Hello Mr. ${username}, You're ${age} years old.`



// ITERATORS AND GENERATORS


// let friends = ["Jack", "Jill", "John"]

// console.log(friends);

// const iterator = friends[Symbol.iterator]()

// let result = iterator.next()

// while (!result.done) {
//     console.log(result.value);
//     result = iterator.next();
// }


// let myIterator = {
//     [Symbol.iterator]: function () {
//         return {
//             next: function () {
//                 return {
//                     value: "First Package",
//                     done: false
//                 }
//             }
//         }
//     }
// }

// const iter = myIterator[Symbol.iterator]()

// console.log(iter.next())



// const makeRangeIterator = (start, end, steps) => {
//     let startPoint = start;
//     const rangeIterator = {
//         next: function () {
//             let result;
//             if (startPoint < end) {
//                 result = { value: startPoint, done: false };
//                 startPoint += steps;
//                 return result
//             }
//             return { value: undefined, done: true }
//         }
//     }
//     return rangeIterator;
// }

// const rangeIterator = makeRangeIterator(2, 15, 2);

// console.log(rangeIterator.next())
// console.log(rangeIterator.next())
// console.log(rangeIterator.next())
// console.log(rangeIterator.next())
// console.log(rangeIterator.next())
// console.log(rangeIterator.next())
// console.log(rangeIterator.next())
// console.log(rangeIterator.next())




// function* myGenerator() {
//     yield 101;
//     yield 202;
//     yield "John Doe";
// }

// const it = myGenerator()

// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())


// function* makeRangeGenerator(start, end, step) {
//     for (let i = start; i <= end; i += step) {
//         yield i;
//     }
// }

// const it = makeRangeGenerator(1, 5, 1)

// for (let item of it) {
//     console.log(item)
// }

// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())



// let myIterator = {
//     *[Symbol.iterator]() {
//         yield "First Package"
//     }
// }


// for (let item of myIterator) {
//     console.log(item)
// }



// CLASSES

class Person {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getDetails() {
        return `${this.firstName} ${this.lastName}`
    }
}

let john = new Person("John", "Doe")


class Employee extends Person {
    #salary;

    constructor(fname, lname, age, salary) {
        super(fname, lname);
        this.age = age;
        this.#salary = salary;
    }
    // Overriding
    getDetails() {
        return `${this.age} - ${this.#salary}`;
    }

    get salary() { return this.#salary; }
    set salary(value) { this.#salary = value }
}

let empOne = new Employee("Foo", "Bar", 32, 10000);
console.log(empOne.getDetails())