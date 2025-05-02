// number data type 

let n: number = 10;
n = 20
console.log(n)

const sum = (a: number, b: number): number => {
    return a + b
}

console.log(sum(10, 20))

let num: number = 100;
console.log(num.toString())

let stuName = prompt("Enter your name");
let rollNum = prompt("Enter any roll number");
let nameRegex = /^[A-Za-z\s]+$/

if (stuName && nameRegex.test(stuName) && Number(rollNum) <= 10) {
    console.log(`${stuName}, your class number is 1`);
}
else if (stuName && nameRegex.test(stuName) && Number(rollNum) > 10) {
    console.log(`${stuName}, your class number is 2`);
}
else {
    console.log(`Invalid credentials`);
}

let nanValue: number = NaN;

if (isNaN(nanValue)) {
    console.log("value is NaN");
}


// string data type

let firstName: string = "Aashir "

let lastName: string = "Siddiqui"

let fullName: string = firstName + lastName

console.log(fullName)

let str1: string = "The rain in SPAIN stays mainly in the plain"

console.log(str1.match(/ain/gi)?.join(" "));

console.log(str1.replace(/SPAIN/gi, "Pakistan"))

console.log(str1.toUpperCase())

console.log(str1.toLowerCase())

let str2: string = "Hello"

let str3: string = "World"

const isEqual: boolean = str2 === str3

console.log(isEqual)


// Boolean data type 

let workDone: boolean = true 

let myNameisAhmed: boolean = false

function isEven(a: number): boolean{
    return a % 2 === 0
}
console.log(isEven(6))

function func(b: number): boolean{
    return (b%4 && b%8) === 0
}
console.log(func(16))