(function (name: string) {
    console.log(`Hello ${name}`)
})("Aashir");


const coun = (function (): {
    inc: () => number;
    getC: () => number
} {
    let cnt: number = 0
    return{
        inc: (): number => ++cnt,
        getC: (): number => cnt
    }
})();

console.log(coun.inc())
console.log(coun.inc())
console.log(coun.getC())