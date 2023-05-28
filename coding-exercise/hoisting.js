// Hoisting - It means that the declaration of your variable will bubble to the top of the file.

// What will be console.logged here

// 1.
// console.log(foo); // Uncought ReferenceError: foo is not defined
// foo = 1;

// 2.
// console.log(foo); //undefined
// var foo = 2;

// 3.
// foo = 3;
// console.log(foo);   // 3
// var foo;

// 4.
// foo();
// function foo() {}  // No Error

// 5.
var car = new Vehicle("Honda", "White", "2010", "IND"); // It is undefined function without new keyword
console.log(car);       // Vehicle {model: 'Honda', color: 'White', year: '2010', country: 'IND'}
function Vehicle(model, color, year, country) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.country = country;
}
