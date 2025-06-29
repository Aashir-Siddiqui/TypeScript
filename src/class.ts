class Person {
    constructor(public name: string, public f_name: string, public age: number, readonly gender: string) { }
}

type Residence = {
    phoneNumber: number,
    address: string
}

class Students extends Person {
    constructor(name: string,
        f_name: string,
        age: number,
        gender: string,
        public residence: Residence) {
        super(name, f_name, age, gender)
    }

    academicData(institute: string, batch: string | number): string {
        return `Hey i am ${this.name} i am ${this.age} years old. I am learning ${institute} and i am batch ${batch} student.`
    }

    displayResidence(): string {
        return `Phone: ${this.residence.phoneNumber}, Address: ${this.residence.address}`;
    }

    get fullName(): string {
        return `${this.name} ${this.f_name}`
    }
}

const stu1 = new Students("Aashir", "Mubeen Siddiqui", 18, "male", { phoneNumber: 123456789, address: "Karachi Pakistan" })
const stu2 = new Students("Shahzaib", "Aashir", 20, "male", { phoneNumber: 123456722, address: "Islamabad Pakistan" })

console.log(stu1)
console.log(stu1.academicData("SMIT", 15))
console.log(stu2)
console.log(stu2.fullName)