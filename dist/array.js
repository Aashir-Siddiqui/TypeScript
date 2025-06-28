"use strict";
// using square brackets
const numbers = [1, 2, 3, 4, 5, 6];
const allSum = numbers.reduce((acc, nums) => acc + nums);
console.log(allSum);
const fnum = numbers.filter((x) => x >= 4);
console.log(fnum);
// Using Array<Type> (Generic Syntax)
const names = ["Aashir", "Ali", "Naveed"];
names.push("Saad");
console.log(names[3]);
// using the Array constructor
const student = new Array("Mani", "Farzam", "Moiz");
const upperStudent = student.map((u) => u.toUpperCase());
console.log(upperStudent);
// using the Array.of method
const str = Array.of("Murtaza", "Ahmed");
str.unshift("Siddiqui");
console.log(str);
// Mixed Types (Union Types in Array)
const mixedArr = ["Hello", 2, "World", 4];
console.log(mixedArr);
// Type Safety
const numArr = [1, 2, 3];
// numbers[1] = "hello";  //Error: Type 'string' is not assignable to type 'number'
numArr[1] = 4;
console.log(numArr);
// Readonly Arrays
const fruits = ["Apple", "Kiwi", "Peach"];
// fruits[1] = "banana"   //Error
fruits.forEach((fruits, index) => {
    console.log(index + ")", fruits);
});
for (let f of fruits) {
    console.log(f);
}
const readArr1 = [11, 12, 13];
// readArr.push(14)    // Error
console.log(readArr1.includes(12));
// Array of Objects 
// Using Type[]
let users = [
    { name: "Aashir", age: 18 },
    { name: "Ali", age: 19 },
];
console.log(users);
// Using Array<Type> (Generic Syntax)
let products = [
    { id: 123, name: "Cake", price: 1500 },
    { id: "xyz", name: "Pizza", price: 2500 },
];
console.log(products);
function productsSum(products) {
    const sum = products.reduce((total, item) => total + item.price, 0);
    return sum;
}
console.log("Total products price is " + productsSum(products));
let fru1 = [
    { name: "Kiwi", price: 400 },
    { name: "Mango", price: 700 },
];
console.log(fru1);
let veg1 = [
    { isfreash: true, name: "Onion", price: 200 },
    { name: "Potato", price: 100 },
];
console.log(veg1);
