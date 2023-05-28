// Closures - Closure means that we have access inside of a function to the outside scope

// Create a counter function which has increment and getValue functionality

// 1.
// const privateCounter = () => {
//     let count = 0;

//     return {
//         increment: (val = 1) => {   // if we don't declare the value for val = 1 then result will be NaN.
//             count += val;
//         },
//         getValue: () => {
//             return count;
//         }
//     }
// }

// const counter = privateCounter();
// console.log(counter.getValue());    // 0
// counter.increment();
// console.log(counter.getValue());    // 1


// 2.
const privateSecret = () => {
    const secret = "foo";

    return () => secret;
}

const getSecret = privateSecret();
console.log(getSecret());