function gen<T>(value: T): T {
    return value
}
const gen1: number = gen<number>(12)
console.log(gen1)
const gen2: string = gen<string>("Hello")
console.log(gen2)


function getfirstElement<G>(arr: G[]): G {
    return arr[0]
}

const arr1: string = getfirstElement<string>(["Hello", "Hey"])
const arr2: number | string = getfirstElement<number | string>([1, 2, 3, "4", "5"])
console.log(arr1)
console.log(arr2)


function merge<A, B>(obj1: A, obj2: B): A & B {
    return { ...obj1, ...obj2 }
}

const result = merge({ name: "Aashir" }, { age: 18 })
console.log(result)


interface Pair<K, V> {
    key: K,
    value: V,
}

function createPair<K, V>(key: K, value: V): Pair<K, V> {
    return { key, value }
}

const p1 = createPair<string, number>("id", 1)
console.log(p1)


const abc = <T, U>(a: T, b: U): void => {
    console.log(a);
    console.log(b);
}

abc<number, string>(5, "Hello");
abc("Hey", 10);
