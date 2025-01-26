---
marp: true
# theme: uncover
_class: invert
---
### OMC JavaScript Quest: Episode 1

**Presenter:** Aymen Ghemam
**Role:** Lead Software Engineer at Smeetz
**Goal:** `It works on my machine`

![bg](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDY0ejQ2MHpzbmx3czN4cnM4YTE1M2djZWtmc2hneTc3aTA5OW1qaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zOvBKUUEERdNm/giphy.gif)

---

## Why JavaScript?

- Most popular programming language
- Powers web interactivity
- Versatile: Frontend, Backend, Mobile, Desktop
- Ecosystem: Huge community and resources
- High demand in job market

---

## What is JavaScript?

- High-level, interpreted programming language
- Created in 1995 by Brendan Eich
- Primarily used for web development
- ECMAScript standard defines the language

---

## The Good, The Bad, and The Ugly

```javascript
// The Good
const good = () => ({
  flexibility: "Write frontend and backend",
  community: "Largest package ecosystem",
  evolution: "ES6+ modern features",
  async: "Non-blocking I/O",
});

// The Bad
typeof null; // 'object' (historical baggage)
0.1 + 0.2 === 0.3; // false (Eeeh, the good ol' floating point precision)

// The Ugly
console.log([] + []); // "" (wat?)
```

---

## Core Concepts - Variables and Data Types

---

### Variable Declarations

```javascript
// Three ways to declare variables
var oldSchool = "Open Minds"; // Function-scoped
let modern = "Open Minds"; // Can be reassigned
const constant = "Opem Minds"; // Cannot be reassigned
```

---

### Primitive vs Reference Types

```javascript
// Primitive Types
let number = 42; // Number
let text = "Hello"; // String
let flag = true; // Boolean
let nothing = null; // Null
let undefined = undefined; // Undefined

// Reference Types
let array = [1, 2, 3]; // Array
let object = { key: "value" }; // Object
let func = () => {}; // Function
```

---

## Arrays and Object Literals

---

### Arrays

```javascript
// Array operations
let fruits = ["apple", "banana", "cherry", "orange"];
fruits.push("date"); // Add to end
fruits.unshift("apricot"); // Add to start
fruits.pop(); // Remove last
fruits.shift(); // Remove first

// Array methods
fruits.map((fruit) => fruit.toUpperCase());
fruits.filter((fruit) => fruit.length > 5);
fruits.find((fruit) => fruit === "apple");
```

---

### Object Literals

```javascript
// Object creation and manipulation
let person = {
  name: "Alice",
  age: 30,
  greet() {
    return `Hello, I'm ${this.name}`;
  },
};

// Destructuring
const { name, age } = person;
```

---

## Functions and Methods

---

### Function Declarations

```javascript
function sum(a, b) {
  return a + b;
}

const sum = (a, b) => a + b;

const sum = function (a, b) {
  return a * b;
};
```

---

### String, Array, and Object Methods

```javascript
// String methods
let str = "Hello, World!";
str.toLowerCase(); // "hello, world!"
str.includes("World"); // true
str.replace("World", "Alice"); // "Hello, Alice!"
str.split(","); // ["Hello", " World!"]

// Array methods
let numbers = [1, 2, 3, 4, 5];
numbers.reduce((a, b) => a + b, 0); // Sum
numbers.find((n) => n > 3); // 4
```

---

## Loops and Conditionals

---

### Conditional Statements

```javascript
// If-else and Switch
if (condition) {
  // Do something
} else if (anotherCondition) {
  // Do something else
} else {
  // Default action
}

switch (value) {
  case 1:
    // Action for 1
    break;
  default:
  // Default action
}
```

---

### Loops

```javascript
// Different loop types
for (let i = 0; i < 5; i++) {
  console.log(i);
}

const array = [1, 2, 3];
array.forEach((item) => console.log(item));

while (condition) {
  // Repeat while true
}
```

---

## Scope and Context

```javascript
// Global Scope
let globalVar = "I'm global";

function exampleScope() {
  // Function Scope
  let functionVar = "Function specific";

  if (true) {
    // Block Scope (let and const)
    let blockVar = "Block specific";
  }
}
```

---

## OOP

---

### Classes and Inheritance

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}
```

---

## DOM Manipulation: The fun part!

---

### (DOM: Document Object Model)

It represents the structure of a document as a tree of objects.
Every web page is a document, and every element on the page is an object in the document.

---

### DOM Manipulation

```javascript
// Selecting elements
document.getElementById("myElement");
document.querySelector(".class");
document.querySelectorAll(".something");
document.getElementsByTagName("p");

// Changing content
element.innerHTML = "New content";
element.style.color = "red";
element.classList.add("new-class");
element.classList.remove("old-class");

// Creating elements
const newDiv = document.createElement("div");
parentElement.appendChild(newDiv);
```

---

## Events: The javascript way

```javascript
// Event Handling
button.addEventListener("click", (event) => {
  console.log("Button clicked!");
});

document.addEventListener("DOMContentLoaded", () => {
  // Page fully loaded
});
```

More events: `mouseover`, `mouseout`, `keydown`, `keyup`, `submit`, `change`, etc.

---

## Async/Await: Oh wait!

---

### Synchronous vs Asynchronous

```javascript
// Synchronous
console.log("First");
console.log("Second");
console.log("Third");

// Asynchronous
console.log("First");
setTimeout(() => console.log("Second"), 1000);
console.log("Third");
```

---

```javascript
// Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    // Async operation: takes some time
    if (success) {
      resolve("Done successfully");
    } else {
      reject("Failed");
    }
  });
}

// Async/Await
async function getData() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
```

---

## Let's build a game!

check `/mini-game` folder

---

## Best Practices

- Use `const` and `let`
- Be consistent
- Avoid global variables
- Handle errors, please!
- Write clean, readable code

---

## Resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [W3Schools](https://www.w3schools.com/js/)

---

## Q&A

---

**Thank You!**
