// Concatinating Arrays

// Write a function which can concatincate 2 Arrays

const mergeArrays = (arr1, arr2) => {
    // return arr1.concat(...arr2);
    return [...arr1, ...arr2]
}

const arr1 = [1];
const arr2 = [2, 3];
const result = mergeArrays(arr1, arr2);
console.log(result, arr1, arr2);