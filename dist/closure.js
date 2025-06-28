"use strict";
function greeter(greeting) {
    return function (name) {
        return `${greeting}, ${name}`;
    };
}
const hello = greeter("Hello");
console.log(hello("Aashir"));
function outer() {
    let x = "I am from outer scope";
    function inner() {
        return x;
    }
    return inner();
}
console.log(outer());
function counter() {
    let count = 0;
    return {
        increment: function () {
            count++;
            return count;
        },
        getCount: function () {
            return count;
        }
    };
}
const counter1 = counter();
const counter2 = counter();
console.log(counter1.increment());
console.log(counter1.increment());
console.log(counter1.increment());
console.log(counter2.increment());
console.log(counter1.increment());
function multipiler(factor) {
    return (num) => num * factor;
}
const double = multipiler(2);
const triple = multipiler(3);
console.log(double(4));
console.log(triple(4));
function createColleague(name, age, gender) {
    const greetingColleague = `Hey i am ${name}`;
    return {
        name,
        age,
        gender,
        greet: (city) => `${greetingColleague} and, I am ${age} years old and from ${city}`,
    };
}
const colleague1 = createColleague("Aashir", 18, "Male");
console.log(colleague1.greet("Karachi"));
function createTodo() {
    let todos = [];
    return {
        addTodo: (task) => {
            if (!task)
                throw new Error("Task nahi hai");
            if (todos.includes(task))
                throw new Error("Ye task hai");
            todos.push(task);
            return todos;
        },
        removeTodo: (index) => {
            if (index < 0 || index >= todos.length)
                throw new Error("Invalid index");
            todos.splice(index, 1);
            return todos;
        },
        getTodo: () => {
            return todos;
        },
        clearTodo: () => {
            todos = [];
            return todos;
        }
    };
}
const list1 = createTodo();
const list2 = createTodo();
console.log(list1.addTodo("Learn TypeScript"));
console.log(list1.addTodo("Create Todo"));
console.log(list2.addTodo("Practice Closure"));
console.log(list1.removeTodo(0));
console.log(list1.getTodo());
console.log(list2.getTodo());
console.log(list1.clearTodo());
console.log(list2.getTodo());
