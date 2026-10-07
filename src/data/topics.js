import ExecutionContext from "@/components/topics/ExecutionContext/ExecutionContext";
import Hoisting from "@/components/topics/Hoisting/Hoisting";
import Closure from "@/components/topics/Closure/Closure";
import Callback from "@/components/topics/Callback/Callback";
import ThisTopic from "@/components/topics/ThisTopic/ThisTopic";
import FunctionsTopic from "@/components/topics/Functions/FunctionsTopic";
import CopyTopic from "@/components/topics/CopyTopic/CopyTopic";
import SpreadRestTopic from "@/components/topics/SpreadRestTopic/SpreadRestTopic";
import ImportExportTopic from "@/components/topics/ImportExportTopic/ImportExportTopic";
import TypeCoercionTopic from "@/components/topics/TypeCoercionTopic/TypeCoercionTopic";
import DOMPropagationTopic from "@/components/topics/DOMPropagationTopic/DOMPropagationTopic";
import DestructuringTopic from "@/components/topics/DestructuringTopic/DestructuringTopic";
import ScopeChainTopic from "@/components/topics/ScopeChainTopic/ScopeChainTopic";
import OptionalChainingTopic from "@/components/topics/OptionalChainingTopic/OptionalChainingTopic";
import ArrayMethodsTopic from "@/components/topics/ArrayMethodsTopic/ArrayMethodsTopic";
import PromisesTopic from "@/components/topics/PromisesTopic/PromisesTopic";
import AsyncAwaitTopic from "@/components/topics/AsyncAwaitTopic/AsyncAwaitTopic";
import EventLoopTopic from "@/components/topics/EventLoopTopic/EventLoopTopic";
import RateLimitingTopic from "@/components/topics/RateLimitingTopic/RateLimitingTopic";


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
                    snippet: `console.log(name); // undefined\nvar name = "Aman";\nconsole.log(name) \\Aman`,
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
                    { id: 0, type: "memory", line: 2, variableId: 1, description: "var name is hoisted and assigned undefined in memory." },
                    { id: 1, type: "console", line: 1, variableId: 1, output: "undefined", description: "Logging before assignment prints undefined." },
                    { id: 2, type: "execution", line: 2, variableId: 1, description: "The assignment happens during execution." }
                ]
            },
            {
                id: "let",
                title: "let",
                summary: "let is hoisted, but remains in the Temporal Dead Zone until initialization.",
                code: `console.log(age);
let age = 24;
console.log(age)`,
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
                    { id: 0, type: "memory", line: 6, variableId: 1, description: "let age is hoisted but remains in TDZ." },
                    { id: 1, type: "console", line: 4, variableId: 1, output: "ReferenceError", description: "The early access throws a ReferenceError" },
                    { id: 2, type: "execution", line: 6, variableId: 1, description: "After the caught error, age is initialized to 24." },
                    { id: 3, type: "console", line: 7, variableId: 1, output: "24", description: "After initialization, reading age returns 24." }
                ]
            },
            {
                id: "const",
                title: "const",
                summary: "const follows the same hoisting pattern as let, but it must be initialized immediately.",
                code: `console.log(status);
const status = "ready";
console.log(status);`,
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
                    { id: 0, type: "memory", line: 6, variableId: 1, description: "const status is hoisted into TDZ." },
                    { id: 1, type: "console", line: 4, variableId: 1, output: "ReferenceError", description: "The early access throws a ReferenceError" },
                    { id: 2, type: "execution", line: 6, variableId: 1, description: "After the caught error, status is initialized to ready." },
                    { id: 3, type: "console", line: 7, variableId: 1, output: "ready", description: "After initialization, reading status returns ready." }
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
                    { id: 0, type: "memory", line: 2, variableId: 1, description: "The function declaration is loaded into memory during creation." },
                    { id: 1, type: "execution", line: 1, variableId: 1, description: "The function call executes before the declaration appears." },
                    { id: 2, type: "console", line: 1, variableId: 1, output: "Hi", description: "The function returns Hi, which is printed to the console." }
                ]
            },
            {
                id: "function-expression",
                title: "Function Expression",
                summary: "Function expressions are assigned to variables, so only the variable is hoisted, not the function value.",
                code: `console.log(sayHello());
const sayHello = function () {
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
                    { id: 0, type: "console", line: 1, variableId: 1,output: "ReferenceError", description: "The early access throws a ReferenceError" },
                    { id: 1, type: "execution", line: 1, variableId: 1, description: "The function expression is assigned to sayHello." },
                    { id: 2, type: "console", line: 4, variableId: 1, output: "Hi", description: "The function is called and returns Hi." }
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
                component: Closure,
        code: `function counter() {
  let count = 0;
    return function increment() {
    count += 1;
    return count;
  };
}
const next = counter();
console.log(next());
console.log(next());`,
                visualization: {
                        title: "Closure lifecycle",
                        type: "closure"
                },
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
        variables: [
            {
                id: "counter",
                name: "counter",
                scope: "Global scope",
                valueByStep: Array(7).fill("function counter() { ... }")
            },
            {
                id: "next",
                name: "next",
                scope: "Global scope",
                valueByStep: [
                    "not initialized",
                    "not initialized",
                    "not initialized",
                    "not initialized",
                    "increment function",
                    "increment function",
                    "increment function"
                ]
            },
            {
                id: "count",
                name: "count",
                scope: "counter lexical environment",
                valueByStep: ["not created", "not created", "0", "0", "0", "1", "2"]
            }
        ],
        steps: [
            {
                id: 0,
                type: "memory",
                stage: "Global declaration",
                line: 1,
                closureRetained: false,
                description: "The global scope stores counter as a function declaration."
            },
            {
                id: 1,
                type: "execution",
                stage: "Counter call",
                line: 8,
                closureRetained: false,
                description: "Calling counter() creates a new function execution context."
            },
            {
                id: 2,
                type: "execution",
                stage: "Lexical environment",
                line: 2,
                closureRetained: false,
                description: "The counter call creates its local lexical environment and initializes count to 0."
            },
            {
                id: 3,
                type: "closure",
                stage: "Closure created",
                line: 3,
                closureRetained: true,
                description: "The returned increment function captures the count binding from the counter environment."
            },
            {
                id: 4,
                type: "execution",
                stage: "Outer call returns",
                line: 8,
                closureRetained: true,
                description: "counter() returns increment. Its call frame ends, but the captured lexical environment stays reachable through next."
            },
            {
                id: 5,
                type: "console",
                stage: "First closure call",
                line: 9,
                closureRetained: true,
                output: "1",
                description: "next() updates the captured count from 0 to 1 and returns it."
            },
            {
                id: 6,
                type: "console",
                stage: "Second closure call",
                line: 10,
                closureRetained: true,
                output: "2",
                description: "The same closure reuses its retained count, updates it to 2, and returns it."
            }
        ]
    },
    {
        id:3,
        topic:"Callback",
        description:"Explore JavaScript callbacks through an interactive visualization. Watch how functions are passed as arguments and executed later, revealing how callback-based programming controls asynchronous tasks and execution flow.",
        difficulty:"Beginner",
        slug:"callback",
        component: Callback,
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
                { title:"Common use", description:"Callbacks are often seen in events, arrays, and asynchronous APIs." },
                { title:"Callback hell", description:"Deeply nesting callbacks can create a hard-to-follow pyramid, complicate error handling, and make logic harder to reuse. Named functions, Promises, or async/await can flatten the flow." }
            ],
            takeaways:["passed as function argument", "runs when invoked by its caller", "nested callbacks can become hard to maintain"]
        },
        variables: [
            {
                id: "name",
                name: "name",
                scope: "greet()",
                valueByStep: ["not created", "Aman passed", "Aman", "Aman", "Aman", "Aman", "Aman"]
            },
            {
                id: "callback",
                name: "callback",
                scope: "greet()",
                valueByStep: ["not created", "inline function passed", "inline function", "inline function", "running", "completed", "completed"]
            },
            {
                id: "value",
                name: "value",
                scope: "callback body",
                valueByStep: ["not created", "not created", "not created", "not created", "Aman", "Aman", "Aman"]
            }
        ],
        steps: [
            {
                id: 0,
                type: "definition",
                stage: "Function declared",
                line: 1,
                description: "greet is defined with two parameters: a name and a callback function."
            },
            {
                id: 1,
                type: "call",
                stage: "greet called",
                line: 5,
                description: "The call supplies the string Aman and an inline arrow function."
            },
            {
                id: 2,
                type: "arguments",
                stage: "Parameters assigned",
                line: 5,
                description: "Inside greet, name receives Aman and callback receives the arrow function."
            },
            {
                id: 3,
                type: "invoke",
                stage: "Callback invoked",
                line: 2,
                description: "greet calls callback(name), passing Aman into the callback. This example runs synchronously."
            },
            {
                id: 4,
                type: "callback",
                stage: "Callback receives value",
                line: 6,
                description: "The callback parameter value now contains Aman."
            },
            {
                id: 5,
                type: "console",
                stage: "Output logged",
                line: 7,
                output: "Hello Aman",
                description: "The callback combines Hello with value and writes the result to the console."
            },
            {
                id: 6,
                type: "complete",
                stage: "Callback complete",
                line: 3,
                description: "The callback returns, then greet finishes."
            }
        ]
    },
    {
        id:4,
        topic:"this",
        description:"Master JavaScript this, call(), apply(), and bind() through an interactive visualization. See how function context changes dynamically and understand how each method controls the value of this during function execution.",
        difficulty:"Intermediate",
        slug:'this',
                component: ThisTopic,
                code: `"use strict";

const user = {
  name: "Aman",
  greet() {
        console.log(this ? this.name : "undefined");
  }
};

// Method call: this is the object before the dot.
user.greet();

// Detached call in strict mode: this is undefined.
const detachedGreet = user.greet;
detachedGreet();`,
                visualization: {
                        title: "How this is determined",
                        type: "this-binding"
                },
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
            title:"Call-site rules for this",
            summary:"In a regular function, this is determined by how the function is called. A method call supplies its owning object as the receiver; a detached strict-mode call has no receiver, so this is undefined.",
            cards:[
                                {
                                        title:"call()",
                                        description:"Invokes the function immediately with the provided this value. Any remaining arguments are passed one by one.",
                                        snippet:`function sayHi(greeting) {
    console.log(greeting + " " + this.name);
}

sayHi.call({ name: "Aman" }, "Hi");`
                                },
                                {
                                        title:"apply()",
                                        description:"Invokes the function immediately with the provided this value. Its arguments are supplied together in an array-like value.",
                                        snippet:`function sayHi(greeting) {
    console.log(greeting + " " + this.name);
}

sayHi.apply({ name: "Aman" }, ["Hi"]);`
                                },
                                {
                                        title:"bind()",
                                        description:"Returns a new function with this fixed to the provided value. It does not invoke the function until that new function is called.",
                                        snippet:`function sayHi(greeting) {
    console.log(greeting + " " + this.name);
}

const greetAman = sayHi.bind({ name: "Aman" });
greetAman("Hi");`
                                }
            ],
            takeaways:["method calls take this from the receiver", "strict detached calls have undefined this", "call/apply invoke now; bind returns a function"]
        },
        variables: [
            {
                id: "this",
                name: "this",
                valueByStep: ["user", "undefined (strict mode)"]
            },
            {
                id: "receiver",
                name: "receiver",
                valueByStep: ["user object", "none"]
            }
        ],
        steps: [
            {
                id: 0,
                type: "method-call",
                stage: "Method call",
                line: 11,
                description: "user.greet() is called as a method, so the object before the dot becomes this.",
                receiver: "user",
                thisValue: "user",
                output: "Aman"
            },
            {
                id: 1,
                type: "plain-call",
                stage: "Detached function call",
                line: 15,
                description: "detachedGreet() has no receiver. Because this code is strict, this is undefined.",
                receiver: "none",
                thisValue: "undefined (strict mode)",
                output: "undefined"
            }
        ]
    },
    {
        id:5,
        topic:"Promises",
        description:"Explore JavaScript Promises through an interactive visualization. Watch asynchronous operations move through pending, fulfilled, and rejected states while learning how .then(), .catch(), and .finally() control the flow.",
        difficulty:"Intermediate",
        slug:'promises',
        component: PromisesTopic,
        code: `const promise = new Promise((resolve) => {
      resolve("done");
    });

    promise.then((value) => console.log(value));`,
        visualization: {
            title:"Basic Promise lifecycle",
            type:"promise-lifecycle"
        },
        preview: {
            title:"Promises",
            summary:"A Promise represents an eventual result: it can be pending, fulfilled, or rejected.",
            snippet:`const promise = new Promise((resolve, reject) => {
  resolve("done");
});`,
            keyPoints:["Pending to fulfilled", "then handles success", "catch handles errors"]
        },
        conceptData: {
            title:"Promise methods",
            summary:"Promises represent results that may settle in the future. Chain methods transform or handle one promise; static methods combine multiple promises with different settlement rules.",
            cards:[
                {
                    title:"then()",
                    description:"Handles fulfillment, optionally transforms its value, and returns a new promise for the next link in the chain.",
                    snippet:`fetchData()
  .then((data) => data.name)
  .then((name) => console.log(name));`
                },
                {
                    title:"catch()",
                    description:"Handles a rejection from an earlier promise. Returning a value from catch recovers the chain for later then handlers.",
                    snippet:`loadUser()
  .catch((error) => {
    console.error(error);
    return null;
  });`
                },
                {
                    title:"finally()",
                    description:"Runs cleanup after fulfillment or rejection. It normally passes the original outcome through unchanged.",
                    snippet:`loadData()
  .finally(() => hideSpinner());`
                },
                {
                    title:"Promise.all()",
                    description:"Fulfills when every input fulfills and returns values in input order. Rejects when an input rejects; it does not cancel the other operations.",
                    snippet:`const results = await Promise.all([
  loadProfile(),
  loadSettings()
]);`
                },
                {
                    title:"Promise.allSettled()",
                    description:"Waits for every input to settle and returns each outcome as a fulfilled or rejected status record.",
                    snippet:`const outcomes = await Promise.allSettled([
  loadProfile(),
  loadSettings()
]);`
                },
                {
                    title:"Promise.race()",
                    description:"Settles with the first input promise that fulfills or rejects.",
                    snippet:`const firstResult = await Promise.race([
  fetchData(),
  timeoutAfter(1000)
]);`
                },
                {
                    title:"Promise.any()",
                    description:"Fulfills with the first fulfilled input. It rejects with AggregateError only if every input rejects.",
                    snippet:`const firstSuccess = await Promise.any([
  primaryRegion(),
  backupRegion()
]);`
                },
                {
                    title:"Promise.resolve() and Promise.reject()",
                    description:"Create fulfilled or rejected promises from a value or reason. Promise.resolve adopts a promise or thenable passed to it.",
                    snippet:`const ready = Promise.resolve("ready");
const failed = Promise.reject(new Error("failed"));`
                }
            ],
            takeaways:["every Promise settles once as fulfilled or rejected", "Promise.all preserves input order and fails fast", "allSettled waits for every outcome", "race and any select different winning outcomes"]
        },
        steps: [
            {
                id:0,
                stage:"Promise created",
                line:1,
                promiseState:"pending",
                value:"waiting",
                handlerState:"not run",
                description:"The Promise constructor starts the executor and creates a pending promise."
            },
            {
                id:1,
                stage:"Promise fulfilled",
                line:2,
                promiseState:"fulfilled",
                value:"done",
                handlerState:"queued",
                description:"resolve(\"done\") fulfills the promise with the value done. The attached then handler runs as a microtask."
            },
            {
                id:2,
                type:"console",
                stage:"then() handler runs",
                line:5,
                promiseState:"fulfilled",
                value:"done",
                handlerState:"completed",
                output:"done",
                description:"The then handler receives the fulfillment value and logs done."
            }
        ]
    },
    {
        id:6,
        topic:"async/await",
        description:"Explore JavaScript async/await through an interactive visualization. Watch asynchronous operations pause and resume execution as Promises settle, and understand how await, try/catch, and error handling shape the async flow.",
        difficulty:"Intermediate",
        slug:'async-await',
                component: AsyncAwaitTopic,
                code: `function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ name: "Aman" }), 1000);
    });
}

async function loadUser() {
    console.log("Loading user...");
    const user = await getUser();
    return user.name;
}

loadUser().then((name) => console.log(name));`,
                visualization: {
                        title:"Async function and await lifecycle",
                        type:"async-await"
                },
        preview: {
            title:"async/await",
            summary:"async/await makes Promise-based code easier to read and write by letting you pause execution in an async function.",
            snippet:`async function loadUser() {
  return await Promise.resolve("Aman");
}`,
            keyPoints:["async function", "await waits for result", "cleaner error handling"]
        },
        conceptData: {
            title:"Async function execution",
            summary:"An async function always returns a Promise. Within it, await pauses that function until its input settles, then resumes with the fulfillment value or throws the rejection reason. It does not block the JavaScript thread.",
            cards:[
                {
                    title:"async returns a Promise",
                    description:"A returned value fulfills the Promise; a thrown error rejects it.",
                    snippet:`async function getName() {
  return "Aman";
}

getName().then(console.log);`
                },
                {
                    title:"await pauses one function",
                    description:"Execution of the current async function pauses until the Promise settles. Other JavaScript work can continue in the meantime.",
                    snippet:`async function loadName() {
  const name = await getName();
  return name;
}`
                },
                {
                    title:"Handle rejections",
                    description:"A rejected Promise makes await throw, so use try/catch or handle the returned Promise with catch().",
                    snippet:`async function loadUser() {
  try {
    return await fetchUser();
  } catch (error) {
    return null;
  }
}`
                },
                {
                    title:"Run independent work in parallel",
                    description:"Sequential awaits wait one after another. Use Promise.all when operations are independent and should run concurrently.",
                    snippet:`const [user, settings] = await Promise.all([
  fetchUser(),
  fetchSettings()
]);`
                },
                {
                    title:"Sequential awaits",
                    description:"Await in sequence when a later operation needs a value produced by an earlier one.",
                    snippet:`const user = await fetchUser();
const posts = await fetchPosts(user.id);`
                }
            ],
            takeaways:["async functions always return Promises", "await resumes with a value or throws a rejection", "await pauses the async function, not the JavaScript thread", "use Promise.all for independent concurrent work"]
        },
        steps: [
            {
                id:0,
                stage:"Async function called",
                line:13,
                asyncState:"running",
                requestState:"not started",
                userValue:"not loaded",
                result:"pending",
                description:"Calling loadUser starts an async function and immediately returns a Promise."
            },
            {
                id:1,
                stage:"Request starts",
                line:8,
                asyncState:"running",
                requestState:"pending",
                userValue:"not loaded",
                result:"pending",
                output:"Loading user...",
                description:"The function logs its status and calls getUser. The request Promise is still pending."
            },
            {
                id:2,
                stage:"Function suspended at await",
                line:9,
                asyncState:"suspended at await",
                requestState:"pending",
                userValue:"waiting for request",
                result:"pending",
                description:"await pauses loadUser until getUser's Promise settles; the main JavaScript thread remains available."
            },
            {
                id:3,
                stage:"Request fulfills",
                line:3,
                asyncState:"ready to resume",
                requestState:"fulfilled",
                userValue:"{ name: Aman }",
                result:"pending",
                description:"The timer resolves the request Promise with the user object."
            },
            {
                id:4,
                stage:"Async function resumes",
                line:9,
                asyncState:"running",
                requestState:"fulfilled",
                userValue:"{ name: Aman }",
                result:"pending",
                description:"Execution resumes after await and assigns the fulfillment value to user."
            },
            {
                id:5,
                stage:"Async function fulfills",
                line:10,
                asyncState:"completed",
                requestState:"fulfilled",
                userValue:"{ name: Aman }",
                result:"Aman",
                description:"Returning user.name fulfills the Promise returned by loadUser with Aman."
            },
            {
                id:6,
                type:"console",
                stage:"Chained handler runs",
                line:13,
                asyncState:"completed",
                requestState:"fulfilled",
                userValue:"{ name: Aman }",
                result:"Aman",
                output:"Aman",
                description:"The then handler receives the value fulfilled by loadUser and logs it."
            }
        ]
    },
    {
        id:7,
        topic:"Event Loop",
        description:"Visualize the JavaScript Event Loop in action. Follow tasks as they move between the Call Stack, Web APIs, Microtask Queue, and Callback Queue to understand how JavaScript handles asynchronous execution step by step.",
        difficulty:"Advanced",
        slug:"event-loop",
        component: EventLoopTopic,
        code: `console.log("sync: start");
    setTimeout(() => console.log("task: timer"), 0);
    Promise.resolve().then(() => console.log("microtask: promise"));
    queueMicrotask(() => console.log("microtask: queued"));
    console.log("sync: end");`,
        visualization: {
            title:"Call stack and task queues",
            type:"event-loop"
        },
        preview: {
            title:"Event loop",
            summary:"The event loop coordinates the call stack, tasks, and microtasks so JS can handle async work without blocking execution.",
            snippet:`setTimeout(() => console.log("task"), 0);
Promise.resolve().then(() => console.log("microtask"));`,
            keyPoints:["Call stack", "Microtask queue", "Macrotask queue"]
        },
        conceptData: {
            title:"How the event loop schedules work",
            summary:"JavaScript runs the current task to completion. Once the call stack is empty, the event loop drains microtasks before starting another task such as a timer callback. Browser host APIs schedule timers and other external work.",
            cards:[
                {
                    title:"Call stack and run-to-completion",
                    description:"Synchronous JavaScript runs on the call stack. The current task finishes before queued callbacks begin.",
                    snippet:`console.log("first");
console.log("second");
// first, then second`
                },
                {
                    title:"Host APIs and timers",
                    description:"The host environment tracks timers and schedules their callbacks as tasks when they become eligible.",
                    snippet:`setTimeout(() => {
  console.log("timer task");
}, 0);`
                },
                {
                    title:"Microtask queue",
                    description:"Promise reactions and queueMicrotask callbacks are microtasks. They run after the current task and before the next task.",
                    snippet:`Promise.resolve().then(() => console.log("promise"));
queueMicrotask(() => console.log("queued"));`
                },
                {
                    title:"Task queue",
                    description:"Timer callbacks and many user events are scheduled as tasks. A task waits until the current stack and microtask queue are clear.",
                    snippet:`setTimeout(() => console.log("task"), 0);
console.log("sync");`
                },
                {
                    title:"Execution order",
                    description:"After synchronous code completes, the microtask queue is drained before the event loop starts another task.",
                    snippet:`setTimeout(() => console.log("task"), 0);
Promise.resolve().then(() => console.log("microtask"));
console.log("sync");`
                },
                {
                    title:"Microtasks added by microtasks",
                    description:"The microtask queue continues draining until empty, including microtasks added while earlier microtasks run.",
                    snippet:`Promise.resolve().then(() => {
  queueMicrotask(() => console.log("nested microtask"));
});`
                }
            ],
            takeaways:["the current task runs to completion", "microtasks drain before the next task", "timer delay is a minimum, not an exact execution time", "the event loop coordinates the stack and host queues"]
        },
        steps: [
            {
                id:0,
                stage:"Synchronous task starts",
                line:1,
                callStack:["script"],
                microtasks:[],
                tasks:[],
                output:"sync: start",
                description:"The script begins running as the current task on the call stack."
            },
            {
                id:1,
                stage:"Timer scheduled",
                line:2,
                callStack:["script"],
                microtasks:[],
                tasks:["timer callback"],
                description:"setTimeout registers a callback with the host. It cannot interrupt the running script."
            },
            {
                id:2,
                stage:"Promise reaction queued",
                line:3,
                callStack:["script"],
                microtasks:["Promise.then callback"],
                tasks:["timer callback"],
                description:"The then callback is queued as a microtask because the Promise is already fulfilled."
            },
            {
                id:3,
                stage:"Second microtask queued",
                line:4,
                callStack:["script"],
                microtasks:["Promise.then callback", "queueMicrotask callback"],
                tasks:["timer callback"],
                description:"queueMicrotask adds another callback behind the already queued Promise reaction."
            },
            {
                id:4,
                stage:"Synchronous task completes",
                line:5,
                callStack:[],
                microtasks:["Promise.then callback", "queueMicrotask callback"],
                tasks:["timer callback"],
                output:"sync: end",
                description:"The script finishes. The call stack is empty, so the event loop can drain microtasks."
            },
            {
                id:5,
                stage:"Promise microtask runs",
                line:3,
                callStack:["Promise.then callback"],
                microtasks:["queueMicrotask callback"],
                tasks:["timer callback"],
                output:"microtask: promise",
                description:"The Promise reaction runs first because it entered the microtask queue first."
            },
            {
                id:6,
                stage:"Microtask queue drained",
                line:4,
                callStack:["queueMicrotask callback"],
                microtasks:[],
                tasks:["timer callback"],
                output:"microtask: queued",
                description:"The second microtask runs before the event loop starts the timer task."
            },
            {
                id:7,
                stage:"Timer task runs",
                line:2,
                callStack:["timer callback"],
                microtasks:[],
                tasks:[],
                output:"task: timer",
                description:"With the call stack and microtask queue clear, the timer callback runs as the next task."
            }
        ]
    },
    {
        id:8,
        topic:"Functions",
        description:"Explore JavaScript functions through an interactive visualization. See how function declarations, parameters, arguments, return values, and function calls work together to control reusable blocks of code and execution flow.",
        difficulty:"Beginner",
        slug:'functions',
                component: FunctionsTopic,
                code: `function add(first, second) {
    return first + second;
}
const total = add(2, 3);
console.log(total);`,
                visualization: {
                        title: "Function call and return",
                        type: "function-call"
                },
        preview: {
            title:"Functions",
            summary:"Functions let you group reusable logic and execute it by passing arguments and receiving a return value.",
            snippet:`function add(a, b) {
  return a + b;
}`,
            keyPoints:["Parameters", "Arguments", "Return values"]
        },
        conceptData: {
            title:"Function types and patterns",
            summary:"JavaScript functions appear in several forms and patterns. Some describe syntax, such as declarations and arrows; others describe how functions are used, such as callbacks and higher-order functions.",
            cards:[
                {
                    title:"Function declaration",
                    description:"A named function declared with the function keyword. Declarations are available throughout their scope after initialization.",
                    snippet:`function greet(name) {
  return "Hello " + name;
}`
                },
                {
                    title:"Named function expression",
                    description:"A function expression with an internal name, useful for recursion and stack traces.",
                    snippet:`const factorial = function calculate(number) {
  if (number <= 1) return 1;
  return number * calculate(number - 1);
};`
                },
                {
                    title:"Anonymous function expression",
                    description:"A function created as an expression without its own name, often assigned to a variable or passed as a value.",
                    snippet:`const double = function (number) {
  return number * 2;
};`
                },
                {
                    title:"Arrow function",
                    description:"A concise function expression with lexical this. Arrow functions do not have their own this or arguments binding.",
                    snippet:`const double = (number) => number * 2;
const add = (first, second) => first + second;`
                },
                {
                    title:"Method",
                    description:"A function stored as an object property. In a method call, this is set by the object used as the receiver.",
                    snippet:`const user = {
  name: "Aman",
  greet() {
    return "Hello " + this.name;
  }
};`
                },
                {
                    title:"IIFE",
                    description:"An immediately invoked function expression runs as soon as it is created and can create a local scope.",
                    snippet:`(function () {
  const message = "initialized";
  console.log(message);
})();`
                },
                {
                    title:"Callback function",
                    description:"A function passed to another function and invoked by that function at the appropriate point.",
                    snippet:`function greet(name, callback) {
  callback("Hello " + name);
}

greet("Aman", (message) => console.log(message));`
                },
                {
                    title:"Higher-order function",
                    description:"A function that accepts another function, returns a function, or does both.",
                    snippet:`function makeMultiplier(factor) {
  return (number) => number * factor;
}

const triple = makeMultiplier(3);`
                },
                {
                    title:"Constructor function",
                    description:"A regular function called with new to initialize a new object. Classes are the modern syntax for this pattern.",
                    snippet:`function User(name) {
  this.name = name;
}

const user = new User("Aman");`
                },
                {
                    title:"Generator function",
                    description:"A function declared with function* that can pause at yield and resume through its iterator.",
                    snippet:`function* createIds() {
  yield 1;
  yield 2;
}

const ids = createIds();`
                },
                {
                    title:"Async function",
                    description:"An async function always returns a Promise and can use await to write asynchronous steps sequentially.",
                    snippet:`async function loadName() {
  return "Aman";
}

loadName().then(console.log);`
                }
            ],
            takeaways:["functions are values that can be passed around", "parameters receive arguments at call time", "functions can return values or other functions"]
        },
        variables: [
            { id: "first", name: "first", valueByStep: ["not called", "2", "2", "2"] },
            { id: "second", name: "second", valueByStep: ["not called", "3", "3", "3"] },
            { id: "total", name: "total", valueByStep: ["not initialized", "not initialized", "5", "5"] }
        ],
        steps: [
            {
                id: 0,
                type: "definition",
                stage: "Function defined",
                line: 1,
                description: "The add declaration defines reusable logic with two parameters."
            },
            {
                id: 1,
                type: "call",
                stage: "Function called",
                line: 4,
                description: "Calling add(2, 3) creates a function execution and passes two arguments."
            },
            {
                id: 2,
                type: "return",
                stage: "Value returned",
                line: 2,
                description: "The parameters are added, and the function returns 5 to the caller.",
                output: "5"
            },
            {
                id: 3,
                type: "console",
                stage: "Result logged",
                line: 5,
                description: "The returned value is stored in total and logged.",
                output: "5"
            }
        ]
    },
    {
        id:9,
        topic:"Shallow copy vs Deep copy",
        description:"Compare shallow and deep copies by tracking object references and nested data as each copy is mutated.",
        difficulty:"Intermediate",
        slug:'shallow-deep-copy',
        component: CopyTopic,
        code: `const original = { name: "Aman", profile: { city: "Delhi" } };
    const shallowCopy = { ...original };
    const deepCopy = structuredClone(original);

    shallowCopy.profile.city = "Mumbai";
    deepCopy.profile.city = "Pune";

    console.log(original.profile.city);
    console.log(shallowCopy.profile.city);
    console.log(deepCopy.profile.city);`,
        visualization: {
            title: "Nested object references",
            type: "copy-comparison"
        },
        preview: {
            title:"Shallow vs deep copy",
            summary:"A shallow copy duplicates the top level only, while a deep copy duplicates nested objects as well.",
            snippet:`const shallow = { ...person };
const deep = JSON.parse(JSON.stringify(person));`,
            keyPoints:["Top-level only", "Nested references preserved", "Deep copy duplicates nested data"]
        },
        conceptData: {
            title:"Shallow copy and deep copy",
            summary:"Copy depth determines whether nested objects are shared. A shallow copy creates a new outer object but keeps nested references; a deep copy creates independent nested objects too.",
            cards:[
                {
                    title:"Shallow copy",
                    description:"Creates a new top-level object. Nested objects remain shared references, so changing a nested property through the copy also changes the original.",
                    snippet:`const original = { profile: { city: "Delhi" } };
const copy = { ...original };

copy.profile.city = "Mumbai";
console.log(original.profile.city); // Mumbai`
                },
                {
                    title:"Deep copy",
                    description:"Recursively duplicates nested data so mutations do not affect the original. structuredClone supports common built-in data types and circular references; functions and some host objects cannot be cloned.",
                    snippet:`const original = { profile: { city: "Delhi" } };
const copy = structuredClone(original);

copy.profile.city = "Mumbai";
console.log(original.profile.city); // Delhi`
                }
            ],
            takeaways:["spread and Object.assign make shallow copies", "nested references decide whether mutations are shared", "use structuredClone when an independent nested copy is needed"]
        },
        variables: [
            {
                id: "original",
                name: "original",
                objectRefByStep: Array(8).fill("object-1"),
                profileRefByStep: Array(8).fill("profile-1"),
                cityByStep: ["Delhi", "Delhi", "Delhi", "Mumbai", "Mumbai", "Mumbai", "Mumbai", "Mumbai"]
            },
            {
                id: "shallowCopy",
                name: "shallowCopy",
                objectRefByStep: ["not created", "object-2", "object-2", "object-2", "object-2", "object-2", "object-2", "object-2"],
                profileRefByStep: ["not created", "profile-1", "profile-1", "profile-1", "profile-1", "profile-1", "profile-1", "profile-1"],
                cityByStep: ["not created", "Delhi", "Delhi", "Mumbai", "Mumbai", "Mumbai", "Mumbai", "Mumbai"]
            },
            {
                id: "deepCopy",
                name: "deepCopy",
                objectRefByStep: ["not created", "not created", "object-3", "object-3", "object-3", "object-3", "object-3", "object-3"],
                profileRefByStep: ["not created", "not created", "profile-2", "profile-2", "profile-2", "profile-2", "profile-2", "profile-2"],
                cityByStep: ["not created", "not created", "Delhi", "Delhi", "Pune", "Pune", "Pune", "Pune"]
            }
        ],
        steps: [
            {
                id: 0,
                type: "create",
                stage: "Original object created",
                line: 1,
                description: "The original object and its nested profile are stored at separate reference locations."
            },
            {
                id: 1,
                type: "shallow-copy",
                stage: "Shallow copy created",
                line: 2,
                description: "Spread creates a new outer object, but profile still points to the original nested object."
            },
            {
                id: 2,
                type: "deep-copy",
                stage: "Deep copy created",
                line: 3,
                description: "structuredClone creates a new outer object and a separate nested profile object."
            },
            {
                id: 3,
                type: "mutation",
                stage: "Shallow nested mutation",
                line: 5,
                description: "Changing shallowCopy.profile.city also changes original.profile.city because both share profile-1."
            },
            {
                id: 4,
                type: "mutation",
                stage: "Deep nested mutation",
                line: 6,
                description: "Changing deepCopy.profile.city affects only profile-2; the original remains Mumbai."
            },
            {
                id: 5,
                type: "console",
                stage: "Original value logged",
                line: 8,
                output: "Mumbai",
                description: "The original changed when the shallow copy's nested profile was mutated."
            },
            {
                id: 6,
                type: "console",
                stage: "Shallow copy value logged",
                line: 9,
                output: "Mumbai",
                description: "The shallow copy points to the same nested profile as the original."
            },
            {
                id: 7,
                type: "console",
                stage: "Deep copy value logged",
                line: 10,
                output: "Pune",
                description: "The deep copy has its own nested profile, so it keeps its independent value."
            }
        ]
    },
    {
        id:10,
        topic:"DOM Event Propagation",
        description:"Explore JavaScript event propagation through an interactive DOM visualization. Follow events through capturing and bubbling phases, then see how event delegation uses propagation to efficiently handle interactions across nested elements.",
        difficulty:"Advanced",
        slug:'DOM-event-propagation',
        component: DOMPropagationTopic,
        code: `const root = document.querySelector("#root");
    const parent = root.querySelector("#parent");
    const button = parent.querySelector("button");

    root.addEventListener("click", () => console.log("root capture"), true);
    parent.addEventListener("click", () => console.log("parent capture"), true);
    button.addEventListener("click", () => console.log("button target"));
    parent.addEventListener("click", () => console.log("parent bubble"));
    root.addEventListener("click", () => console.log("root bubble"));`,
        visualization: {
            title:"DOM event path",
            type:"event-propagation"
        },
        preview: {
            title:"Event propagation",
            summary:"Events move through capturing and bubbling phases, allowing parent and child elements to respond in a predictable order.",
            snippet:`parent.addEventListener("click", handler, true);\nchild.addEventListener("click", handler);`,
            keyPoints:["Capturing phase", "Target phase", "Bubbling phase"]
        },
        conceptData: {
            title:"Propagation subtopics",
            summary:"A DOM event can travel from ancestor capture listeners toward its target, run listeners at the target, then bubble back through ancestors. Event delegation uses that bubbling path to handle events from descendants.",
            takeaways:["capture travels toward the target", "target listeners run on the event target", "bubbling enables event delegation"]
        },
        subtopics: [
            {
                id:"capture",
                title:"Capture phase",
                description:"Capture listeners run from the outer ancestor toward the element that was clicked.",
                snippet:`root.addEventListener("click", onRootCapture, true);
parent.addEventListener("click", onParentCapture, true);`,
                steps:[
                    { id:0, node:"root", phase:"Capture", description:"The event enters the root container and its capture listener runs.", visitedNodes:["root"], output:"root capture" },
                    { id:1, node:"parent", phase:"Capture", description:"The event continues inward to the parent capture listener.", visitedNodes:["root", "parent"], output:"parent capture" },
                    { id:2, node:"button", phase:"Target", description:"After capture listeners, the event reaches the clicked button.", visitedNodes:["root", "parent", "button"], output:"button target" }
                ]
            },
            {
                id:"target",
                title:"Target phase",
                description:"At the target phase, listeners attached to the actual clicked element handle the event.",
                snippet:`button.addEventListener("click", (event) => {
  console.log("clicked", event.currentTarget);
});`,
                steps:[
                    { id:0, node:"button", phase:"Target", description:"The event target is the button, so its click listener runs here.", visitedNodes:["root", "parent", "button"], output:"button target" }
                ]
            },
            {
                id:"bubble",
                title:"Bubbling phase",
                description:"After target listeners run, the event bubbles from the target through its parent ancestors.",
                snippet:`parent.addEventListener("click", onParentBubble);
root.addEventListener("click", onRootBubble);`,
                steps:[
                    { id:0, node:"button", phase:"Target", description:"The button handles the event before it bubbles upward.", visitedNodes:["button"], output:"button target" },
                    { id:1, node:"parent", phase:"Bubble", description:"The bubbling event reaches the parent listener.", visitedNodes:["button", "parent"], output:"parent bubble" },
                    { id:2, node:"root", phase:"Bubble", description:"The event continues upward to the root listener.", visitedNodes:["button", "parent", "root"], output:"root bubble" }
                ]
            },
            {
                id:"delegation",
                title:"Event delegation",
                description:"A single ancestor listener can handle events from matching descendants by checking event.target as the event bubbles.",
                snippet:`list.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  console.log(button.dataset.action);
});`,
                steps:[
                    { id:0, node:"button", phase:"Target", description:"A nested button is clicked and becomes event.target.", visitedNodes:["button"], output:"button clicked" },
                    { id:1, node:"parent", phase:"Bubble", description:"The event bubbles to the parent, where a delegated listener can inspect the original target.", visitedNodes:["button", "parent"], output:"parent handles matching button" },
                    { id:2, node:"root", phase:"Bubble", description:"Propagation can continue to outer ancestors if it is not stopped.", visitedNodes:["button", "parent", "root"], output:"event continues bubbling" }
                ]
            }
        ]
    },
    {
        id:11,
        topic:"Debouncing",
        description:"Explore JavaScript debouncing through an interactive visualization. Watch rapid events wait for a pause before triggering a function, and understand how debouncing reduces unnecessary executions in search, input, and resize operations.",
        difficulty:"Intermediate",
        slug:"debouncing",
                component: RateLimitingTopic,
        code: `function debounce(fn, delay) {
    let timerId;
  return (...args) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => fn(...args), delay);
  };
}
const search = debounce((query) => console.log(query), 300);
setTimeout(() => search("c"), 0);
setTimeout(() => search("co"), 100);
setTimeout(() => search("cop"), 200);`,
                visualization: {
                        title:"Debounce waits for quiet",
                        mode:"debounce"
                },
        preview: {
            title:"Debouncing",
            summary:"Debouncing delays work until a burst of events stops, which reduces unnecessary repeated calls.",
            snippet:`const onInput = debounce(search, 400);`,
            keyPoints:["Waits for pause", "Reduces repeated calls", "Useful for search and resize"]
        },
        conceptData: {
            title:"Debouncing details",
            summary:"Debouncing groups a burst of calls. Each new call resets the wait timer; in trailing mode, the callback runs once after calls stop for the configured delay, using the latest arguments and receiver.",
            cards:[
                {
                    title:"Trailing debounce",
                    description:"Each call restarts the timer. The callback runs once after a full quiet period with the most recent call's arguments.",
                    snippet:`const search = debounce(runSearch, 300);
search("c");
search("co");
search("cop"); // runSearch("cop") after 300ms quiet`
                },
                {
                    title:"Leading and trailing options",
                    description:"A leading call runs at the start of a burst. Some implementations also allow a trailing call; when both are enabled, a single isolated call may run only once.",
                    snippet:`const onResize = debounce(handleResize, 250, {
  leading: true,
  trailing: true
});`
                },
                {
                    title:"cancel(), flush(), and maxWait",
                    description:"Robust debounce utilities may cancel a pending call, run it immediately, or enforce a maximum wait during a continuous stream.",
                    snippet:`debouncedSearch.cancel();
debouncedSearch.flush();
const save = debounce(saveDraft, 300, { maxWait: 1500 });`
                },
                {
                    title:"Common use cases",
                    description:"Use debounce when only the final value after a burst matters, such as search input, autosave, or resize recalculation.",
                    snippet:`input.addEventListener(
  "input",
  debounce((event) => search(event.target.value), 300)
);`
                }
            ],
            takeaways:["each call resets the quiet-period timer", "trailing debounce runs once with the latest arguments", "leading/trailing behavior depends on the implementation", "use maxWait when continuous calls must not defer work forever"]
        },
        steps: [
            {
                id:0,
                time:"0 ms",
                event:'search("c")',
                timer:"scheduled for 300 ms",
                invocations:[],
                description:"The first call starts a 300 ms quiet-period timer."
            },
            {
                id:1,
                time:"100 ms",
                event:'search("co")',
                timer:"previous timer canceled; new timer due at 400 ms",
                invocations:[],
                description:"A new call arrives before the timer fires, so debounce cancels and restarts the wait."
            },
            {
                id:2,
                time:"200 ms",
                event:'search("cop")',
                timer:"previous timer canceled; new timer due at 500 ms",
                invocations:[],
                description:"Another input resets the timer again and replaces the pending arguments with cop."
            },
            {
                id:3,
                time:"500 ms",
                event:"quiet period reached",
                timer:"timer fires",
                invocations:["search(\"cop\")"],
                description:"No call arrived for 300 ms, so the callback runs once with the latest value."
            },
            {
                id:4,
                type:"console",
                time:"500 ms",
                event:"callback completed",
                timer:"none pending",
                invocations:["search(\"cop\")"],
                output:"cop",
                description:"Only the last search query is processed."
            }
        ]
    },
    {
        id:12,
        topic:"Throttling",
        description:"Visualize JavaScript throttling in action and see how frequent events are limited to a controlled execution rate. Understand how throttling improves performance for scroll, mouse movement, and continuous event handling.",
        difficulty:"Intermediate",
        slug:"throttling",
                component: RateLimitingTopic,
        code: `function throttle(fn, delay) {
    let lastRun = -Infinity;
  return (...args) => {
    const now = Date.now();
        if (now - lastRun >= delay) {
            lastRun = now;
      fn(...args);
    }
  };
}

const onScroll = throttle(() => console.log("scroll"), 300);`,
                visualization: {
                        title:"Throttle limits call rate",
                        mode:"throttle"
                },
        preview: {
            title:"Throttling",
            summary:"Throttling limits how often a function can run, even if the event continues firing frequently.",
            snippet:`const onScroll = throttle(handleScroll, 200);`,
            keyPoints:["Limits execution rate", "Runs at intervals", "Useful for scroll and mousemove"]
        },
        conceptData: {
            title:"Throttling details",
            summary:"Throttling limits how often a callback can run. In a leading-edge throttle, the first call runs immediately and later calls are ignored until the interval expires. Other implementations can schedule one trailing call with the latest arguments.",
            cards:[
                {
                    title:"Leading-edge throttle",
                    description:"Runs the first call immediately, then allows at most one call per interval. Calls inside the active window are ignored.",
                    snippet:`const onScroll = throttle(handleScroll, 200);
window.addEventListener("scroll", onScroll);`
                },
                {
                    title:"Trailing calls",
                    description:"A trailing-edge option stores the latest call and runs it once when the current interval ends. Leading and trailing options vary by implementation.",
                    snippet:`const update = throttle(render, 200, {
  leading: true,
  trailing: true
});`
                },
                {
                    title:"Time windows",
                    description:"The interval is a minimum spacing between allowed executions, not a guarantee that a callback runs at exact wall-clock intervals.",
                    snippet:`// allowed: 0ms, 200ms, 400ms
const onMove = throttle(handleMove, 200);`
                },
                {
                    title:"Common use cases",
                    description:"Use throttle when ongoing events need periodic updates, such as scroll position, pointer movement, or resize work.",
                    snippet:`window.addEventListener(
  "scroll",
  throttle(updatePosition, 100)
);`
                },
                {
                    title:"Cleanup and animation frames",
                    description:"Cancel listeners and pending timers when a component unmounts. For visual updates tied to painting, requestAnimationFrame can be a better fit.",
                    snippet:`window.removeEventListener("scroll", onScroll);
cancelAnimationFrame(frameId);`
                }
            ],
            takeaways:["throttle enforces a maximum call rate", "leading and trailing behavior varies by utility", "use trailing calls when the final value must be applied", "requestAnimationFrame may suit frame-based visual updates"]
        },
        steps: [
            {
                id:0,
                time:"0 ms",
                event:"scroll event",
                decision:"allowed immediately",
                nextAllowed:"300 ms",
                invocations:["handleScroll() at 0 ms"],
                description:"The first event runs immediately and starts a 300 ms rate-limit window."
            },
            {
                id:1,
                time:"100 ms",
                event:"scroll event",
                decision:"ignored inside interval",
                nextAllowed:"300 ms",
                invocations:["handleScroll() at 0 ms"],
                description:"Only 100 ms have passed, so this leading-edge throttle ignores the event."
            },
            {
                id:2,
                time:"250 ms",
                event:"scroll event",
                decision:"ignored inside interval",
                nextAllowed:"300 ms",
                invocations:["handleScroll() at 0 ms"],
                description:"The interval has not expired; no additional callback runs."
            },
            {
                id:3,
                time:"350 ms",
                event:"scroll event",
                decision:"allowed; interval restarts",
                nextAllowed:"650 ms",
                invocations:["handleScroll() at 0 ms", "handleScroll() at 350 ms"],
                description:"The 300 ms window has passed, so this event runs and opens the next window."
            },
            {
                id:4,
                time:"500 ms",
                event:"scroll event",
                decision:"ignored inside interval",
                nextAllowed:"650 ms",
                invocations:["handleScroll() at 0 ms", "handleScroll() at 350 ms"],
                description:"This event arrives before the next allowed time and is ignored."
            },
            {
                id:5,
                type:"console",
                time:"500 ms",
                event:"burst summary",
                decision:"2 calls from 5 events",
                nextAllowed:"650 ms",
                invocations:["handleScroll() at 0 ms", "handleScroll() at 350 ms"],
                output:"called at 0 ms and 350 ms",
                description:"Throttling bounds execution frequency during a burst of events."
            }
        ]
    },
    {
        id:13,
        topic:"Destructuring",
        description:"Explore JavaScript destructuring through an interactive visualization. See how values are extracted from arrays and objects into variables, and understand default values, renaming, nested destructuring, and rest patterns step by step.",
        difficulty:"Beginner",
        slug:"destructuring",
                component: DestructuringTopic,
                code: `const user = {
    name: "Aman",
    age: undefined,
    role: "admin",
    profile: { city: "Delhi", theme: "dark" }
};
const { name, age: userAge = 23, country = "India" } = user;
const { profile: { city, theme } } = user;
const numbers = [10, undefined, 30, 40];
const [first, second = 20, ...remaining] = numbers;
const { role: userRole, ...publicUser } = user;
function greet({ name, role }) {
    return name + " (" + role + ")";
}
const greeting = greet(user);
console.log(name, userAge, country, city, theme, first, second, remaining, userRole, publicUser, greeting);`,
                visualization: {
                        title:"Destructuring values",
                        type:"destructuring"
                },
        preview: {
            title:"Destructuring",
            summary:"Destructuring reads values from arrays or objects into variables with a cleaner syntax.",
            snippet:`const { name, age } = user;\nconst [first, second] = arr;`,
            keyPoints:["Extract values", "Clean syntax", "Supports defaults and renaming"]
        },
        conceptData: {
            title:"Destructuring patterns",
            summary:"Destructuring reads values from objects by property name and from arrays by position. Patterns can rename bindings, apply defaults, reach nested values, and collect the remaining properties or items.",
            cards:[
                {
                    title:"Object properties and aliases",
                    description:"Object patterns match property names. Use a colon to bind a property to a different local name.",
                    snippet:`const user = { name: "Aman", age: 23 };
const { name, age: userAge } = user;`
                },
                {
                    title:"Array positions",
                    description:"Array patterns read values by index. Skipped commas ignore positions, and the source does not need to be an array if it is iterable.",
                    snippet:`const colors = ["red", "blue", "green"];
const [primary, , tertiary] = colors;`
                },
                {
                    title:"Default values",
                    description:"Defaults are used when a matched value is undefined, including a missing object property. A null value does not trigger the default.",
                    snippet:`const user = { name: undefined, role: null };
const { name = "Guest", role = "member" } = user;
// name is "Guest"; role is null`
                },
                {
                    title:"Nested destructuring",
                    description:"Nested patterns reach into child objects or arrays. The parent value must exist unless optional fallback data is provided first.",
                    snippet:`const user = { profile: { city: "Delhi" } };
const { profile: { city } } = user;`
                },
                {
                    title:"Rest properties and elements",
                    description:"A rest pattern collects unbound properties or remaining array elements. Rest must appear last in its pattern.",
                    snippet:`const { password, ...publicUser } = user;
const [first, ...remaining] = values;`
                },
                {
                    title:"Function parameters",
                    description:"Destructuring can unpack object or array arguments directly in a function parameter list. Defaults can be applied to the whole argument too.",
                    snippet:`function greet({ name = "Guest" } = {}) {
  return "Hello " + name;
}`
                }
            ],
            takeaways:["object patterns match keys; array patterns match positions", "defaults only replace undefined", "rest patterns must come last", "nested patterns require valid parent values"]
        },
        steps: [
            {
                id:0,
                stage:"Source object",
                line:1,
                source:"user object",
                bindings:[{ name:"name", value:"Aman" }, { name:"age", value:"undefined" }, { name:"role", value:"admin" }, { name:"profile.city", value:"Delhi" }, { name:"profile.theme", value:"dark" }],
                description:"The source object contains top-level properties and a nested profile object."
            },
            {
                id:1,
                stage:"Object keys and defaults",
                line:7,
                source:"user object",
                bindings:[{ name:"name", value:"Aman" }, { name:"age -> userAge", value:"23 (default)" }, { name:"country", value:"India (default)" }],
                description:"Object destructuring matches keys, renames age to userAge, and uses defaults for undefined or missing values."
            },
            {
                id:2,
                stage:"Nested properties",
                line:8,
                source:"user.profile",
                bindings:[{ name:"city", value:"Delhi" }, { name:"theme", value:"dark" }],
                description:"A nested pattern reads city and theme directly from profile."
            },
            {
                id:3,
                stage:"Source array",
                line:9,
                source:"numbers = [10, undefined, 30, 40]",
                bindings:[],
                description:"Array destructuring uses each value's position."
            },
            {
                id:4,
                stage:"Array positions and rest",
                line:10,
                source:"numbers",
                bindings:[{ name:"first", value:"10" }, { name:"second", value:"20 (default)" }, { name:"remaining", value:"[30, 40]" }],
                description:"The second position is undefined, so its default applies; rest collects all later items."
            },
            {
                id:5,
                stage:"Object rest properties",
                line:11,
                source:"user object",
                bindings:[{ name:"role -> userRole", value:"admin" }, { name:"publicUser", value:"remaining properties" }],
                description:"The role property is renamed, while rest gathers the other enumerable own properties."
            },
            {
                id:6,
                stage:"Function parameter pattern",
                line:12,
                source:"greet(user)",
                bindings:[{ name:"name", value:"Aman" }, { name:"role", value:"admin" }],
                description:"The function parameter destructures name and role from the object argument."
            },
            {
                id:7,
                stage:"Function result",
                line:15,
                source:"greeting",
                bindings:[{ name:"greeting", value:"Aman (admin)" }],
                description:"The function uses its destructured parameters to return a greeting."
            },
            {
                id:8,
                type:"console",
                stage:"Values logged",
                line:16,
                source:"console output",
                bindings:[{ name:"result", value:"Aman, 23, India, Delhi, dark, 10, 20, [30, 40], admin, ... , Aman (admin)" }],
                output:"Aman 23 India Delhi dark 10 20 [30, 40] admin { ... } Aman (admin)",
                description:"The final output brings together object, array, default, nested, rest, and parameter bindings."
            }
        ]
    },
    {
        id:14,
        topic:"Spread and Rest operator",
        description:"Explore JavaScript spread and rest operators through an interactive visualization. See how ... expands arrays and objects, combines or copies data, and collects multiple values into a single variable or function parameter.",
        difficulty:"Beginner",
        slug:'spread-rest-operator',
        component: SpreadRestTopic,
        code: `const values = [2, 4, 6];
    const expanded = [...values, 8];
    const [first, ...remaining] = values;
    const collect = (head, ...tail) => [head, tail];
    const collected = collect(...values);
    console.log(expanded, remaining, collected);`,
        visualization: {
            title:"Spread expands, rest collects",
            type:"spread-rest"
        },
        preview: {
            title:"Spread and rest",
            summary:"The spread operator expands values, while the rest operator collects multiple values into one parameter.",
            snippet:`const arr = [...nums, 4];\nconst sum = (...values) => values.reduce((a, b) => a + b, 0);`,
            keyPoints:["Expand iterable values", "Collect remaining values", "Useful in arrays and functions"]
        },
        conceptData: {
            title:"Spread and rest operators",
            summary:"... can either spread items into a new collection or collect remaining arguments into a single array parameter.",
            cards:[
                {
                    title:"Spread operator",
                    description:"Expands iterable items or object properties into a new array, object, or function call. Copying with spread is shallow.",
                    snippet:`const values = [2, 4, 6];
const expanded = [...values, 8];
const user = { name: "Aman" };
const admin = { ...user, role: "admin" };

function add(first, second, third) {
  return first + second + third;
}
add(...values);`
                },
                {
                    title:"Rest operator",
                    description:"Collects remaining array elements or function arguments into one array. A rest parameter must be the final parameter.",
                    snippet:`const [first, ...remaining] = [2, 4, 6];

function sum(head, ...tail) {
  return tail.reduce((total, value) => total + value, head);
}

sum(first, ...remaining);`
                }
            ],
            takeaways:["spread expands values at the use site", "rest collects values into an array", "the syntax is the same but the position gives it meaning"]
        },
        variables: [
            { id:"values", name:"values", valueByStep:["[2, 4, 6]", "[2, 4, 6]", "[2, 4, 6]", "[2, 4, 6]", "[2, 4, 6]"] },
            { id:"expanded", name:"expanded", valueByStep:["not created", "[2, 4, 6, 8]", "[2, 4, 6, 8]", "[2, 4, 6, 8]", "[2, 4, 6, 8]"] },
            { id:"first", name:"first", valueByStep:["not collected", "not collected", "2", "2", "2"] },
            { id:"remaining", name:"remaining", valueByStep:["not collected", "not collected", "[4, 6]", "[4, 6]", "[4, 6]"] },
            { id:"head", name:"head", valueByStep:["not called", "not called", "not called", "2", "2"] },
            { id:"tail", name:"tail", valueByStep:["not called", "not called", "not called", "[4, 6]", "[4, 6]"] }
        ],
        steps: [
            {
                id:0,
                type:"source",
                stage:"Source array",
                line:1,
                description:"The values array contains three items that can be expanded or collected."
            },
            {
                id:1,
                type:"spread",
                stage:"Spread into a new array",
                line:2,
                description:"Spread expands each item from values, then appends 8 to create a new array."
            },
            {
                id:2,
                type:"rest-destructure",
                stage:"Rest in destructuring",
                line:3,
                description:"The first item is assigned to first; rest collects the remaining items into remaining."
            },
            {
                id:3,
                type:"rest-parameter",
                stage:"Spread call and rest parameter",
                line:5,
                description:"Spread passes the array items as arguments. The head parameter receives the first; rest collects the rest into tail."
            },
            {
                id:4,
                type:"console",
                stage:"Results logged",
                line:6,
                description:"The expanded array, destructured remainder, and collected function arguments are logged together.",
                output:"[2, 4, 6, 8] [4, 6] [2, [4, 6]]"
            }
        ]
    },
    {
        id:15,
        topic:"import/export",
        description:"Explore JavaScript modules through an interactive visualization. See how export and import share code between files, understand named and default exports, and visualize how modules organize large applications into reusable pieces.",
        difficulty:"Beginner",
        slug:'import-export',
        component: ImportExportTopic,
        code: `// math.js
    export const value = 42;
    export default function greet(name) {
      return "Hello " + name;
    }

    // app.js
    import greet, { value } from "./math.js";
    console.log(greet("Aman"), value);`,
        visualization: {
            title:"Module exports and imports",
            type:"module-flow"
        },
        preview: {
            title:"Modules",
            summary:"import and export help share code across files and keep projects organized into modules.",
            snippet:`export const value = 42;\nimport { value } from './math.js';`,
            keyPoints:["Share reusable code", "Named and default exports", "Keeps modules organized"]
        },
        conceptData: {
            title:"Modules in JavaScript",
            summary:"An exporting module exposes selected values, and an importing module brings them into scope. Named and default exports use different import syntax.",
            cards:[
                {
                    title:"Named exports",
                    description:"A module can provide multiple named exports. Import them by name inside braces; aliases can rename them locally.",
                    snippet:`// math.js
export const value = 42;

// app.js
import { value } from "./math.js";
import { value as answer } from "./math.js";`
                },
                {
                    title:"Default export",
                    description:"A module may have one default export. The importer chooses its local name and does not use braces.",
                    snippet:`// greet.js
export default function greet(name) {
  return "Hello " + name;
}

// app.js
import greet from "./greet.js";`
                },
                {
                    title:"Import both forms",
                    description:"A module can expose named and default exports together. Static imports belong at module scope.",
                    snippet:`// app.js
import greet, { value } from "./math.js";

console.log(greet("Aman"), value);`
                }
            ],
            takeaways:["exports define a module's public values", "named imports use braces", "default imports do not use braces"]
        },
        variables: [
            { id:"value", name:"value", valueByStep:["42", "42", "42", "42", "42"] },
            { id:"greet", name:"greet", valueByStep:["not exported", "function greet(name)", "function greet(name)", "function greet(name)", "function greet(name)"] },
            { id:"imports", name:"imports", valueByStep:["not imported", "not imported", "not imported", "greet, value", "greet, value"] }
        ],
        steps: [
            {
                id:0,
                type:"named-export",
                stage:"Named export created",
                line:2,
                description:"math.js exposes value as a named export."
            },
            {
                id:1,
                type:"default-export",
                stage:"Default export created",
                line:3,
                description:"math.js exposes greet as its default export."
            },
            {
                id:2,
                type:"import",
                stage:"Values imported",
                line:8,
                description:"app.js imports the default greet function and the named value export."
            },
            {
                id:3,
                type:"call",
                stage:"Imported function called",
                line:9,
                description:"The importing module calls greet with Aman and reads the imported value."
            },
            {
                id:4,
                type:"console",
                stage:"Module values used",
                line:9,
                output:"Hello Aman, 42",
                description:"The imported function returns Hello Aman, and the named export supplies 42."
            }
        ]
    },
    {
        id:16,
        topic:"Array Methods",
        description:"Explore JavaScript array methods through interactive visualizations. Watch elements move, transform, filter, search, and combine as you master map(), filter(), reduce(), find(), some(), every(), sort(), and more.",
        difficulty:"Beginner",
        slug:"array-methods",
        component: ArrayMethodsTopic,
        code: `const scores = [3, 6, 9, 12];
    const doubled = scores.map((score) => score * 2);
    const even = scores.filter((score) => score % 2 === 0);
    const total = scores.reduce((sum, score) => sum + score, 0);
    console.log(doubled, even, total);`,
        visualization: {
            title:"Transform, select, and accumulate",
            type:"array-methods"
        },
        preview: {
            title:"Array methods",
            summary:"Array methods transform and inspect collections with concise reusable functions.",
            snippet:`const doubled = nums.map((n) => n * 2);\nconst filtered = nums.filter(Boolean);`,
            keyPoints:["map transforms values", "filter keeps matching items", "reduce combines values"]
        },
        conceptData: {
            title:"Core array methods",
            summary:"map transforms every element into a new array, filter selects elements that pass a test, and reduce combines elements into one accumulated result. These methods leave the original array unchanged unless the callback itself mutates it.",
            cards:[
                {
                    title:"map",
                    description:"Calls a callback for each present element and returns a new array containing each callback result. Use it when output length should correspond to input length.",
                    snippet:`const scores = [3, 6, 9];
const doubled = scores.map((score) => score * 2);
// [6, 12, 18]`
                },
                {
                    title:"filter",
                    description:"Calls a predicate for each present element and returns a new array containing only elements whose predicate is truthy. It may return an empty array.",
                    snippet:`const scores = [3, 6, 9, 12];
const even = scores.filter((score) => score % 2 === 0);
// [6, 12]`
                },
                {
                    title:"reduce",
                    description:"Carries an accumulator through the array and returns one final value. Provide an initial value to define the accumulator type and handle empty arrays safely.",
                    snippet:`const scores = [3, 6, 9];
const total = scores.reduce(
  (sum, score) => sum + score,
  0
);
// 18`
                }
            ],
            takeaways:["map returns one result per visited element", "filter keeps elements when the predicate is truthy", "reduce returns the final accumulator", "an explicit reduce initial value avoids empty-array edge cases"]
        },
        otherMethods: [
            { name:"forEach", description:"Runs a callback for each element without creating a result array.", snippet:`scores.forEach((score) => console.log(score));` },
            { name:"find", description:"Returns the first element that passes a test, or undefined if none match.", snippet:`scores.find((score) => score > 8);` },
            { name:"findIndex", description:"Returns the index of the first matching element, or -1 if none match.", snippet:`scores.findIndex((score) => score === 9);` },
            { name:"some", description:"Returns true when at least one element passes the test.", snippet:`scores.some((score) => score > 10);` },
            { name:"every", description:"Returns true only when every element passes the test.", snippet:`scores.every((score) => score > 0);` },
            { name:"includes", description:"Checks whether an array contains a specified value.", snippet:`scores.includes(6);` },
            { name:"flatMap", description:"Maps each element, then flattens the result by one level.", snippet:`scores.flatMap((score) => [score, score * 2]);` },
            { name:"slice", description:"Returns a shallow copy of a selected range without changing the original array.", snippet:`scores.slice(1, 3);` },
            { name:"sort", description:"Sorts array elements in place; provide a comparator for numeric ordering.", snippet:`[...scores].sort((a, b) => a - b);` }
        ],
        subtopics: [
            {
                id:"map",
                title:"map",
                input:"[3, 6, 9, 12]",
                steps:[
                    { id:0, stage:"Prepare map", current:"-", action:"Start mapping", result:[], description:"map visits each element and stores the callback result in a new array." },
                    { id:1, stage:"Map element 1", current:"3", action:"3 * 2 = 6", result:[6], description:"The callback transforms 3 into 6." },
                    { id:2, stage:"Map element 2", current:"6", action:"6 * 2 = 12", result:[6, 12], description:"The callback transforms 6 into 12." },
                    { id:3, stage:"Map element 3", current:"9", action:"9 * 2 = 18", result:[6, 12, 18], description:"The callback transforms 9 into 18." },
                    { id:4, stage:"Map element 4", current:"12", action:"12 * 2 = 24", result:[6, 12, 18, 24], description:"The callback transforms 12 into 24; map returns the completed array." },
                    { id:5, type:"console", stage:"Mapped array", current:"-", action:"doubled", result:[6, 12, 18, 24], output:"[6, 12, 18, 24]", description:"The mapped array contains one transformed value for each input element." }
                ]
            },
            {
                id:"filter",
                title:"filter",
                input:"[3, 6, 9, 12]",
                steps:[
                    { id:0, stage:"Prepare filter", current:"-", action:"Start filtering", result:[], description:"filter tests each element and begins with an empty result array." },
                    { id:1, stage:"Test element 1", current:"3", action:"3 % 2 === 0 -> false", result:[], description:"3 fails the predicate, so it is not included." },
                    { id:2, stage:"Test element 2", current:"6", action:"6 % 2 === 0 -> true", result:[6], description:"6 passes the predicate and is kept." },
                    { id:3, stage:"Test element 3", current:"9", action:"9 % 2 === 0 -> false", result:[6], description:"9 fails the predicate, leaving the result unchanged." },
                    { id:4, stage:"Test element 4", current:"12", action:"12 % 2 === 0 -> true", result:[6, 12], description:"12 passes the predicate and is added to the result." },
                    { id:5, type:"console", stage:"Filtered array", current:"-", action:"even", result:[6, 12], output:"[6, 12]", description:"filter returns a new array containing only elements that passed the predicate." }
                ]
            },
            {
                id:"reduce",
                title:"reduce",
                input:"[3, 6, 9, 12]",
                steps:[
                    { id:0, stage:"Prepare reduce", current:"-", action:"Start with 0", result:"0", description:"The second reduce argument sets the initial accumulator to 0." },
                    { id:1, stage:"Accumulate element 1", current:"3", action:"0 + 3", result:"3", description:"The callback adds 3 to the accumulator." },
                    { id:2, stage:"Accumulate element 2", current:"6", action:"3 + 6", result:"9", description:"The callback adds 6 to the previous result." },
                    { id:3, stage:"Accumulate element 3", current:"9", action:"9 + 9", result:"18", description:"The callback adds 9 to the previous result." },
                    { id:4, stage:"Accumulate element 4", current:"12", action:"18 + 12", result:"30", description:"The callback adds 12 to the previous result." },
                    { id:5, type:"console", stage:"Reduced value", current:"-", action:"total", result:"30", output:"30", description:"reduce returns the final accumulator as one value." }
                ]
            }
        ]
    },
    {
        id:17,
        topic:"Scope Chain",
        description:"Explore the JavaScript scope chain through an interactive visualization. Follow how variables are searched through nested lexical scopes, from the current function to its outer environments, and understand how JavaScript resolves variable access step by step",
        difficulty:"Intermediate",
        slug:"scope-chain",
                component: ScopeChainTopic,
                code: `const globalValue = "global";
const shared = "global shared";

function outer() {
    const outerValue = "outer";
    const shared = "outer shared";
    function inner() {
        const innerValue = "inner";
        console.log(innerValue);
        console.log(outerValue);
        console.log(shared);
        console.log(globalValue);
    }
    inner();
}
outer();`,
                visualization: {
                        title:"Lexical scope lookup",
                        type:"scope-chain"
                },
        preview: {
            title:"Scope chain",
            summary:"The scope chain is the lookup path JavaScript uses to find variables across nested lexical scopes.",
            snippet:`function outer() {\n  let message = "outer";\n  function inner() { console.log(message); }\n}`,
            keyPoints:["Inner can access outer", "Lookup walks outward", "Current scope checked first"]
        },
        conceptData: {
                        title:"Lexical scope and lookup",
                        summary:"JavaScript resolves an identifier by searching the current lexical environment, then each enclosing environment, and finally the global environment. The first matching binding wins.",
            cards:[
                                {
                                        title:"Local to outer lookup",
                                        description:"A function can read its own bindings and bindings in the scopes where it was defined. Lookup stops at the first matching name.",
                                        snippet:`const site = "global";
function outer() {
    const page = "outer";
    function inner() {
        console.log(page, site);
    }
}`
                                },
                                {
                                        title:"Global scope",
                                        description:"The global environment is the outermost lexical environment. It is checked only after all enclosing local scopes miss.",
                                        snippet:`const appName = "Visual Lab";

function showName() {
    return appName;
}`
                                },
                                {
                                        title:"Shadowing",
                                        description:"A binding in an inner scope can reuse an outer name. The inner binding shadows the outer one within its scope.",
                                        snippet:`const status = "global";
function render() {
    const status = "local";
    return status; // "local"
}`
                                },
                                {
                                        title:"Block scope",
                                        description:"let and const create bindings in their block. var is function-scoped, so its lookup behavior differs from block-scoped declarations.",
                                        snippet:`let result = "outside";
{
    let result = "inside";
    console.log(result); // "inside"
}
console.log(result); // "outside"`
                                },
                                {
                                        title:"Closures retain outer access",
                                        description:"A nested function keeps access to its lexical environment after the outer function returns. This is the same lookup chain used by closures.",
                                        snippet:`function makeReader() {
    const message = "remembered";
    return () => message;
}

const read = makeReader();
read(); // "remembered"`
                                },
                                {
                                        title:"Unresolved identifiers",
                                        description:"If no binding exists in the current scope or any outer scope, reading that identifier throws a ReferenceError.",
                                        snippet:`function readValue() {
    return missingValue;
}

readValue(); // ReferenceError`
                                }
            ],
                        takeaways:["lookup starts in the current lexical scope", "the nearest binding wins and can shadow outer names", "unresolved reads throw ReferenceError", "closures preserve access to outer lexical bindings"]
        },
                steps: [
                        {
                                id:0,
                                stage:"Local binding found",
                                line:9,
                                target:"innerValue",
                                value:"inner",
                                resolvedIn:"inner",
                                checkedScopes:["inner"],
                                output:"inner",
                                description:"innerValue is declared in inner, so lookup resolves immediately without checking parent scopes."
                        },
                        {
                                id:1,
                                stage:"Parent binding found",
                                line:10,
                                target:"outerValue",
                                value:"outer",
                                resolvedIn:"outer",
                                checkedScopes:["inner", "outer"],
                                output:"outer",
                                description:"outerValue is not local to inner, so JavaScript checks outer and finds it there."
                        },
                        {
                                id:2,
                                stage:"Nearest shadowing binding wins",
                                line:11,
                                target:"shared",
                                value:"outer shared",
                                resolvedIn:"outer",
                                checkedScopes:["inner", "outer"],
                                output:"outer shared",
                                description:"Both outer and global define shared. Lookup stops at outer, the nearest binding, so the global value is shadowed."
                        },
                        {
                                id:3,
                                stage:"Global binding found",
                                line:12,
                                target:"globalValue",
                                value:"global",
                                resolvedIn:"global",
                                checkedScopes:["inner", "outer", "global"],
                                output:"global",
                                description:"No local or outer binding exists for globalValue, so lookup reaches the global environment."
                        }
                ]
    },
    {
        id:18,
        topic:"Type Coercion",
        description:"Explore JavaScript type coercion through an interactive visualization. See how JavaScript automatically converts values between strings, numbers, and booleans during operations and comparisons, and understand the difference between implicit and explicit conversion.",
        difficulty:"Beginner",
        slug:'type-coercion',
        component: TypeCoercionTopic,
        code: `const joined = "5" + 2;
    const difference = "5" - 2;
    const isTruthy = Boolean("false");
    const explicitNumber = Number("5");
    console.log(joined, difference, isTruthy, explicitNumber);`,
        visualization: {
            title:"Coercion by operator",
            type:"type-coercion"
        },
        preview: {
            title:"Type coercion",
            summary:"Type coercion is JavaScript’s automatic conversion between types during operations.",
            snippet:`console.log("5" + 2);\nconsole.log("5" - 2);`,
            keyPoints:["Implicit conversion", "String vs number behavior", "Use strict comparisons when needed"]
        },
        conceptData: {
            title:"Implicit and explicit conversion",
            summary:"Operators and conditions can convert values implicitly. Number(), String(), and Boolean() make conversion explicit. The result depends on the operation and the value being converted.",
            cards:[
                {
                    title:"String concatenation",
                    description:"When + receives a string, it converts the other operand to a string and concatenates.",
                    snippet:`const result = "5" + 2;
console.log(result); // "52"`
                },
                {
                    title:"Numeric conversion",
                    description:"Subtraction and other arithmetic operators convert numeric strings to numbers before calculating.",
                    snippet:`const result = "5" - 2;
console.log(result); // 3`
                },
                {
                    title:"Truthy and falsy values",
                    description:"A non-empty string is truthy, even when its text is \"false\". Boolean() makes the conversion explicit.",
                    snippet:`console.log(Boolean("false")); // true
console.log(Boolean(""));      // false`
                },
                {
                    title:"Explicit conversion",
                    description:"Conversion functions show the intended type change directly in the code.",
                    snippet:`const count = Number("5");
const label = String(5);
console.log(count, label); // 5 "5"`
                },
                {
                    title:"Loose vs strict equality",
                    description:"Loose equality may coerce operands before comparing; strict equality compares without type conversion.",
                    snippet:`console.log("5" == 5);  // true
console.log("5" === 5); // false`
                }
            ],
            takeaways:["+ may concatenate while arithmetic converts to numbers", "non-empty strings are truthy", "prefer explicit conversion and strict equality when intent matters"]
        },
        variables:[],
        steps: [
            {
                id:0,
                type:"coercion",
                stage:"String concatenation",
                line:1,
                expression:"\"5\" + 2",
                conversion:"number 2 -> string \"2\"",
                output:"\"52\"",
                description:"With + and a string operand, JavaScript converts the number to a string and concatenates."
            },
            {
                id:1,
                type:"coercion",
                stage:"Numeric subtraction",
                line:2,
                expression:"\"5\" - 2",
                conversion:"string \"5\" -> number 5",
                output:"3",
                description:"Subtraction converts the numeric string to a number, then calculates 5 - 2."
            },
            {
                id:2,
                type:"coercion",
                stage:"Boolean conversion",
                line:3,
                expression:"Boolean(\"false\")",
                conversion:"non-empty string -> truthy",
                output:"true",
                description:"The string contains the word false, but it is non-empty, so its Boolean value is true."
            },
            {
                id:3,
                type:"coercion",
                stage:"Explicit number conversion",
                line:4,
                expression:"Number(\"5\")",
                conversion:"string \"5\" -> number 5",
                output:"5",
                description:"Number() explicitly converts the numeric string into the number 5."
            },
            {
                id:4,
                type:"console",
                stage:"Results logged",
                line:5,
                output:"\"52\", 3, true, 5",
                description:"The logged values show the result of each implicit or explicit conversion."
            }
        ]
    },
    {
        id:19,
        topic:"Optional Chaining & Nullish Coalescing",
        description:"Explore JavaScript ?. and ?? through an interactive visualization. See how optional chaining safely accesses nested properties without errors, while nullish coalescing provides fallback values only when data is null or undefined.",
        difficulty:"Beginner",
        slug:"optional-chaining-nullish-coalescing",
        component: OptionalChainingTopic,
        code: `const user = { profile: { name: "Aman" } };
    const missingUser = {};
    const safeName = missingUser.profile?.name;
    const displayName = safeName ?? "Guest";
    const blankLabel = "" ?? "Fallback";
    const zeroCount = 0 ?? 10;
    const greeting = user.profile?.name ?? "Guest";
    console.log(displayName, blankLabel, zeroCount, greeting);`,
        visualization: {
            title:"Safe access and nullish fallbacks",
            type:"optional-chaining-nullish"
        },
        preview: {
            title:"Optional chaining and nullish coalescing",
            summary:"Optional chaining safely works with nested values, while nullish coalescing only falls back on null or undefined.",
            snippet:`const user = { profile: { name: "Aman" } };\nconsole.log(user.profile?.name ?? "Guest");`,
            keyPoints:["Safe nested access", "Only nullish fallback", "Protects against runtime errors"]
        },
        conceptData: {
            title:"Optional chaining and nullish coalescing",
            summary:"Optional chaining stops a property, element, or method access when the value before ?. is null or undefined. Nullish coalescing supplies a fallback only for null or undefined, preserving other falsy values such as 0, false, and the empty string.",
            cards:[
                {
                    title:"Optional property access",
                    description:"Use ?. before a property when an earlier part of the chain may be null or undefined. The whole access returns undefined instead of throwing.",
                    snippet:`const city = user.profile?.address?.city;`
                },
                {
                    title:"Optional method calls",
                    description:"Use ?.() to call a method only when the method value is present. Arguments are not evaluated when the call short-circuits.",
                    snippet:`const result = service.onReady?.("loaded");`
                },
                {
                    title:"Optional element access",
                    description:"Use ?.[] to safely access an array index or a property with a computed key.",
                    snippet:`const firstItem = response.items?.[0];`
                },
                {
                    title:"Nullish fallback",
                    description:"The right side of ?? is used only when the left side is null or undefined.",
                    snippet:`const displayName = user.name ?? "Guest";`
                },
                {
                    title:"Falsy values stay intact",
                    description:"Unlike ||, ?? does not replace 0, false, or an empty string.",
                    snippet:`0 || 10;  // 10
0 ?? 10;  // 0
"" ?? "Fallback"; // ""`
                },
                {
                    title:"Nullish assignment",
                    description:"The ??= operator assigns a fallback only when the existing value is null or undefined.",
                    snippet:`let retries;
retries ??= 3; // 3`
                },
                {
                    title:"Operator grouping",
                    description:"Parenthesize when mixing ?? with && or ||; JavaScript does not allow them to be mixed ungrouped.",
                    snippet:`const label = (input || "") ?? "Untitled";`
                }
            ],
            takeaways:["?. short-circuits only on null or undefined", "?? preserves other falsy values", "parenthesize when mixing ?? with && or ||", "optional chaining does not make an undeclared root identifier safe"]
        },
        steps: [
            {
                id:0,
                type:"access",
                stage:"Optional access short-circuits",
                line:3,
                expression:"missingUser.profile?.name",
                accessResult:"undefined",
                leftValue:"undefined",
                fallback:"\"Guest\"",
                result:"pending",
                description:"missingUser.profile is undefined, so optional chaining stops before reading name."
            },
            {
                id:1,
                type:"fallback",
                stage:"Nullish fallback used",
                line:4,
                expression:"safeName ?? \"Guest\"",
                accessResult:"undefined",
                leftValue:"undefined",
                fallback:"\"Guest\"",
                result:"Guest",
                description:"Since safeName is undefined, ?? evaluates and returns the fallback."
            },
            {
                id:2,
                type:"fallback",
                stage:"Empty string preserved",
                line:5,
                expression:"\"\" ?? \"Fallback\"",
                accessResult:"not used",
                leftValue:"\"\"",
                fallback:"\"Fallback\"",
                result:"\"\"",
                description:"An empty string is not nullish, so the fallback is skipped."
            },
            {
                id:3,
                type:"fallback",
                stage:"Zero preserved",
                line:6,
                expression:"0 ?? 10",
                accessResult:"not used",
                leftValue:"0",
                fallback:"10",
                result:"0",
                description:"Zero is not nullish, so ?? keeps it instead of using 10."
            },
            {
                id:4,
                type:"access",
                stage:"Existing value passes through",
                line:7,
                expression:"user.profile?.name ?? \"Guest\"",
                accessResult:"Aman",
                leftValue:"Aman",
                fallback:"\"Guest\"",
                result:"Aman",
                description:"The property exists, so optional chaining returns Aman and the nullish fallback is not used."
            },
            {
                id:5,
                type:"console",
                stage:"Results logged",
                line:8,
                output:"Guest, \"\", 0, Aman",
                description:"The final values show both a used fallback and falsy values preserved by ??."
            }
        ]
    }

]