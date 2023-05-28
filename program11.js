// Writing Range function

// range(1, 50)
// 1,2,3,4,5,6,...,50

// const range = (start, end) => {

//     const result = [];
//     for(let i=start; i<= end; i++) {
//         result.push(i);
//     }
//     return result;
// };

const range = (start, end) => {
    return [...Array(end - start).keys()].map(el => el+ start)
}

console.log(range(1,50));