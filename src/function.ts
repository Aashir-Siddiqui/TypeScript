const studentDetail = (name: string, age: number): string => {
    return `Student name is ${name.toUpperCase()} and ${name.toLowerCase()} age is ${age} years`
}

console.log(studentDetail("Aashir", 18))

const palindrome = (str: string): boolean => {
    let checkPalindrome = str.split("").reverse().join("")
    return checkPalindrome == str
}

console.log(palindrome("MOM"))

function printId(id: string | number) {
    console.log(`ID: ${id}`)
}
printId(101)
printId("ABC123")