"use strict";
// number type 
let n = 10;
n = 20;
console.log(n);
const sum = (a, b) => {
    return a + b;
};
console.log(sum(10, 20));
let num = 100;
console.log(num.toString());
let stuName = prompt("Enter your name");
let rollNum = prompt("Enter any roll number");
let nameRegex = /^[A-Za-z\s]+$/;
if (stuName && nameRegex.test(stuName) && Number(rollNum) <= 10) {
    console.log(`${stuName}, your class number is 1`);
}
else if (stuName && nameRegex.test(stuName) && Number(rollNum) > 10) {
    console.log(`${stuName}, your class number is 2`);
}
else {
    console.log(`Invalid credentials`);
}
let nanValue = NaN;
if (isNaN(nanValue)) {
    console.log("value is NaN");
}
// string type
let firstName = "Aashir ";
let lastName = "Siddiqui";
let fullName = firstName + lastName;
console.log(fullName);
let str1 = "The rain in SPAIN stays mainly in the plain";
console.log(str1.match(/ain/gi)?.join(" "));
console.log(str1.replace(/SPAIN/gi, "Pakistan"));
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
let str2 = "Hello";
let str3 = "World";
const isEqual = str2 === str3;
console.log(isEqual);
// Boolean type 
let workDone = true;
let myNameisAhmed = false;
function isEven(a) {
    return a % 2 === 0;
}
console.log(isEven(6));
function func(b) {
    return (b % 4 && b % 8) === 0;
}
console.log(func(16));
// bigInt type 
let maxNumber = Number.MAX_SAFE_INTEGER;
console.log(maxNumber);
let maxNum = 9007199254740993n;
console.log(maxNum);
let bigNumber = 900719925474099198n;
let difference = maxNum - bigNumber;
let add = maxNum + bigNumber;
let product = maxNum * bigNumber;
let division = maxNum / bigNumber;
console.log(difference);
console.log(add);
console.log(product);
console.log(division);
// any type
let x = "Aashir";
x = 5;
x = true;
// unknown type 
let c = "Aashir";
c = 5;
if (typeof c === "number") {
    console.log(c + 5);
}
else if (typeof c === "string") {
    console.log(c.toUpperCase());
}
else {
    console.log(c);
}
// undefined type 
let und = undefined;
console.log(und);
// null type 
let nu = null;
console.log(nu);
