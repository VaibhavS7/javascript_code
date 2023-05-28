// Design a function which returns a fibonacci sequence value
// The Fibonacci sequence is an integer sequence where the first two terms are 0 and 1 after that, the next term is defined as the sum of previous two terms. Hence, the nth term is the sum of (n-1)th term and (n-2)the term.
// 0,1,1,2,3,5,8,13,21,34,55,89,144


const fibonacci = n => {
    if(n== 0) {
        return 0;
    } else if(n<2) {
        return 1;
    } else {
        return fibonacci(n-2) + fibonacci(n-1);
    }
};

console.log(fibonacci(0));