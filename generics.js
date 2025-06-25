"use strict";
function gen(value) {
    return value;
}
const gen1 = gen(12);
console.log(gen1);
const gen2 = gen("Hello");
console.log(gen2);
function getfirstElement(arr) {
    return arr[0];
}
const arr1 = getfirstElement(["Hello", "Hey"]);
const arr2 = getfirstElement([1, 2, 3, "4", "5"]);
console.log(arr1);
console.log(arr2);
function merge(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
const result = merge({ name: "Aashir" }, { age: 18 });
console.log(result);
function createPair(key, value) {
    return { key, value };
}
const p1 = createPair("id", 1);
console.log(p1);
