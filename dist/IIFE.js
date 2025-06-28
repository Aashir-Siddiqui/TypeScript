"use strict";
(function (name) {
    console.log(`Hello ${name}`);
})("Aashir");
const coun = (function () {
    let cnt = 0;
    return {
        inc: () => ++cnt,
        getC: () => cnt
    };
})();
console.log(coun.inc());
console.log(coun.inc());
console.log(coun.getC());
