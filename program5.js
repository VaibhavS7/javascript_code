// Currying

// 1. Write a function which helps to achieve multiply(a)(b) and returns product of a and b
// 2. Create a currying function

// 1.1
// const multiply = (num1) => {
//     return (num2) => {
//         return num1 * num2;
//     }
// }

// 1.2
const multiply = (num1) => (num2) => num1 * num2;

console.log(multiply(2)(3));