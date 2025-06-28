// Inline Object Type

let user: { name: string; age: number } = {
    name: "Aashir",
    age: 18
}

console.log(user)

for (let key in user) {
    console.log(`${key} : ${(user as any)[key]}`)
}


// Interface

interface employee {
    employeeName: string;
    employeeAge: number;
    employeeAddress: { country: string; city: string; postalcode?: number }
}

const employee1: employee = { employeeName: "Ahmed", employeeAge: 24, employeeAddress: { country: "Pakistan", city: "Karachi" } }
console.log(employee1)

const employee2: employee = { employeeName: "Ahmed", employeeAge: 24, employeeAddress: { country: "Pakistan", city: "Karachi", postalcode: 1239078 } }
console.log(employee2)


// Type Alias 

type Users = {
    name: string;
    age: number;
    isStudent: boolean;
    qualification: string
}

function createUsers(user: Partial<Users>): Users {
    return {
        name: user.name ?? "Guest",
        age: user.age ?? 0,
        isStudent: user.isStudent ?? false,
        qualification: user.qualification ?? "None"
    }
}

let user1 = createUsers({ name: "Naveed", age: 21, isStudent: true, qualification: "CS" })
console.log(user1)

let user2 = createUsers({ name: "Naveed", age: 21, isStudent: true })
console.log(user2)


// Readonly Properties

type Company = {
    readonly name: string;
    service: string;
}

let comp1: Company = { name: "Hostinger", service: "Hosting provider" }

// comp1.name = "Google"     // ERROR Cannot assign to 'name' because it is a read-only property.

console.log(comp1)


// Index Signatures

interface fruits {
    [Key: string]: number | string;
}

let fruit: fruits = {
    furits: "Apple",
    price: 200
}

console.log(fruit)


// Nested Objects

type Address = {
    city: string;
    houseNo?: number
}

interface students {
    name: string;
    address: Address
}

let stu: students = {
    name: "Aashir",
    address: {
        city: "Karachi"
    }
}

console.log(stu)


// Intersection Types

interface Person {
    name: string
}

interface Employee {
    salary: number
}

type Staff = Person & Employee

let staff1: Staff = {
    name: "Ali",
    salary: 120000
}

console.log(staff1)


// Generics with Objects 

interface Pair<K, V>{
    key: K;
    value: V;
}

let pair1: Pair<string, number> = {key: "age", value: 15}

console.log(pair1)


// Related Utility Types:
// Utility	    Description
// Partial<T>	All properties become optional
// Required<T>	All properties become required
// Readonly<T>	All properties become read-only
// Pick<T, K>	Only selected properties from T
// Omit<T, K>	All except selected properties from T

interface cars {
    name: string;
    color: string;
    price: number;
}

let car1: Partial<cars> = {
    name: "Toyota",
    price: 8000000
}

console.log(car1)


type Details = {
    name: string;
    age: number;
    gender: string;
}

// let detail1: Required<Details> = {
//     name: "Irfan",
//     age: 26,
// }   //ERROR   Property 'gender' is missing in type '{ name: string; age: number; }' but required in type 'Required<Details>'

let detail1: Required<Details> = {
    name: "Irfan",
    age: 26,
    gender: "Male"
} 

console.log(detail1)


interface Bike {
    name: string;
    model: number;
    price: number;
}

let bike1: Pick<Bike, "name" | "model"> = {
    name: "Honda",
    model: 2025
}

console.log(Object.entries(bike1))


interface contact {
    name: string;
    eduqation: string;
    email: string;
}

let contact1: Omit<contact, "eduqation"> = {
    name: "Rafay",
    email: "rafay@gmail.com"
}

console.log(contact1)


interface Peoples {
    name: string;
    age: number;
    nikname: string;
}

let people1: Readonly<Peoples> = {
    name: "Babar",
    age: 29,
    nikname: "King"
}

// people1.nikname = "Ghante ka king" // ERROR   Cannot assign to 'nikname' because it is a read-only property.

console.log(people1)


let score: Record<string, number> = {
    math: 89,
    english: 91,
    physic: 83
}

console.log(score)


type Roles = "admin" | "HR" | "user"

let access: Record<Roles, boolean> = {
    admin: true,
    HR: false,
    user: false
}

console.log(access)


type CityTemperature = Record<string, Record<"min" | "max", number>>

let cities: CityTemperature = {
    Karachi: {min: 26, max: 44},
    lahore: {min: 22, max: 43}
}

console.log(cities)


type s = {
    readonly rollNO: number,
    name: string;
    grades: Record<string, number>;
    email?: string;
}

let s1: s = {
    rollNO: 1,
    name: "AAshir",
    grades: {
        math: 86,
        computer: 95,
        chemistry: 87,
    },
    email: "aashir@gmail.com"
}

console.log(s1)

function calulateAverageGrades(s1: s):number {

    const grades = Object.values(s1.grades)

    const sum = grades.reduce((total, mark) => total + mark, 0)

    const gradesLength = grades.length

    const average =  sum/gradesLength

    return Number(average.toFixed(2))
}

console.log(calulateAverageGrades(s1))