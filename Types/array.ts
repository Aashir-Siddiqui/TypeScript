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

for(let f of fruits){
    console.log(f)
}

const readArr1: readonly number[] = [11, 12, 13]

// readArr.push(14)    // Error

console.log(readArr1.includes(12))


// Array of Objects 


// Using Type[]

let users: {name: string; age: number}[] = [
    {name: "Aashir", age: 18},
    {name: "Ali", age: 19},
]

console.log(users)


// Using Array<Type> (Generic Syntax)

let products: Array<{id: string | number; name: string; price: number}> = [
    {id: 123, name: "Cake", price: 1500},
    {id: "xyz", name: "Pizza", price: 2500},
]

console.log(products)

function productsSum (products: {price: number}[]):number {

    const sum = products.reduce((total, item) => total + item.price, 0)

    return sum
}

console.log("Total products price is " + productsSum(products))


// Interface 

interface fru {
    name: string;
    price: number
}

let fru1: fru[] = [
    {name: "Kiwi", price: 400},
    {name: "Mango", price: 700},
]

console.log(fru1)


// Type Alias 

type veg = {
    isfreash?: boolean;
    name: string;
    price: number;
}

let veg1: veg[] = [
    {isfreash: true, name: "Onion", price: 200},
    {name: "Potato", price: 100},
]

console.log(veg1)