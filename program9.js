// Remove all duplicates in the array

// 1.
const uniqueArr = (arr) => {
    return [...new Set(arr)];
};

// 2.
// const uniqueArr = (arr) => {
//     const result = [];
//     arr.forEach(element => {
//         if(!result.includes(element)) {
//             result.push(element);
//         }
//     });
//     return result;
// }

// 3.
// const uniqueArr = (arr) => {
//     return arr.reduce((acc, el) => {
//         return acc.includes(el) ? acc : [...acc, el];
//     }, []);
// };

console.log(uniqueArr([1,1,2]));
