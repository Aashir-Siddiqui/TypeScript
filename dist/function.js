"use strict";
const studentDetail = (name, age) => {
    return `Student name is ${name.toUpperCase()} and ${name.toLowerCase()} age is ${age} years`;
};
console.log(studentDetail("Aashir", 18));
const palindrome = (str) => {
    let checkPalindrome = str.split("").reverse().join("");
    return checkPalindrome == str;
};
console.log(palindrome("MOM"));
function printId(id) {
    console.log(`ID: ${id}`);
}
printId(101);
printId("ABC123");
