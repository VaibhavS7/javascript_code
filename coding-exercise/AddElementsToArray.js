// Adding elements to the Array
// Write a function which get's an array and an element and returns a array with this element at the end


const numbers = [1, 2];
const append = (arr, el) => {
    // arr.push(el);        // don't use push to add element in array. it will modify old array.
    // return arr;
    
    return [...arr, el];    // use spread operator to add the element in array.
}

const newNumbers = append(numbers, 3)
console.log(newNumbers);
console.log(numbers);