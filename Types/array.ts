// using square brackets

const numbers:number[] = [1, 2, 3, 4, 5, 6]

const allSum:number = numbers.reduce((acc, nums) => acc + nums)
console.log(allSum)

const fnum:number[] = numbers.filter((x) => x >= 4)
console.log(fnum)


// Using Array<Type> (Generic Syntax)

const names: Array<string> = ["Aashir", "Ali", "Naveed"]

names.push("Saad")

console.log(names[3])


// using the Array constructor

const student:string[] = new Array("Mani", "Farzam", "Moiz")

const upperStudent:string[] = student.map((u) => u.toUpperCase())
console.log(upperStudent)


// using the Array.of method

const str:string[] = Array.of("Murtaza", "Ahmed")

str.unshift("Siddiqui")

console.log(str)


// Mixed Types (Union Types in Array)

const mixedArr: (string | number)[] = ["Hello", 2, "World", 4]

console.log(mixedArr)


// Type Safety

const numArr: number[] = [1, 2, 3]

// numbers[1] = "hello";  //Error: Type 'string' is not assignable to type 'number'

numArr[1] = 4

console.log(numArr)


// Readonly Arrays

const fruits: ReadonlyArray<string> = ["Apple", "Kiwi", "Peach"]

// fruits[1] = "banana"   //Error

fruits.forEach((fruits, index) => {
    console.log(index + ")" , fruits)
})

const readArr1: readonly number[] = [11, 12, 13]

// readArr.push(14)    // Error

console.log(readArr1.includes(12))