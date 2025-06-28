"use strict";
// default parameter
const greet = (name, id = 0) => {
    return `Welcome ${name} and your id is ${id}`;
};
let g = greet("Aashir");
console.log(g);
// optional parameter
const greet1 = (name, id) => {
    if (id) {
        return `Welcome ${name} and your id is ${id}`;
    }
    else {
        return `Welcome ${name}`;
    }
};
let g1 = greet1("Ahmed");
console.log(g1);
