import ExecutionContext from "@/components/topics/ExecutionContext/ExecutionContext";
import Hoisting from "@/components/topics/Hoisting/Hoisting";
import GenericTopicLayout from "@/components/topics/GenericTopicLayout";
import VarHoisting from "@/components/topics/Hoisting/VarHoisting";
import LetHoisting from "@/components/topics/Hoisting/LetHoisting";
import ConstHoisting from "@/components/topics/Hoisting/ConstHoisting";
import FunctionDeclarationHoisting from "@/components/topics/Hoisting/FunctionDeclarationHoisting";
import FunctionExpressionHoisting from "@/components/topics/Hoisting/FunctionExpressionHoisting";

export const topics = [

    {
        id:0,
        topic:"Execution Context",
        description:"Execution Context — Understand how JavaScript creates an environment to prepare and execute code.",
        difficulty:"Beginner",
        slug:"execution-context",
        component:ExecutionContext,
        code: `let name = "manpreet";
let age = 23;
console.log(name);
console.log(age);`,
        preview: {
            title:"Execution Context Overview",
            summary:"JavaScript creates a new execution context before running code. It allocates memory for variables and functions, then executes statements line by line.",
            snippet:`function demo() {
  let name = "manpreet";
  let age = 23;
  console.log(name, age);
}`,
            keyPoints:[
                "Creation phase allocates memory",
                "Variables are initialized with undefined",
                "Code executes in the current context"
            ]
        },
        conceptData: {
            title: "How JavaScript prepares a program",
            summary: "An execution context is the environment in which JavaScript runs code. Before any statement is executed, JavaScript creates the context, scans the current scope, and sets up memory for variables and functions.",
            cards: [
                {
                    title: "Creation Phase",
                    description: "JavaScript allocates memory for variables and functions before executing statements. This is where declarations are prepared and the environment is built."
                },
                {
                    title: "Execution Phase",
                    description: "The code runs line by line. Variables are assigned actual values, expressions are evaluated, and function calls move through the call stack."
                },
                {
                    title: "Call Stack",
                    description: "Each function call creates a new execution context and gets pushed to the stack. When a function finishes, it is popped and control returns to the previous context."
                }
            ],
            takeaways: [
                "Every script starts with a global execution context.",
                "Function calls create their own local contexts.",
                "Scope and memory are prepared before code execution begins."
            ]
        },
        variables:[
            {
                id:1,
                name:"name",
                memoryValue:'undefined',
                executionValue:"manpreet",
                consoleValue:"manpreet"
            },
            {
                id:2,
                name:'age',
                memoryValue:'undefined',
                executionValue:"23",
                consoleValue:"23"
            }
        ],
        steps:[
            {
                id:0,
                type:'memory',
                line:1
            },
            {
                id:1,
                type:'execution',
                variableId:1,
                line:1
            },
            {
                id:2,
                type:'execution',
                variableId:2,
                line:2
            },
            {
                id:3,
                type:'console',
                variableId:1,
                line:3

            },
            {
                id:4,
                type:'console',
                variableId:2,
                line:4
            }
        ]

    },
    {

        id:1,
        topic:"Hoisting",
        description:"Explore JavaScript hoisting through an interactive visualization. See how variable and function declarations are processed during the creation phase, and understand var, let, const, and the Temporal Dead Zone step by step",
        difficulty:"Beginner",
        slug:'hoisting',
        component:Hoisting,
        code: `console.log(message);
var message = "hello";

console.log(age);
let age = 24;

console.log(status);
const status = "ready";

console.log(greet());
function greet() {
  return "Hi from declaration";
}

const sayHello = function () {
  return "Hi from expression";
};
console.log(sayHello());`,
        preview: {
            title:"Hoisting in JavaScript",
            summary:"Hoisting is the behavior where declarations are prepared before code executes. That makes some values available earlier than their written position, while others stay in a restricted temporal zone.",
            snippet:`console.log(name); // undefined
var name = "Aman";

console.log(age); // ReferenceError
let age = 24;`,
            keyPoints:[
                "var is hoisted with undefined",
                "let and const are hoisted but TDZ blocked",
                "function declarations are ready before execution"
            ]
        },
        conceptData: {
            title: "Hoisting rules you should remember",
            summary: "During the creation phase, JavaScript scans the current scope and sets up declarations before executing code. That means the behavior of var, let, const, and function declarations is not the same.",
            cards: [
                {
                    title: "var",
                    description: "var is hoisted and initialized to undefined. It can be accessed before assignment, which is why its value is undefined until the code reaches the actual declaration."
                },
                {
                    title: "let / const",
                    description: "let and const are hoisted too, but they enter the Temporal Dead Zone until execution reaches their declaration. Accessing them earlier throws a ReferenceError."
                },
                {
                    title: "Function declarations",
                    description: "Function declarations are fully hoisted and can be called before they appear in code. Function expressions are not hoisted the same way, because they are assigned as variables."
                }
            ],
            takeaways: [
                "var => undefined until assignment",
                "let/const => TDZ prevents early access",
                "Function declaration => accessible before definition",
                "Function expression => depends on variable initialization"
            ]
        },
        subtopics: [
            {
                id: "var",
                title: "var",
                summary: "var is hoisted and initialized to undefined.",
                code: `console.log(name); // undefined
var name = "Aman";`,
                editor: {
                    title: "var hoisting demo",
                    language: "javascript"
                },
                visualization: {
                    title: "var timeline",
                    type: "memory"
                },
                preview: {
                    title: "var",
                    summary: "The variable exists in memory before assignment, so it reads as undefined.",
                    snippet: `console.log(name); // undefined\nvar name = "Aman";`,
                    keyPoints: ["Function-scoped", "Hoisted with undefined", "Available before assignment"]
                },
                conceptData: {
                    title: "var",
                    summary: "var is hoisted to the top of the function scope and initialized with undefined during the creation phase.",
                    cards: [
                        { title: "Scope", description: "var is function-scoped, so it is visible throughout the function." },
                        { title: "Initialization", description: "During creation, it is assigned undefined before code runs." },
                        { title: "Behavior", description: "This is why reading var before assignment returns undefined." }
                    ],
                    takeaways: ["function-scoped", "undefined before assignment", "accessible before declaration"]
                },
                variables: [
                    {
                        id: 1,
                        name: "name",
                        memoryValue: "undefined",
                        executionValue: "Aman",
                        consoleValue: "undefined"
                    }
                ],
                steps: [
                    { id: 0, type: "memory", line: 1, variableId: 1, description: "var name is hoisted and assigned undefined in memory." },
                    { id: 1, type: "execution", line: 2, variableId: 1, description: "The assignment happens during execution." },
                    { id: 2, type: "console", line: 3, variableId: 1, description: "Logging before assignment prints undefined." }
                ]
            },
            {
                id: "let",
                title: "let",
                summary: "let is hoisted, but remains in the Temporal Dead Zone until initialization.",
                code: `console.log(age); // ReferenceError
let age = 24;`,
                editor: {
                    title: "let hoisting demo",
                    language: "javascript"
                },
                visualization: {
                    title: "let timeline",
                    type: "memory"
                },
                preview: {
                    title: "let",
                    summary: "let is hoisted, but access before declaration is blocked by the Temporal Dead Zone.",
                    snippet: `console.log(age); // ReferenceError\nlet age = 24;`,
                    keyPoints: ["Block-scoped", "TDZ blocked", "Mutable after declaration"]
                },
                conceptData: {
                    title: "let",
                    summary: "let is hoisted but not initialized in the same way as var. It stays in the Temporal Dead Zone until execution reaches the declaration.",
                    cards: [
                        { title: "Scope", description: "let is block-scoped and is limited to the current block." },
                        { title: "TDZ", description: "It exists in memory but cannot be accessed before initialization." },
                        { title: "Result", description: "Trying to read it earlier throws a ReferenceError." }
                    ],
                    takeaways: ["block-scoped", "TDZ prevents early access", "safe after declaration"]
                },
                variables: [
                    {
                        id: 1,
                        name: "age",
                        memoryValue: "uninitialized (TDZ)",
                        executionValue: "24",
                        consoleValue: "ReferenceError"
                    }
                ],
                steps: [
                    { id: 0, type: "memory", line: 1, variableId: 1, description: "let age is hoisted but remains in TDZ." },
                    { id: 1, type: "console", line: 2, variableId: 1, description: "Access before initialization throws ReferenceError." },
                    { id: 2, type: "execution", line: 3, variableId: 1, description: "After declaration, age is assigned the value 24." }
                ]
            },
            {
                id: "const",
                title: "const",
                summary: "const follows the same hoisting pattern as let, but it must be initialized immediately.",
                code: `console.log(status); // ReferenceError
const status = "ready";`,
                editor: {
                    title: "const hoisting demo",
                    language: "javascript"
                },
                visualization: {
                    title: "const timeline",
                    type: "memory"
                },
                preview: {
                    title: "const",
                    summary: "const is hoisted into the TDZ and cannot be accessed before measurement or assignment.",
                    snippet: `console.log(status); // ReferenceError\nconst status = "ready";`,
                    keyPoints: ["Block-scoped", "Must be initialized", "TDZ behavior applies"]
                },
                conceptData: {
                    title: "const",
                    summary: "const is hoisted, but access is blocked until the declaration runs. It also requires an immediate value.",
                    cards: [
                        { title: "Scope", description: "const is block-scoped and stays inside its current block." },
                        { title: "Initialization", description: "It must be assigned at declaration time." },
                        { title: "Result", description: "Using it before assignment causes a ReferenceError." }
                    ],
                    takeaways: ["block-scoped", "must initialize immediately", "still follows TDZ"]
                },
                variables: [
                    {
                        id: 1,
                        name: "status",
                        memoryValue: "uninitialized (TDZ)",
                        executionValue: "ready",
                        consoleValue: "ReferenceError"
                    }
                ],
                steps: [
                    { id: 0, type: "memory", line: 1, variableId: 1, description: "const status is hoisted into TDZ." },
                    { id: 1, type: "console", line: 2, variableId: 1, description: "Access before initialization throws a ReferenceError." },
                    { id: 2, type: "execution", line: 3, variableId: 1, description: "status receives the value ready after declaration." }
                ]
            },
            {
                id: "function-declaration",
                title: "Function Declaration",
                summary: "Function declarations are completely hoisted and are ready before execution begins.",
                code: `console.log(greet());
function greet() {
  return "Hi";
}`,
                editor: {
                    title: "function declaration demo",
                    language: "javascript"
                },
                visualization: {
                    title: "function declaration timeline",
                    type: "execution"
                },
                preview: {
                    title: "Function Declaration",
                    summary: "A function declaration is available before its source position because the full function is stored in memory early.",
                    snippet: `console.log(greet());\nfunction greet() {\n  return "Hi";\n}`,
                    keyPoints: ["Full function hoisting", "Callable before declaration", "Ready before execution"]
                },
                conceptData: {
                    title: "Function Declaration",
                    summary: "A function declaration is hoisted as a complete function value, so it can be invoked before the declaration is reached.",
                    cards: [
                        { title: "Storage", description: "The complete function object is created in memory during the creation phase." },
                        { title: "Calling", description: "This means it can be executed before its position in code." },
                        { title: "Difference", description: "Unlike function expressions, declarations are ready immediately." }
                    ],
                    takeaways: ["fully hoisted", "callable before definition", "function object exists early"]
                },
                variables: [
                    {
                        id: 1,
                        name: "greet",
                        memoryValue: "function greet() { return \"Hi\"; }",
                        executionValue: "function greet() { return \"Hi\"; }",
                        consoleValue: "Hi"
                    }
                ],
                steps: [
                    { id: 0, type: "memory", line: 1, variableId: 1, description: "The function declaration is loaded into memory during creation." },
                    { id: 1, type: "execution", line: 2, variableId: 1, description: "The function call executes normally." },
                    { id: 2, type: "console", line: 3, variableId: 1, description: "The function returns Hi, which is printed to the console." }
                ]
            },
            {
                id: "function-expression",
                title: "Function Expression",
                summary: "Function expressions are assigned to variables, so only the variable is hoisted, not the function value.",
                code: `const sayHello = function () {
  return "Hi";
};
console.log(sayHello());`,
                editor: {
                    title: "function expression demo",
                    language: "javascript"
                },
                visualization: {
                    title: "function expression timeline",
                    type: "execution"
                },
                preview: {
                    title: "Function Expression",
                    summary: "The variable is hoisted, but the function body is not available until the assignment runs.",
                    snippet: `const sayHello = function () {\n  return "Hi";\n};\nconsole.log(sayHello());`,
                    keyPoints: ["Variable hoist", "Value created later", "Call after assignment"]
                },
                conceptData: {
                    title: "Function Expression",
                    summary: "A function expression behaves like a variable assignment. The variable is allocated early, but the function is only assigned once execution reaches that line.",
                    cards: [
                        { title: "Variable", description: "The binding itself is hoisted, but not the function value." },
                        { title: "Timing", description: "The expression is assigned only when the code reaches that statement." },
                        { title: "Access", description: "Calling it before assignment leads to an error or undefined behavior." }
                    ],
                    takeaways: ["variable hoisted", "function assigned later", "call only after initialization"]
                },
                variables: [
                    {
                        id: 1,
                        name: "sayHello",
                        memoryValue: "uninitialized (TDZ)",
                        executionValue: "function () { return \"Hi\"; }",
                        consoleValue: "Hi"
                    }
                ],
                steps: [
                    { id: 0, type: "memory", line: 1, variableId: 1, description: "sayHello is created as a binding, but no function value is assigned yet." },
                    { id: 1, type: "execution", line: 2, variableId: 1, description: "The function expression is assigned to sayHello." },
                    { id: 2, type: "console", line: 3, variableId: 1, description: "The function is called and returns Hi." }
                ]
            }
        ],
        variables:[
            {
                id:1,
                name:"message",
                memoryValue:"undefined",
                executionValue:"hello",
                consoleValue:"undefined"
            },
            {
                id:2,
                name:"age",
                memoryValue:"uninitialized (TDZ)",
                executionValue:"24",
                consoleValue:"ReferenceError"
            },
            {
                id:3,
                name:"status",
                memoryValue:"uninitialized (TDZ)",
                executionValue:"ready",
                consoleValue:"ReferenceError"
            },
            {
                id:4,
                name:"greet",
                memoryValue:"function greet() { return \"Hi from declaration\"; }",
                executionValue:"function greet() { return \"Hi from declaration\"; }",
                consoleValue:"Hi from declaration"
            },
            {
                id:5,
                name:"sayHello",
                memoryValue:"uninitialized(TDZ)",
                executionValue:"function () { return \"Hi from expression\"; }",
                consoleValue:"Hi from expression"
            }
        ],
        steps:[
            {
                id:0,
                type:"memory",
                line:1,
                variableId:1,
                description:"var message is hoisted and initialized as undefined in the memory phase."
            },
            {
                id:1,
                type:"execution",
                line:2,
                variableId:1,
                description:"JavaScript assigns message = \"hello\" during execution."
            },
            {
                id:2,
                type:"console",
                line:3,
                variableId:1,
                description:"Logging message before assignment prints undefined."
            },
            {
                id:3,
                type:"memory",
                line:5,
                variableId:2,
                description:"let age is hoisted but remains in the Temporal Dead Zone until declaration is reached."
            },
            {
                id:4,
                type:"console",
                line:6,
                variableId:2,
                description:"Accessing age before initialization throws a ReferenceError."
            },
            {
                id:5,
                type:"execution",
                line:7,
                variableId:2,
                description:"age is assigned the value 24 after the declaration statement executes."
            },
            {
                id:6,
                type:"memory",
                line:9,
                variableId:3,
                description:"const status is hoisted and also enters the TDZ until initialization."
            },
            {
                id:7,
                type:"console",
                line:10,
                variableId:3,
                description:"Using status before assignment triggers a ReferenceError."
            },
            {
                id:8,
                type:"execution",
                line:11,
                variableId:3,
                description:"status is assigned the value \"ready\"."
            },
            {
                id:9,
                type:"memory",
                line:13,
                variableId:4,
                description:"Function declaration greet is fully hoisted and stored in memory before execution begins."
            },
            {
                id:10,
                type:"console",
                line:13,
                variableId:4,
                description:"Calling greet() works even before its function body appears in the source."
            },
            {
                id:11,
                type:"memory",
                line:18,
                variableId:5,
                description:"Function expressions are not hoisted as ready-to-call functions; they are initialized as variables only after assignment."
            },
            {
                id:12,
                type:"execution",
                line:18,
                variableId:5,
                description:"sayHello is assigned an anonymous function expression."
            },
            {
                id:13,
                type:"console",
                line:21,
                variableId:5,
                description:"The function expression is invoked and returns Hi from expression."
            }
        ]
    },
    {
        id:2,
        topic:"Closure",
        description:"Explore JavaScript closures through an interactive visualization. See how lexical scope allows inner functions to retain access to outer variables, preserve state, and access their surrounding environment even after execution ends.",
        difficulty:"Intermediate",
        slug:"closure",
        component: GenericTopicLayout,
        code: `function counter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}
const next = counter();
console.log(next());`,
        preview: {
            title:"Closure Overview",
            summary:"A closure keeps access to an outer function's variables even after that outer function has finished running.",
            snippet:`function counter() {
  let count = 0;
  return () => ++count;
}`,
            keyPoints:["Lexical scope", "Outer variables retained", "State persists across calls"]
        },
        conceptData: {
            title:"Closure basics",
            summary:"Closures let inner functions remember variables from their parent scope even after the parent function returns.",
            cards:[
                { title:"Outer scope", description:"The parent function defines values that remain available to the inner function." },
                { title:"State retention", description:"The closure keeps the latest values alive between calls." },
                { title:"Use case", description:"Closures are useful for private state and factory functions." }
            ],
            takeaways:["variables survive return", "state can persist", "common in data privacy patterns"]
        },
        variables:[],
        steps:[]
    },
    {
        id:3,
        topic:"Callback",
        description:"Explore JavaScript callbacks through an interactive visualization. Watch how functions are passed as arguments and executed later, revealing how callback-based programming controls asynchronous tasks and execution flow.",
        difficulty:"Beginner",
        slug:"callback",
        component: GenericTopicLayout,
        code: `function greet(name, callback) {
  callback(name);
}

greet("Aman", (value) => {
  console.log("Hello " + value);
});`,
        preview: {
            title:"Callback pattern",
            summary:"A callback is a function passed into another function and invoked later when a condition or task completes.",
            snippet:`function greet(name, callback) {
  callback(name);
}`,
            keyPoints:["Functions as arguments", "Executed later", "Common in async code"]
        },
        conceptData: {
            title:"Callbacks in practice",
            summary:"Callbacks are used to continue execution after some event, task, or condition is satisfied.",
            cards:[
                { title:"Function argument", description:"A callback is passed as a parameter instead of being executed immediately." },
                { title:"Timing", description:"It runs when the host function decides to invoke it." },
                { title:"Common use", description:"Callbacks are often seen in events, arrays, and asynchronous APIs." }
            ],
            takeaways:["passed as function argument", "runs later", "drives event-driven logic"]
        },
        variables:[],
        steps:[]
    },
    {
        id:4,
        topic:"this",
        description:"Master JavaScript this, call(), apply(), and bind() through an interactive visualization. See how function context changes dynamically and understand how each method controls the value of this during function execution.",
        difficulty:"Intermediate",
        slug:'this',
        component: GenericTopicLayout,
        code: `const user = {
  name: "Aman",
  greet() {
    console.log(this.name);
  }
};

user.greet();
const fn = user.greet.bind({ name: "Raj" });
fn();`,
        preview: {
            title:"The this keyword",
            summary:"this depends on how a function is called, not where it is defined.",
            snippet:`const obj = {
  name: "Aman",
  greet() {
    console.log(this.name);
  }
};`,
            keyPoints:["Context changes with call site", "bind sets exact context", "call/apply invoke with custom this"]
        },
        conceptData: {
            title:"Understanding this",
            summary:"The value of this is determined by the call pattern: method call, function call, constructor, or explicit binding.",
            cards:[
                { title:"Method call", description:"this points to the object on the left side of the dot." },
                { title:"Explicit binding", description:"call(), apply(), and bind() override the default context." },
                { title:"Regular function", description:"Inside a plain function, this usually refers to the global object or undefined in strict mode." }
            ],
            takeaways:["context depends on invocation", "bind fixes the object", "call/apply invoke immediately"]
        },
        variables:[],
        steps:[]
    },
    {
        id:5,
        topic:"Promises",
        description:"Explore JavaScript Promises through an interactive visualization. Watch asynchronous operations move through pending, fulfilled, and rejected states while learning how .then(), .catch(), and .finally() control the flow.",
        difficulty:"Intermediate",
        slug:'promises',
        component: GenericTopicLayout,
        code: `const promise = new Promise((resolve, reject) => {
  resolve("done");
});

promise.then((value) => console.log(value));`,
        preview: {
            title:"Promises",
            summary:"A Promise represents an eventual result: it can be pending, fulfilled, or rejected.",
            snippet:`const promise = new Promise((resolve, reject) => {
  resolve("done");
});`,
            keyPoints:["Pending to fulfilled", "then handles success", "catch handles errors"]
        },
        conceptData: {
            title:"Promise lifecycle",
            summary:"Promises model asynchronous work by transitioning through different states and letting you react when they settle.",
            cards:[
                { title:"Pending", description:"The async operation has started but not finished yet." },
                { title:"Fulfilled", description:"The operation succeeded and returns a resolved value." },
                { title:"Rejected", description:"The operation failed and an error is available." }
            ],
            takeaways:["async result is tracked", "then/catch react to state", "finally runs regardless"]
        },
        variables:[],
        steps:[]
    },
    {
        id:6,
        topic:"async/await",
        description:"Explore JavaScript async/await through an interactive visualization. Watch asynchronous operations pause and resume execution as Promises settle, and understand how await, try/catch, and error handling shape the async flow.",
        difficulty:"Intermediate",
        slug:'async-await',
        component: GenericTopicLayout,
        code: `async function loadUser() {
  const user = await Promise.resolve({ name: "Aman" });
  return user.name;
}

loadUser().then(console.log);`,
        preview: {
            title:"async/await",
            summary:"async/await makes Promise-based code easier to read and write by letting you pause execution in an async function.",
            snippet:`async function loadUser() {
  return await Promise.resolve("Aman");
}`,
            keyPoints:["async function", "await waits for result", "cleaner error handling"]
        },
        conceptData: {
            title:"async/await flow",
            summary:"The await keyword pauses an async function until a Promise settles, making async logic look more like synchronous code.",
            cards:[
                { title:"Async", description:"An async function always returns a Promise." },
                { title:"Await", description:"await pauses the function until the Promise resolves." },
                { title:"Error handling", description:"try/catch works naturally with async functions." }
            ],
            takeaways:["reads like sync code", "await resolves Promise values", "try/catch handles failures"]
        },
        variables:[],
        steps:[]
    },
    {
        id:7,
        topic:"Event Loop",
        description:"Visualize the JavaScript Event Loop in action. Follow tasks as they move between the Call Stack, Web APIs, Microtask Queue, and Callback Queue to understand how JavaScript handles asynchronous execution step by step.",
        difficulty:"Advanced",
        slug:"event-loop",
        component: GenericTopicLayout,
        code: `console.log("sync");
setTimeout(() => console.log("task"), 0);
Promise.resolve().then(() => console.log("microtask"));`,
        preview: {
            title:"Event loop",
            summary:"The event loop coordinates the call stack, tasks, and microtasks so JS can handle async work without blocking execution.",
            snippet:`setTimeout(() => console.log("task"), 0);
Promise.resolve().then(() => console.log("microtask"));`,
            keyPoints:["Call stack", "Microtask queue", "Macrotask queue"]
        },
        conceptData: {
            title:"How the event loop works",
            summary:"JavaScript runs one task at a time on the call stack, while microtasks and macrotasks wait in queues to be processed next.",
            cards:[
                { title:"Call stack", description:"The current code execution happens here synchronously." },
                { title:"Microtasks", description:"Promise jobs usually run before the next task." },
                { title:"Macrotasks", description:"setTimeout and other events are processed later." }
            ],
            takeaways:["sync code runs first", "microtasks come before next task", "queues handle async work"]
        },
        variables:[],
        steps:[]
    },
    {
        id:8,
        topic:"Functions",
        description:"Explore JavaScript functions through an interactive visualization. See how function declarations, parameters, arguments, return values, and function calls work together to control reusable blocks of code and execution flow.",
        difficulty:"Beginner",
        slug:'functions',
        component: GenericTopicLayout,
        code: `function add(a, b) {
  return a + b;
}
console.log(add(2, 3));`,
        preview: {
            title:"Functions",
            summary:"Functions let you group reusable logic and execute it by passing arguments and receiving a return value.",
            snippet:`function add(a, b) {
  return a + b;
}`,
            keyPoints:["Parameters", "Arguments", "Return values"]
        },
        conceptData: {
            title:"Function fundamentals",
            summary:"Functions create reusable blocks of code that can accept inputs, perform work, and return output.",
            cards:[
                { title:"Declaration", description:"A function can be declared once and called many times." },
                { title:"Arguments", description:"Values passed into parameters control runtime behavior." },
                { title:"Return", description:"A function can send a result back to the caller." }
            ],
            takeaways:["code reuse", "inputs and outputs", "calls can happen many times"]
        },
        variables:[],
        steps:[]
    },
    {
        id:9,
        topic:"Shallow copy vs Deep copy",
        description:"Explore JavaScript shallow and deep copying through an interactive visualization. See how object references are shared or duplicated, and understand how nested objects behave when you modify copied data.",
        difficulty:"Intermediate",
        slug:'shallow-deep-copy',
        component: GenericTopicLayout,
        code: `const person = { name: "Aman", profile: { city: "Delhi" } };
const shallow = { ...person };
const deep = JSON.parse(JSON.stringify(person));`,
        preview: {
            title:"Shallow vs deep copy",
            summary:"A shallow copy duplicates the top level only, while a deep copy duplicates nested objects as well.",
            snippet:`const shallow = { ...person };
const deep = JSON.parse(JSON.stringify(person));`,
            keyPoints:["Top-level only", "Nested references preserved", "Deep copy duplicates nested data"]
        },
        conceptData: {
            title:"Copying objects",
            summary:"Shallow copies duplicate the outer structure, but nested objects still share references. Deep copies duplicate everything recursively.",
            cards:[
                { title:"Shallow", description:"Only the first level is copied." },
                { title:"Deep", description:"Nested objects are cloned too." },
                { title:"Risk", description:"Avoid mutating shared nested state without a deep copy." }
            ],
            takeaways:["top-level copy is shallow", "nested data may still be shared", "deep copy prevents shared nested mutations"]
        },
        variables:[],
        steps:[]
    },
    {
        id:10,
        topic:"DOM Event Propagation",
        description:"Explore JavaScript event propagation through an interactive DOM visualization. Follow events through capturing and bubbling phases, then see how event delegation uses propagation to efficiently handle interactions across nested elements.",
        difficulty:"Advanced",
        slug:'DOM-event-propagation',
        component: GenericTopicLayout,
        code: `document.querySelector("button").addEventListener("click", () => {
  console.log("button clicked");
});`,
        preview: {
            title:"Event propagation",
            summary:"Events move through capturing and bubbling phases, allowing parent and child elements to respond in a predictable order.",
            snippet:`parent.addEventListener("click", handler, true);\nchild.addEventListener("click", handler);`,
            keyPoints:["Capturing phase", "Target phase", "Bubbling phase"]
        },
        conceptData: {
            title:"Propagation phases",
            summary:"DOM events travel down the tree in capture mode and then up in bubble mode, which is the basis for delegation patterns.",
            cards:[
                { title:"Capture", description:"The event is observed from the root down to the target." },
                { title:"Target", description:"The actual element receiving the event is reached." },
                { title:"Bubble", description:"The event climbs back up the DOM tree to ancestors." }
            ],
            takeaways:["capture goes down", "bubble goes up", "delegation simplifies many handlers"]
        },
        variables:[],
        steps:[]
    },
    {
        id:11,
        topic:"Debouncing",
        description:"Explore JavaScript debouncing through an interactive visualization. Watch rapid events wait for a pause before triggering a function, and understand how debouncing reduces unnecessary executions in search, input, and resize operations.",
        difficulty:"Intermediate",
        slug:"debouncing",
        component: GenericTopicLayout,
        code: `function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}`,
        preview: {
            title:"Debouncing",
            summary:"Debouncing delays work until a burst of events stops, which reduces unnecessary repeated calls.",
            snippet:`const onInput = debounce(search, 400);`,
            keyPoints:["Waits for pause", "Reduces repeated calls", "Useful for search and resize"]
        },
        conceptData: {
            title:"Debounce behavior",
            summary:"Debouncing resets the timer whenever events continue happening, so the action runs only after inactivity.",
            cards:[
                { title:"Trigger window", description:"The timer resets with every new event." },
                { title:"Execution", description:"The callback fires only after the quiet period ends." },
                { title:"Use case", description:"Helpful for typing, live search, and window resize handling." }
            ],
            takeaways:["delayed until pause", "great for frequent input", "avoids repeated execution"]
        },
        variables:[],
        steps:[]
    },
    {
        id:12,
        topic:"Throttling",
        description:"Visualize JavaScript throttling in action and see how frequent events are limited to a controlled execution rate. Understand how throttling improves performance for scroll, mouse movement, and continuous event handling.",
        difficulty:"Intermediate",
        slug:"throttling",
        component: GenericTopicLayout,
        code: `function throttle(fn, delay) {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= delay) {
      last = now;
      fn(...args);
    }
  };
}`,
        preview: {
            title:"Throttling",
            summary:"Throttling limits how often a function can run, even if the event continues firing frequently.",
            snippet:`const onScroll = throttle(handleScroll, 200);`,
            keyPoints:["Limits execution rate", "Runs at intervals", "Useful for scroll and mousemove"]
        },
        conceptData: {
            title:"Throttle behavior",
            summary:"A throttled function runs at most once within a fixed time window, even if events arrive continuously.",
            cards:[
                { title:"Rate limit", description:"Execution happens every configured interval." },
                { title:"Timing", description:"Events are dropped or ignored until the next allowed window." },
                { title:"Use case", description:"Useful in heavy scroll and animation handlers." }
            ],
            takeaways:["fixed time intervals", "less frequent execution", "good for performance-sensitive events"]
        },
        variables:[],
        steps:[]
    },
    {
        id:13,
        topic:"Destructuring",
        description:"Explore JavaScript destructuring through an interactive visualization. See how values are extracted from arrays and objects into variables, and understand default values, renaming, nested destructuring, and rest patterns step by step.",
        difficulty:"Beginner",
        slug:"destructuring",
        component: GenericTopicLayout,
        code: `const user = { name: "Aman", age: 23 };
const { name, age } = user;`,
        preview: {
            title:"Destructuring",
            summary:"Destructuring reads values from arrays or objects into variables with a cleaner syntax.",
            snippet:`const { name, age } = user;\nconst [first, second] = arr;`,
            keyPoints:["Extract values", "Clean syntax", "Supports defaults and renaming"]
        },
        conceptData: {
            title:"Destructuring basics",
            summary:"Destructuring simplifies value extraction by matching object keys or array positions to variable names.",
            cards:[
                { title:"Object", description:"You can pull values by their property names." },
                { title:"Array", description:"Array destructuring uses position-based order." },
                { title:"Defaults", description:"You can provide fallback values when properties are missing." }
            ],
            takeaways:["cleaner extraction", "works for objects and arrays", "supports defaults and renaming"]
        },
        variables:[],
        steps:[]
    },
    {
        id:14,
        topic:"Spread and Rest operator",
        description:"Explore JavaScript spread and rest operators through an interactive visualization. See how ... expands arrays and objects, combines or copies data, and collects multiple values into a single variable or function parameter.",
        difficulty:"Beginner",
        slug:'spread-rest-operator',
        component: GenericTopicLayout,
        code: `const nums = [1, 2, 3];
const copy = [...nums, 4];
const sum = (...values) => values.reduce((a, b) => a + b, 0);`,
        preview: {
            title:"Spread and rest",
            summary:"The spread operator expands values, while the rest operator collects multiple values into one parameter.",
            snippet:`const arr = [...nums, 4];\nconst sum = (...values) => values.reduce((a, b) => a + b, 0);`,
            keyPoints:["Expand iterable values", "Collect remaining values", "Useful in arrays and functions"]
        },
        conceptData: {
            title:"Spread and rest",
            summary:"... can either spread items into a new collection or collect remaining arguments into a single array parameter.",
            cards:[
                { title:"Spread", description:"Expand values from arrays or objects into another structure." },
                { title:"Rest", description:"Gather remaining arguments into a single array." },
                { title:"Common use", description:"Used widely in cloning, merging, and variadic functions." }
            ],
            takeaways:["expand with spread", "collect with rest", "works in arrays and function params"]
        },
        variables:[],
        steps:[]
    },
    {
        id:15,
        topic:"import/export",
        description:"Explore JavaScript modules through an interactive visualization. See how export and import share code between files, understand named and default exports, and visualize how modules organize large applications into reusable pieces.",
        difficulty:"Beginner",
        slug:'import-export',
        component: GenericTopicLayout,
        code: `export const value = 42;
import { value } from './math.js';
console.log(value);`,
        preview: {
            title:"Modules",
            summary:"import and export help share code across files and keep projects organized into modules.",
            snippet:`export const value = 42;\nimport { value } from './math.js';`,
            keyPoints:["Share reusable code", "Named and default exports", "Keeps modules organized"]
        },
        conceptData: {
            title:"Modules in JavaScript",
            summary:"Modules let code live in separate files and selectively expose or consume functionality.",
            cards:[
                { title:"export", description:"Declare which values can be used outside the file." },
                { title:"import", description:"Bring values into another module." },
                { title:"Structure", description:"Helps organize large projects into clear boundaries." }
            ],
            takeaways:["split code into files", "named/default export styles", "nice for scaling apps"]
        },
        variables:[],
        steps:[]
    },
    {
        id:16,
        topic:"Array Methods",
        description:"Explore JavaScript array methods through interactive visualizations. Watch elements move, transform, filter, search, and combine as you master map(), filter(), reduce(), find(), some(), every(), sort(), and more.",
        difficulty:"Beginner",
        slug:"array-methods",
        component: GenericTopicLayout,
        code: `const nums = [1, 2, 3, 4];
const doubled = nums.map((n) => n * 2);
const even = nums.filter((n) => n % 2 === 0);`,
        preview: {
            title:"Array methods",
            summary:"Array methods transform and inspect collections with concise reusable functions.",
            snippet:`const doubled = nums.map((n) => n * 2);\nconst filtered = nums.filter(Boolean);`,
            keyPoints:["map transforms values", "filter keeps matching items", "reduce combines values"]
        },
        conceptData: {
            title:"Working with arrays",
            summary:"JavaScript array helpers let you transform, filter, search, and reduce data without writing complex loops.",
            cards:[
                { title:"map", description:"Creates a transformed array from existing values." },
                { title:"filter", description:"Keeps only elements that match a condition." },
                { title:"reduce", description:"Combines values into a single result." }
            ],
            takeaways:["transform collections", "simplify iteration", "reduce complexity in code"]
        },
        variables:[],
        steps:[]
    },
    {
        id:17,
        topic:"Scope Chain",
        description:"Explore the JavaScript scope chain through an interactive visualization. Follow how variables are searched through nested lexical scopes, from the current function to its outer environments, and understand how JavaScript resolves variable access step by step",
        difficulty:"Intermediate",
        slug:"scope-chain",
        component: GenericTopicLayout,
        code: `function outer() {
  let message = "outer";
  function inner() {
    console.log(message);
  }
  inner();
}`,
        preview: {
            title:"Scope chain",
            summary:"The scope chain is the lookup path JavaScript uses to find variables across nested lexical scopes.",
            snippet:`function outer() {\n  let message = "outer";\n  function inner() { console.log(message); }\n}`,
            keyPoints:["Inner can access outer", "Lookup walks outward", "Current scope checked first"]
        },
        conceptData: {
            title:"How lookup works",
            summary:"JavaScript searches from the current scope outward through parent scopes until it finds a match or reaches the global scope.",
            cards:[
                { title:"Current scope", description:"The engine checks the local scope first." },
                { title:"Parent scopes", description:"If not found, it keeps moving outward." },
                { title:"Global", description:"The global scope is the final lookup point in normal programs." }
            ],
            takeaways:["searches outward", "nested scopes can access parents", "global is last resort"]
        },
        variables:[],
        steps:[]
    },
    {
        id:18,
        topic:"Type Coercion",
        description:"Explore JavaScript type coercion through an interactive visualization. See how JavaScript automatically converts values between strings, numbers, and booleans during operations and comparisons, and understand the difference between implicit and explicit conversion.",
        difficulty:"Beginner",
        slug:'type-coercion',
        component: GenericTopicLayout,
        code: `console.log("5" + 2);
console.log("5" - 2);
console.log(Boolean("false"));`,
        preview: {
            title:"Type coercion",
            summary:"Type coercion is JavaScript’s automatic conversion between types during operations.",
            snippet:`console.log("5" + 2);\nconsole.log("5" - 2);`,
            keyPoints:["Implicit conversion", "String vs number behavior", "Use strict comparisons when needed"]
        },
        conceptData: {
            title:"Implicit conversion",
            summary:"JavaScript often converts values automatically so operators can do their work, but this can lead to surprising results.",
            cards:[
                { title:"Strings", description:"+ concatenates values into a string." },
                { title:"Numbers", description:"- and arithmetic try to convert values to numeric form." },
                { title:"Booleans", description:"Falsy and truthy checks also rely on coercion." }
            ],
            takeaways:["operators trigger conversion", "results can be surprising", "strict checks avoid confusion"]
        },
        variables:[],
        steps:[]
    },
    {
        id:19,
        topic:"Optional Chaining & Nullish Coalescing",
        description:"Explore JavaScript ?. and ?? through an interactive visualization. See how optional chaining safely accesses nested properties without errors, while nullish coalescing provides fallback values only when data is null or undefined.",
        difficulty:"Beginner",
        slug:"optional-chaining -&-nullish-coalescing",
        component: GenericTopicLayout,
        code: `const user = { profile: { name: "Aman" } };
console.log(user.profile?.name ?? "Guest");`,
        preview: {
            title:"Optional chaining and nullish coalescing",
            summary:"Optional chaining safely works with nested values, while nullish coalescing only falls back on null or undefined.",
            snippet:`const user = { profile: { name: "Aman" } };\nconsole.log(user.profile?.name ?? "Guest");`,
            keyPoints:["Safe nested access", "Only nullish fallback", "Protects against runtime errors"]
        },
        conceptData: {
            title:"Safe access patterns",
            summary:"These operators help handle missing values without writing lots of defensive checks.",
            cards:[
                { title:"Optional chaining", description:"Stops at nullish values instead of throwing." },
                { title:"Nullish coalescing", description:"Provides a fallback only when the value is null or undefined." },
                { title:"Use case", description:"Great for safe API or config access." }
            ],
            takeaways:["avoid unsafe nested access", "fallback only for nullish values", "cleaner defensive code"]
        },
        variables:[],
        steps:[]
    }

]