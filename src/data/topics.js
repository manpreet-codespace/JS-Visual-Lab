import ExecutionContext from "@/components/topics/ExecutionContext/ExecutionContext";
import Hoisting from "@/components/topics/Hoisting/Hoisting";

export const topics = [

    {
        id:0,
        topic:"Execution Context",
        description:"Execution Context — Understand how JavaScript creates an environment to prepare and execute code.",
        difficulty:"Beginner",
        slug:"execution-context",
        component:ExecutionContext,
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
                type:'memory'
            },
            {
                id:1,
                type:'execution',
                variableId:1,
            },
            {
                id:2,
                type:'execution',
                variableId:2
            },
            {
                id:3,
                type:'console',
                variableId:1,

            },
            {
                id:4,
                type:'console',
                variableId:2
            }
        ]

    },
    {

        id:1,
        topic:"Hoisting",
        description:"Explore JavaScript hoisting through an interactive visualization. See how variable and function declarations are processed during the creation phase, and understand var, let, const, and the Temporal Dead Zone step by step",
        difficulty:"Beginner",
        slug:'hoisting',
        component:Hoisting
    },
    {
        id:2,
        topic:"Closure",
        description:"Explore JavaScript closures through an interactive visualization. See how lexical scope allows inner functions to retain access to outer variables, preserve state, and access their surrounding environment even after execution ends.",
        difficulty:"Intermediate",
        slug:"closure",
        // component:Closure
    },
    {
        id:3,
        topic:"Callback",
        description:"Explore JavaScript callbacks through an interactive visualization. Watch how functions are passed as arguments and executed later, revealing how callback-based programming controls asynchronous tasks and execution flow.",
        difficulty:"Beginner",
        slug:"callback",
        // component:Callback
    },
    {
        id:4,
        topic:"this",
        description:"Master JavaScript this, call(), apply(), and bind() through an interactive visualization. See how function context changes dynamically and understand how each method controls the value of this during function execution.",
        difficulty:"Intermediate",
        slug:'this',
        // component:This
    },
    {
        id:5,
        topic:"Promises",
        description:"Explore JavaScript Promises through an interactive visualization. Watch asynchronous operations move through pending, fulfilled, and rejected states while learning how .then(), .catch(), and .finally() control the flow.",
        difficulty:"Intermediate",
        slug:'promises',
        // component:Promises
    },
    {
        id:6,
        topic:"async/await",
        description:"Explore JavaScript async/await through an interactive visualization. Watch asynchronous operations pause and resume execution as Promises settle, and understand how await, try/catch, and error handling shape the async flow.",
        difficulty:"Intermediate",
        slug:'async-await',
        // component:AsyncAwait
    },
    {
        id:7,
        topic:"Event Loop",
        description:"Visualize the JavaScript Event Loop in action. Follow tasks as they move between the Call Stack, Web APIs, Microtask Queue, and Callback Queue to understand how JavaScript handles asynchronous execution step by step.",
        difficulty:"Advanced",
        slug:"event-loop",
        // component:EventLoop
    },
    {
        id:8,
        topic:"Functions",
        description:"Explore JavaScript functions through an interactive visualization. See how function declarations, parameters, arguments, return values, and function calls work together to control reusable blocks of code and execution flow.",
        difficulty:"Beginner",
        slug:'functions',
        // component:Functions
    },
    {
        id:9,
        topic:"Shallow copy vs Deep copy",
        description:"Explore JavaScript shallow and deep copying through an interactive visualization. See how object references are shared or duplicated, and understand how nested objects behave when you modify copied data.",
        difficulty:"Intermediate",
        slug:'shallow-deep-copy',
        // component:ShallowDeepCopy
    },
    {
        id:10,
        topic:"DOM Event Propagation",
        description:"Explore JavaScript event propagation through an interactive DOM visualization. Follow events through capturing and bubbling phases, then see how event delegation uses propagation to efficiently handle interactions across nested elements.",
        difficulty:"Advanced",
        slug:'DOM-event-propagation'
    },
    {
        id:11,
        topic:"Debouncing",
        description:"Explore JavaScript debouncing through an interactive visualization. Watch rapid events wait for a pause before triggering a function, and understand how debouncing reduces unnecessary executions in search, input, and resize operations.",
        difficulty:"Intermediate",
        slug:"debouncing"
    },
    {
        id:12,
        topic:"Throttling",
        description:"Visualize JavaScript throttling in action and see how frequent events are limited to a controlled execution rate. Understand how throttling improves performance for scroll, mouse movement, and continuous event handling.",
        difficulty:"Intermediate",
        slug:"throttling"
    },
    {
        id:13,
        topic:"Destructuring",
        description:"Explore JavaScript destructuring through an interactive visualization. See how values are extracted from arrays and objects into variables, and understand default values, renaming, nested destructuring, and rest patterns step by step.",
        difficulty:"Beginner",
        slug:"destructuring"
    },
    {
        id:14,
        topic:"Spread and Rest operator",
        description:"Explore JavaScript spread and rest operators through an interactive visualization. See how ... expands arrays and objects, combines or copies data, and collects multiple values into a single variable or function parameter.",
        difficulty:"Beginner",
        slug:'spread-rest-operator'
    },
    {
        id:15,
        topic:"import/export",
        description:"Explore JavaScript modules through an interactive visualization. See how export and import share code between files, understand named and default exports, and visualize how modules organize large applications into reusable pieces.",
        difficulty:"Beginner",
        slug:'import-export'
    },
    {
        id:16,
        topic:"Array Methods",
        description:"Explore JavaScript array methods through interactive visualizations. Watch elements move, transform, filter, search, and combine as you master map(), filter(), reduce(), find(), some(), every(), sort(), and more.",
        difficulty:"Beginner",
        slug:"array-methods"
    },
    {
        id:17,
        topic:"Scope Chain",
        description:"Explore the JavaScript scope chain through an interactive visualization. Follow how variables are searched through nested lexical scopes, from the current function to its outer environments, and understand how JavaScript resolves variable access step by step",
        difficulty:"Intermediate",
        slug:"scope-chain"
    },
    {
        id:18,
        topic:"Type Coercion",
        description:"Explore JavaScript type coercion through an interactive visualization. See how JavaScript automatically converts values between strings, numbers, and booleans during operations and comparisons, and understand the difference between implicit and explicit conversion.",
        difficulty:"Beginner",
        slug:'type-coercion'
    },
    {
        id:19,
        topic:"Optional Chaining & Nullish Coalescing",
        description:"Explore JavaScript ?. and ?? through an interactive visualization. See how optional chaining safely accesses nested properties without errors, while nullish coalescing provides fallback values only when data is null or undefined.",
        difficulty:"Beginner",
        slug:"optional-chaining -&-nullish-coalescing"
    }

]