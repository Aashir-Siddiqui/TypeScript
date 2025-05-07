// Basic Tuple

let t: [number, number] = [12, 22]

t[0] = 32

console.log(t)


//Mixed Tuples

let tup: [string, boolean, number]
console.log(tup = ["saad", true, 24])


//Nested Tuples

let nes: [string, [number, number, string]] = ["aashir", [1, 2, "ahmed"]]
console.log(nes)


// Tuple with Rest Elements

let res: [string, ...number[]]   // ...Rest hamesha last main hi hona chaye
console.log(res = ["naveed", 10, 20, 30])

res = ["a", 40]  // Valid
console.log(res)


// Optional Elements

let opt: [boolean, string?]   // Tuple main last element optional ho sakta same rest ki tarha
console.log(opt = [false])


// Destructuring Tuples

let person: [string, boolean] = ["murtaza", true]

let [firstname, isStudent] = person

console.log(firstname)
console.log(isStudent)


// Readonly Tuples

let read: readonly [number, string] = [12, "Readonly"]

// read[0] = 20   // Cannot assign to '0' because it is a read-only property.

console.log(read)


// Tuple with Union Types

let idPair: [string | number, string | number] = ["ABC123", 101]; // Valid

idPair = [202, "XYZ789"]; // Valid

console.log(idPair)


// Tuples in Functions

function getPerson(): [string, number] {
    return ["aashir", 25];
}

let [fname, age] = getPerson();

console.log(fname, age);
