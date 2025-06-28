"use strict";
let id;
id = "example123";
console.log(id);
id = "12345";
console.log(id);
const userInput = (value) => {
    if (typeof value === "number") {
        return value * 2;
    }
    else if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        throw new Error("Invalid input data");
    }
};
console.log(userInput(5));
console.log(userInput("aashir"));
