type Student = {
    name: string;
    age: number;
    gender: string;
    greet(city: string): string     // call signature method
}

const student1: Student = {
    name: "Aashir",
    age: 18,
    gender: "Male",
    greet: function (this: Student, city: string): string {
        return `My name is ${student1.name} and, I am ${student1.age} years old and, I am from ${city}`
    }
}

const student2: Student = {
    name: "Shazaib",
    age: 19,
    gender: "Male",
    greet: function (this: Student, city: string): string {
        return `My name is ${student1.name} and, I am ${student1.age} years old and, I am from ${city}`
    }
}

const introduction: (student1: Student) => string = (student1: Student): string => {
    const { name, age } = student1
    return `My name is ${name} and, I am ${age} years old`
}

console.log(introduction(student1))

console.log(student1.greet("Karachi"))

console.log(student2.greet("Lahore"))


type Addfunc = (a:number, b:number) => number 

const add1: Addfunc = (a, b) => a + b

console.log(add1(6, 6))


interface OverloadFunc {
    (x: number): number;
    (x: string): string;
}

const test: OverloadFunc = (x: any) => {
    if(typeof x === "number") return x * 2
    return x.toUpperCase()
}

console.log(test(2))

console.log(test("hello world"))


type SumFunc = (...numbers: number[]) => number

const s: SumFunc = (...numbers) => numbers.reduce((total, num) => total + num, 0)

console.log(s(11, 43, 25, 27))