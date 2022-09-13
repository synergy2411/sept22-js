// let numbers = [2, 3, 4, 5, 6];

// let arr = ["John Doe", 32, true, { email: "test@test.com" }, function () { console.log("Function Called") }]

// console.log(arr[3].email)

// arr[4]()

// let numbers = new Array(2, 3, 4, 5, 6);

// console.log(numbers.length);

// let newNumbers = new Array(9);

// console.log(newNumbers.length);


// ARRAY FUNCTIONS

let numbers = [12, 14, 42, 57, 100]

// numbers.push(99);

// numbers.pop()

// numbers.shift()

// numbers.unshift(101);


// numbers.splice(1, 2)         // [] 

// numbers.reverse()

// numbers.sort()

// numbers.fill(0, 3, 5)


// let mappedNumbers = numbers.map(function (value, index, array) {
//     return value * 2;
// })

// let filteredArray = numbers.filter(function (value, index, array) {
//     return value > 50;
// })

// let slicedArray = numbers.slice(2, 4)

// let moreNumbers = [13, 76, 89]

// let concatedArray = numbers.concat(moreNumbers)

// let position = numbers.indexOf(42)

// let position = numbers.findIndex(function (value, index, array) {
//     return value === 57;
// })

// let elem = numbers.find(function (v) {
//     return v === 14
// })

// let isIncluded = numbers.includes(141);


// let flag = numbers.some(function (v) {
//     return v >= 50
// })


// let flag = numbers.every(function (v) {
//     return v >= 50;
// })

// [12, 14, 42, 57, 100]

// let accValue = numbers.reduce(function (prevValue, currValue) {
//     return prevValue -= currValue
// }, 1000)


numbers.forEach(function (v) {
    console.log("Value : ", v)
})

console.log(numbers);
// console.log(accValue);
// console.log(flag);
// console.log(isIncluded);
// console.log(elem);
// console.log(position);
// console.log(concatedArray);
// console.log(mappedNumbers);
// console.log(filteredArray);
// console.log(slicedArray)




// PRACTICE EXERCISE

let users = [
    { name: "John Doe", age: 30 },
    { name: "Jenny Doe", age: 33 },
    { name: "Alice", age: 35 },
    { name: "Maria", age: 38 },
]

// - find out all users having age >= 35
// - find out the user whose name starts with 'M'
// - find out the total age of all the users
// - sort the users according to their names
// - delete the user named 'Alice'




// TYPED ARRAY - WebGL - 3D, Images, Audio/Video, Large Files / Blobs

let buffer = new ArrayBuffer(16);

let dv1 = new DataView(buffer);

dv1.setInt8(11, 99);

// 4 Bytes starting from 10th index
let dv2 = new DataView(buffer, 10, 4);

console.log(dv2.getInt8(1))
