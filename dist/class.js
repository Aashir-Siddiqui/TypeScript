"use strict";
class Person {
    name;
    f_name;
    age;
    gender;
    constructor(name, f_name, age, gender) {
        this.name = name;
        this.f_name = f_name;
        this.age = age;
        this.gender = gender;
    }
}
class Students extends Person {
    residence;
    constructor(name, f_name, age, gender, residence) {
        super(name, f_name, age, gender);
        this.residence = residence;
    }
    academicData(institute, batch) {
        return `Hey i am ${this.name} i am ${this.age} years old. I am learning ${institute} and i am batch ${batch} student.`;
    }
    displayResidence() {
        return `Phone: ${this.residence.phoneNumber}, Address: ${this.residence.address}`;
    }
    get fullName() {
        return `${this.name} ${this.f_name}`;
    }
}
const stu1 = new Students("Aashir", "Mubeen Siddiqui", 18, "male", { phoneNumber: 123456789, address: "Karachi Pakistan" });
const stu2 = new Students("Shahzaib", "Aashir", 20, "male", { phoneNumber: 123456722, address: "Islamabad Pakistan" });
console.log(stu1);
console.log(stu1.academicData("SMIT", 15));
console.log(stu2);
console.log(stu2.fullName);
