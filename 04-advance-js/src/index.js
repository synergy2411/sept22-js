// COMMONJS MODULE SYSTEM
// const { sum, mul } = require("./utils/maths")

// console.log("Sum : ", sum(4, 5));
// console.log("Multiply : ", mul(4, 5));




// ESM MODULE SYSTEM - Named Export/Import
// import { getDailyFortune, getLuckyNumber } from './utils/fortune';

// console.log("Today Fortune : ", getDailyFortune())
// console.log("Lucky Number : ", getLuckyNumber());


// // ESM MODULE SYSTEM - Default Export/Import
// import MyStudent from './utils/fortune';

// let foo = new MyStudent("S001", "Foo Bar");
// console.log(foo.getDetails())






// // Sync Code
// console.log("START")

// // Async Code
// setTimeout(() => {
//     console.log("TIMER")
// }, 1000);

// // Sync Code
// console.log("END")


// START -> END -> TIMER



// PROMISE

// Producer Code
console.log("START")
const demoPromiseProducer = (arr) => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (arr.length > 2) {
                resolve({ message: "SUCCESS" })
            } else {
                reject(new Error("Something went wrong"))
            }
        }, 3000)
    });

    return promise;
}

// Consumer Code
// - then ... catch
// - Async... await

const demoAsyncAwait = async () => {
    try {
        let response = await demoPromiseProducer([2, 4])
        console.log("ASYNC RESPONSE : ", response)
    } catch (error) {
        console.error(error);
    }
}

demoAsyncAwait()


const demoPromiseConsumer = () => {
    demoPromiseProducer([1, 2, 3, 4])
        .then((response) => {
            console.log("RESPONSE : ", response)
            return response.message;
        })
        .then((message) => {
            console.log("MESSAGE : ", message)
        })
        .catch((error) => {
            console.error(error)
        })
        .finally(() => {
            console.log("COMPLETED")
        })
}

demoPromiseConsumer();