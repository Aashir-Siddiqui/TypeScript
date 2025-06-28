"use strict";
const student1 = {
    name: "Aashir",
    age: 18,
    gender: "Male",
    greet: function (city) {
        return `My name is ${student1.name} and, I am ${student1.age} years old and, I am from ${city}`;
    }
};
const student2 = {
    name: "Shazaib",
    age: 19,
    gender: "Male",
    greet: function (city) {
        return `My name is ${student1.name} and, I am ${student1.age} years old and, I am from ${city}`;
    }
};
const introduction = (student1) => {
    const { name, age } = student1;
    return `My name is ${name} and, I am ${age} years old`;
};
console.log(introduction(student1));
console.log(student1.greet("Karachi"));
console.log(student2.greet("Lahore"));
const add1 = (a, b) => a + b;
console.log(add1(6, 6));
const test = (x) => {
    if (typeof x === "number")
        return x * 2;
    return x.toUpperCase();
};
console.log(test(2));
console.log(test("hello world"));
const s = (...numbers) => numbers.reduce((total, num) => total + num, 0);
console.log(s(11, 43, 25, 27));
