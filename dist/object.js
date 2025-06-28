"use strict";
// Inline Object Type
let user = {
    name: "Aashir",
    age: 18
};
console.log(user);
for (let key in user) {
    console.log(`${key} : ${user[key]}`);
}
const employee1 = { employeeName: "Ahmed", employeeAge: 24, employeeAddress: { country: "Pakistan", city: "Karachi" } };
console.log(employee1);
const employee2 = { employeeName: "Ahmed", employeeAge: 24, employeeAddress: { country: "Pakistan", city: "Karachi", postalcode: 1239078 } };
console.log(employee2);
function createUsers(user) {
    return {
        name: user.name ?? "Guest",
        age: user.age ?? 0,
        isStudent: user.isStudent ?? false,
        qualification: user.qualification ?? "None"
    };
}
let user1 = createUsers({ name: "Naveed", age: 21, isStudent: true, qualification: "CS" });
console.log(user1);
let user2 = createUsers({ name: "Naveed", age: 21, isStudent: true });
console.log(user2);
let comp1 = { name: "Hostinger", service: "Hosting provider" };
// comp1.name = "Google"     // ERROR Cannot assign to 'name' because it is a read-only property.
console.log(comp1);
let fruit = {
    furits: "Apple",
    price: 200
};
console.log(fruit);
let stu = {
    name: "Aashir",
    address: {
        city: "Karachi"
    }
};
console.log(stu);
let staff1 = {
    name: "Ali",
    salary: 120000
};
console.log(staff1);
let pair1 = { key: "age", value: 15 };
console.log(pair1);
let car1 = {
    name: "Toyota",
    price: 8000000
};
console.log(car1);
// let detail1: Required<Details> = {
//     name: "Irfan",
//     age: 26,
// }   //ERROR   Property 'gender' is missing in type '{ name: string; age: number; }' but required in type 'Required<Details>'
let detail1 = {
    name: "Irfan",
    age: 26,
    gender: "Male"
};
console.log(detail1);
let bike1 = {
    name: "Honda",
    model: 2025
};
console.log(Object.entries(bike1));
let contact1 = {
    name: "Rafay",
    email: "rafay@gmail.com"
};
console.log(contact1);
let people1 = {
    name: "Babar",
    age: 29,
    nikname: "King"
};
// people1.nikname = "Ghante ka king" // ERROR   Cannot assign to 'nikname' because it is a read-only property.
console.log(people1);
let score = {
    math: 89,
    english: 91,
    physic: 83
};
console.log(score);
let access = {
    admin: true,
    HR: false,
    user: false
};
console.log(access);
let cities = {
    Karachi: { min: 26, max: 44 },
    lahore: { min: 22, max: 43 }
};
console.log(cities);
let s1 = {
    rollNO: 1,
    name: "AAshir",
    grades: {
        math: 86,
        computer: 95,
        chemistry: 87,
    },
    email: "aashir@gmail.com"
};
console.log(s1);
function calulateAverageGrades(s1) {
    const grades = Object.values(s1.grades);
    const sum = grades.reduce((total, mark) => total + mark, 0);
    const gradesLength = grades.length;
    const average = sum / gradesLength;
    return Number(average.toFixed(2));
}
console.log(calulateAverageGrades(s1));
