// Write a function which checks if string is a palindrome

const isPalindrome = (str) => {
    return str === str.split("").reverse().join("");
}

console.log(isPalindrome("foo"));