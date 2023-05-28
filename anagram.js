// Write a function which checks if string is an anagram

// anagrams are words that have the same characters in the same quantity. This means two strings are anagram if we can rearrange one to get the other.
// here are some examples of anagrams.
// "listen" and "silent"
// "rail safety" and "fairy tales"
// "dormitory" and "dirty room"
// "the eyes" and "they see"


const isAnagram = (str1, str2) => {
    if(str1.length != str2.length) {
        return false;
    }

    const lowerStr1 = str1.toLowerCase();
    const lowerStr2 = str2.toLowerCase();

    if(lowerStr1 === lowerStr2) {
        return false;
    }

    const sortStr1 = str1.split("").sort().join("");
    const sortStr2 = str2.split("").sort().join("");

    return sortStr1 === sortStr2;
}

console.log(isAnagram("the eyes", "they see"));