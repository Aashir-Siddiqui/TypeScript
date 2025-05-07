function greeter(greeting: string): (name: string) => string {
    return function (name: string): string {
        return `${greeting}, ${name}`
    }
}

const hello: (name: string) => string = greeter("Hello")

console.log(hello("Aashir"))


function outer(): string {
    let x = "I am from outer scope"

    function inner(): string {
        return x
    }

    return inner()
}

console.log(outer())


function counter(): {
    increment: () => number,
    getCount: () => number
} {
    let count = 0;

    return {
        increment: function (): number {
            count++;
            return count;
        },
        getCount: function (): number {
            return count;
        }
    };
}


const counter1 = counter()
const counter2 = counter()

console.log(counter1.increment())
console.log(counter1.increment())
console.log(counter1.increment())
console.log(counter2.increment())
console.log(counter1.increment())


function multipiler(factor: number): (num: number) => number {
    return (num: number) => num * factor
}

const double: (num: number) => number = multipiler(2)
const triple: (num: number) => number = multipiler(3)

console.log(double(4))
console.log(triple(4))


interface colleague {
    name: string;
    age: number;
    gender: string;
    greet: (city: string) => string
}

function createColleague(name: string, age: number, gender: string): colleague {

    const greetingColleague = `Hey i am ${name}`

    return {
        name,
        age,
        gender,
        greet: (city: string) => `${greetingColleague} and, I am ${age} years old and from ${city}`,
    }
}

const colleague1 = createColleague("Aashir", 18, "Male")

console.log(colleague1.greet("Karachi"))


interface Todolist {
    addTodo: (task: string) => string[];
    removeTodo: (index: number) => string[];
    getTodo: () => string[];
    clearTodo: () => string[];
}

function createTodo(): Todolist {
    let todos: string[] = []

    return {
        addTodo: (task: string): string[] => {
            if (!task) throw new Error("Task nahi hai")
            if (todos.includes(task)) throw new Error("Ye task hai")
            todos.push(task)
            return todos
        },
        removeTodo: (index: number): string[] => {
            if (index < 0 || index >= todos.length) throw new Error("Invalid index")
            todos.splice(index, 1)
            return todos
        },
        getTodo: (): string[] => {
            return todos
        },
        clearTodo: (): string[] => {
            todos = []
            return todos
        }
    }
}

const list1 = createTodo();
const list2 = createTodo();

console.log(list1.addTodo("Learn TypeScript"));
console.log(list1.addTodo("Create Todo"));
console.log(list2.addTodo("Practice Closure"));
console.log(list1.removeTodo(0));
console.log(list1.getTodo());
console.log(list2.getTodo());
console.log(list1.clearTodo())
console.log(list2.getTodo());