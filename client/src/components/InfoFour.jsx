import React, { useState } from 'react';

export default function InfoFour() {
  const [isModalOpen, setIsModalOpen] = useState(false);
      const [modalContent, setModalContent] = useState('');
    
      const toggleModal = (content) => {
        setModalContent(content);
        setIsModalOpen(!isModalOpen);
      };
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-gray-900 bg-opacity-50" style={{ color: 'black' }}>
          <article className="modal-container bg-white rounded-lg overflow-hidden shadow-lg max-h-[400px] max-w-[500px] w-full">
            <header className="modal-container-header p-4 flex items-center justify-between border-b border-yellow-300">
              <span className="modal-container-title flex items-center gap-2 text-2xl font-bold">
               JavaScript
              </span>
              <button
                className="icon-button p-0 border-0 bg-transparent w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-150 hover:bg-gray-200"
                onClick={() => setIsModalOpen(false)}
              >
                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </header>
            <section className="modal-container-body p-6 overflow-y-auto max-h-[400px]" style={{ whiteSpace: 'pre-line' }}>
              {/* Render Modal Content with Line Breaks */}
              <p dangerouslySetInnerHTML={{ __html: modalContent }} />
            </section>
            <footer className="modal-container-footer p-4 flex items-center justify-end border-t border-gray-200"></footer>
          </article>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-grow">
        <div className="py-8 px-4 sm:px-8 lg:px-16 dark:bg-gray-900">
          <h1 className="text-6xl  font-semibold text-center text-gray-600 mb-12">MONGODB</h1>

          {/* Cards in a Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              <h3 className="text-xl font-semibold text-gray-700">Introduction to JavaScript</h3>
              <p className="text-gray-600 mt-2">JavaScript is a versatile, dynamically typed programming language used for..</p>
              <button
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                onClick={() => toggleModal(`
                 · JavaScript:  JavaScript is a versatile, dynamically typed programming language used for interactive web applications, supporting both client-side and server-side development, and integrating seamlessly with HTML, CSS, and a rich standard library..<br> 
                 · Client-side:  Involves controlling the browser and its DOM, handling user events like clicks and form inputs. Libraries such as AngularJS, ReactJS, and VueJS are commonly used.<br>
                 · Server-side:  Involves interacting with databases, manipulating files, and generating responses. With Node.js and frameworks like Express.js, JavaScript is also widely used on the server side..<br>
                 · Integration:  Seamlessly integrates with HTML, CSS, and the standard library.<br>
                 · Single-Threaded:  Executes one task at a time.<br>
                 · Interpreted:  Executes code line by line.<br>
                 · Dynamically Typed:  Variable types are determined at runtime.<br>
                 · "Hello, World!" Program:  The simplest introductory program in JavaScript.<br>
                 · The script tag is used to include JavaScript code inside an HTML document.<br>
                 · Asynchronous:  JavaScript can handle tasks like fetching data from servers without freezing the user interface.<br>
                 · Rich Ecosystem:  There are numerous libraries and frameworks built on JavaScript, such as React, Angular, and Vue.js, which make development faster and more efficient.<br><br><br>
                `)}
              >
                See More
              </button>
            </div>

             {/* Card 2 */}
             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              <h3 className="text-xl font-semibold text-gray-700"> Syntax</h3>
              <p className="text-gray-600 mt-2">JavaScript syntax refers to the rules and conventions dictating how code is...</p>
              <button
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                onClick={() => toggleModal(`
                 · JavaScript syntax refers to the rules and conventions dictating how code is structured and arranged within the JavaScript programming language. This includes statements, expressions, variables, functions, operators, and control flow constructs.<br>
                 · syntax : console.log("Basic Print method in JavaScript"); .<br>
                 · JavaScript syntax refers to the set of rules that determines how JavaScript programs are constructed:<br>
                  // Variable declaration
                    let c, d, e;

                    // Assign value to the variable
                    c = 5; 

                    // Computer value of variables
                    d = c;
                    e = c / d;<br>
                 · There are two types of values defined in JavaScript Syntax:

                    Fixed Values: These are known as the literals.
                    Variable values: These are called variables<br><br>
                `)}
              >
                See More
              </button>
            </div>

             {/* Card 3 */}
             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              <h3 className="text-xl font-semibold text-gray-700"> Variables</h3>
              <p className="text-gray-600 mt-2"> In JavaScript, a variable is a container for storing...</p>
              <button
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                onClick={() => toggleModal(`
                 · In JavaScript, a variable is a container for storing data values. It allows you to store a piece of information (such as a number, string, or object) and reference it by name in your program..<br> 
                 · Declaring Variables in JavaScript :<br>
                  Variables in JavaScript can be declared using three keywords:.<br>
                  1 var: Older way of declaring variables (used before ES6).<br>
                  2 let: A modern way to declare variables that allows reassignment but has block scope.<br>
                  3 const: A modern way to declare variables that cannot be reassigned (constant values).<br>
                 · Example of Declaring and Using Variables :<br>
                                    // Using var (old method)
                  var age = 25; // A variable to store a number
                  console.log(age); // Output: 25

                  // Using let (modern method)
                  let name = "Alice"; // A variable to store a string
                  console.log(name); // Output: Alice

                  // Using const (constant value)
                  const birthYear = 1998; // A variable to store a constant value
                  console.log(birthYear); // Output: 1998<br>

                 · Types of Values You Can Store in Variables..<br>
                  Primitive types: Number, String, Boolean, Undefined, Null, Symbol, BigInt <br>
                  Reference types: Object, Array, Function, etc.<br>
                 · Naming Rules: <br>

                 1· Must start with a letter (a-z, A-Z), underscore (_), or dollar sign ($).<br>
                 2· Subsequent characters can include letters, numbers, underscores, or dollar signs.<br>
                 3· JavaScript is case-sensitive.<br>
                 4· Reserved keywords (e.g., if, let, for) cannot be used as variable names.<br><br>
                `)}
              >
                See More 
              </button>
            </div>

             {/* Card 4 */}
             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              <h3 className="text-xl font-semibold text-gray-700">Data Types</h3>
              <p className="text-gray-600 mt-2">
              JavaScript has several data types that can be divided into...</p>
              <button
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                onClick={() => toggleModal(`
                  
                 · JavaScript has several data types that can be divided into primitive types and reference types. Here's a summary of each:<br>
                  Primitive Data Types.<br>
                 · Number: Represents both integer and floating-point numbers.<br>
                   let age = 25; // Integer
                   let temperature = 36.5; // Floating-point<br>

                 · String: Represents a sequence of characters (text).<br>
                   let name = "Alice"; // A string
                   let greeting = 'Hello, world!'; // A string<br>
                 · Boolean: Represents either true or false.<br>
                   let isActive = true; // A boolean value
                   let hasPermission = false; // A boolean value<br> 
                 · Undefined: A variable that has been declared but not assigned a value. By default, a variable is assigned undefined if not initialized.<br>
                  let notAssigned;
                  console.log(notAssigned); // Output: undefined<br>
                 · Null: Represents the intentional absence of any object value (i.e., "no value").<br>
                  let emptyValue = null; // Represents no value or object<br><br>
                  2. Reference Data Types<br>
                 · These are more complex data types and are mutable (can be changed). They store references to the values rather than the actual value itself.<br>
                 · Object: Represents a collection of key-value pairs (also called properties).<br>
                   let person = {
                      name: "John",
                      age: 30
                    };<br>
                 · Array: A special type of object used to store ordered collections of values.<br>
                  let numbers = [1, 2, 3, 4];
                  let fruits = ["apple", "banana", "cherry"];<br>
                 · Function: A block of reusable code that can be invoked to perform a task or calculation.<br>
                  function greet(name) {
                    return "Hello, " + name;
                  }<br><br>

                `)}
              >
                See More
              </button>
            </div>

             {/* Card 5 */}
             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              <h3 className="text-xl font-semibold text-gray-700">Operators</h3>
              <p className="text-gray-600 mt-2">JavaScript operators are symbols or keywords used to perform...</p>
              <button
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                onClick={() => toggleModal(`
                ·  JavaScript operators are symbols or keywords used to perform operations on values and variables. They are the building blocks of JavaScript expressions and can manipulate data in various ways.<br> 
                ·  There are various operators supported by JavaScript.<br>
                ·  Arithmetic Operators perform mathematical calculations like addition, subtraction, multiplication, etc.<br>
                  const sum = 5 + 3; // Addition
                  const diff = 10 - 2; // Subtraction
                  const p = 4 * 2; // Multiplication
                  const q = 8 / 2; // Division
                  console.log(sum, diff, p, q);<br>
                  output: 8 8 8 4 ;<br><br>
                ·  Assignment operators are used to assign values to variables. They can also perform operations like addition or multiplication before assigning the value.<br>
                  let n = 10;
                  n += 5;
                  n *= 2;
                  console.log(n);<br>
                  output: 30 ..<br>
            
                ·  Comparison operators compare two values and return a boolean (true or false). They are useful for making decisions in conditional statements.<br>
                  console.log(10 > 5);
                  console.log(10 === "10");<br> 
                  output : true
                           false <br>
                  > checks if the left value is greater than the right.
                  === checks for strict equality (both type and value).
                  Other operators include <, <=, >=, and !==.<br><br>
                ·  Comparison operators are mainly used to perform the logical operations that determine the equality or difference between the values.<br>
                  const a = true, b = false;
                  console.log(a && b); // Logical AND
                  console.log(a || b); // Logical OR<br>
                  output : false
                           true<br>
                  && returns true if both operands are true.
                  || returns true if at least one operand is true.
                  ! negates the boolean value. <br><br>        
                · Bitwise operators perform operations on binary representations of numbers.<br>
                 const res = 5 & 1; // Bitwise AND
                 console.log(res);<br>
                output: 1<br>
                · & performs a bitwise AND.
                · | performs a bitwise OR.
                · ^ performs a bitwise XOR.
                · ~ performs a bitwise NOT.<br><br>
              ·  The ternary operator is a shorthand for conditional statements. It takes three operands.<br>
                const age = 18;
                const status = age >= 18 ? "Adult" : "Minor";
                console.log(status);<br>
                output: Adult<br>
              ·  condition ? expression1 : expression2 evaluates expression1 if the condition is true, otherwise evaluates expression2.<br><br>
              · Comma Operator (,) mainly evaluates its operands from left to right sequentially and returns the value of the rightmost operand. <br>
                let n1, n2
                const res = (n1 = 1, n2 = 2, n1 + n2);
                console.log(res);<br>
                output: 3<br>
                Each expression is evaluated from left to right.
                The final result of the expression is the rightmost value.<br><br>
              ·  Unary operators operate on a single operand (e.g., increment, decrement).<br>
                let x = 5;
                console.log(++x); // Pre-increment
                console.log(x--); // Post-decrement (Output: 6, then x becomes 5)<br>
                output: 6 6<br>
                ++ increments the value by 1.
                — decrements the value by 1.
                typeof returns the type of a variable.<br><br>
              ·  JavaScript Relational operators are used to compare its operands and determine the relationship between them. They return a Boolean value (true or false) based on the comparison result.<br>
                const obj = { length: 10 };
                console.log("length" in obj);
                console.log([] instanceof Array);<br>
                output : true
                         true<br>
                in checks if a property exists in an object.
                instanceof checks if an object is an instance of a constructor. <br><br>
               · JavaScript String Operators include concatenation (+) and concatenation assignment (+=), used to join strings or combine strings with other data types.<br>
                const s = "Hello" + " " + "World";
                console.log(s); <br>
                output: "Hello World"<br>
                + concatenates strings.
                += appends to an existing string.<br><br>
                `)}
              >
                See More
              </button>
            </div>

             {/* Card 6 */}
             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              <h3 className="text-xl font-semibold text-gray-700">JavaScript Statements</h3>
              <p className="text-gray-600 mt-2">statement executes a block of code based on a condition.If the condition..</p>
              <button
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                onClick={() => toggleModal(`
              ·    JavaScript if-else :<br> 
                  JavaScript if-else statement executes a block of code based on a condition. If the condition evaluates to true, the code inside the “if” block executes; otherwise, the code inside the “else” block, if present, executes.
                  Such control statements are used to cause the flow of execution to advance and branch based on changes to the state of a program.<br>
                  // JavaScript program to illustrate If statement
                    let i = 10;

                    if (i > 15) console.log("10 is less than 15");

                    // This statement will be executed
                    // as if considers one statement by default
                    console.log("I am Not in if");<br>
                    output: I am Not in if<br><br>
              ·    JavaScript if-statement
                  It is a conditional statement used to decide whether a certain statement or block of statements will be executed or not i.e. if a certain condition is true then a block of statements is executed otherwise not.<br><br>
              ·    JavaScript nested-if statement
                  JavaScript allows us to nest if statements within if statements. i.e, we can place an if statement inside another if statement. A nested if is an if statement that is the target of another if or else. <br>
                  if (condition1) 
                  {
                    // Executes when condition1 is true
                    if (condition2) 
                    {
                        // Executes when condition2 is true
                    }
                  }<br><br>
              ·     JavaScript if-else-if ladder statement
                    Here, a user can decide among multiple options. The if statements are executed from the top down. As soon as one of the conditions controlling the if is true, the statement associated with that if is executed, and the rest of the ladder is bypassed. If none of the conditions is true, then the final else statement will be executed.<br> 
                       if (condition)
                            statement;
                        else if (condition)
                            statement;
                        .
                        .
                        else
                            statement;.<br><br>
              ·    JavaScript switch Statement<br><br>
                  The JavaScript switch statement evaluates an expression and executes a block of code based on matching cases. It provides an alternative to long if-else chains, improving readability and maintainability, especially when handling multiple conditional branches.<br>
                  switch (expression) {
                        case value1:
                            // code block 1;
                            break;
                        case value2:
                            // code block 2;
                            break;
                      ...
                        default:
                          // default code block;
                    }<br><br>
              ·   How Switch Statement Works
                     1 Evaluation: The expression inside the switch the statement is evaluated once.
                     2 Comparison: The value of the expression is compared with each case label (using strict equality ===).
                     3 Execution: If a match is found, the corresponding code block following the matching case the label is executed. If no match is found, the execution jumps to the default case (if present) or continues with the next statement after the switch block.
                     4 Break Statement: After executing a code block, the break statement terminates the switch statement, preventing execution from falling through to subsequent cases. If break is omitted, execution will continue to the next case (known as “fall-through”).
                     5 Default Case: The default case is optional. If no match is found, the code block under default is executed<br><br>
              ·       JavaScript Break Statement<br>
                     JavaScript break statement is used to terminate the execution of the loop or the switch statement when the condition is true.<br>
                     for (let i = 1; i < 6; i++) {
                          if (i == 4) break;
                          console.log(i);
                      }<br><br>
              ·        JavaScript Continue Statement<br>
                      The continue statement in JavaScript is used to break the iteration of the loop and follow with the next iteration.<br>
                      for (let i = 0; i < 10; i++) {
                          if (i % 2 == 0) continue;
                          console.log(i);
                      }<br><br>
                ·      JavaScript return Statement<br>
                      The JavaScript return statement is used to stop the function’s execution and optionally return a value to the caller. If there is no return statement in a function, then it returns undefined.<br>
                      // Return the product of a and b
                        function Product(a, b) {    
                            return a * b;
                        };

                        console.log(Product(6, 10));<br><br>
                  
                `)}
              >
                See More 
              </button>
            </div>

             {/* Card 7 */}
             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              <h3 className="text-xl font-semibold text-gray-700">JavaScript Loops</h3>
              <p className="text-gray-600 mt-2">Loops in JavaScript are used to reduce repetitive tasks by repeatedly executing...</p>
              <button
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                onClick={() => toggleModal(`
                  Loops in JavaScript are used to reduce repetitive tasks by repeatedly executing a block of code as long as a specified condition is true. This makes code more concise and efficient.<br> 
                  JavaScript for Loop<br>
                  The for loop repeats a block of code a specific number of times. It contains initialization, condition, and increment/decrement in one line.<br>
                  for (initialization; condition; increment/decrement) {
                          // Code to execute
                      }<br>
                  In this example

                  Initializes the counter variable (let i = 1).
                  Tests the condition (i <= 3); runs while true.
                  Executes the loop body and increments the counter (i++).<br><br>
                  JavaScript while Loop<br>
                  The while loop executes as long as the condition is true. It can be thought of as a repeating if statement. <br>
                   let i = 0;
                    while (i < 3) {
                        console.log("Number:", i);
                        i++;
                    }.<br>
                   output : Number: 0
                            Number: 1
                            Number: 2<br><br>
                  3. JavaScript do-while Loop<br>
                  The do-while loop is similar to while loop except it executes the code block at least once before checking the condition.<br>
                  let i = 0;
                    do {
                        console.log("Iteration:", i);
                        i++;
                    } while (i < 3);<br>
                  Output
                        Iteration: 0
                        Iteration: 1
                        Iteration: 2.<br><br>
                  4. JavaScript for-in Loop<br>
                  The for…in loop is used to iterate over the properties of an object. It only iterate over keys of an object which have their enumerable property set to “true”.<br>
                  const obj = { name: "Ashish", age: 25 };
                    for (let key in obj) {
                        console.log(key, ":", obj[key]);
                    }<br>
                    Output: name : Ashish
                            age : 25 <br><br>
                  5. JavaScript for-of Loop<br>
                  The for…of loop is used to iterate over iterable objects like arrays, strings, or sets. It directly iterate the value and has more concise syntax than for loop.<br>
                  let a = [1, 2, 3, 4, 5];
                      for (let val of a) {
                          console.log(val);
                      } <br>
                       output : 1 2 3 4 5 <br><br>         
                `)}
              >
                See More 
              </button>
            </div>

             {/* Card 8 */}
             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              <h3 className="text-xl font-semibold text-gray-700">Objects in Javascript</h3>
              <p className="text-gray-600 mt-2">An object in JavaScript is a data structure used to store..</p>
              <button
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                onClick={() => toggleModal(`
                 An object in JavaScript is a data structure used to store related data collections. It stores data as key-value pairs, where each key is a unique identifier for the associated value. Objects are dynamic, which means the properties can be added, modified, or deleted at runtime.<br> 
                 There are two primary ways to create an object in JavaScript: Object Literal and Object Constructor.

                 1. Creation sing Object Literal<br>
                  The object literal syntax allows you to define and initialize an object with curly braces {}, setting properties as key-value pairs.<br>
                  let obj = {
                        name: "Sourav",
                        age: 23,
                        job: "Developer"
                    };
                    console.log(obj);<br>
                  output : { name: 'Sourav', age: 23, job: 'Developer' }<br><br>
                  2. Creation Using new Object() Constructor<br>
                  let obj = new Object();
                        obj.name= "Sourav",
                        obj.age= 23,
                        obj.job= "Developer"

                        console.log(obj);<br>
                   output : { name: 'Sourav', age: 23, job: 'Developer' }.<br><br> 
                  1. Accessing Object Properties
                                You can access an object’s properties using either dot notation or bracket notation<br>
                                1
                                let obj = { name: "Sourav", age: 23 };

                                // Using Dot Notation
                                4
                                console.log(obj.name);

                                // Using Bracket Notation
                                7
                                console.log(obj["age"]);<br>
                                output: Sourav
                                        23<br><br>
                  2. Modifying Object Properties<br>
                  Properties in an object can be modified by reassigning their values.<br>
                      1
                      let obj = { name: "Sourav", age: 22 };
                      2
                      console.log(obj);
              
                      obj.age = 23;
                      5
                      console.log(obj);
                      Output : 
                      { name: 'Sourav', age: 22 }
                      { name: 'Sourav', age: 23 }<br><br>
                  3. Adding Properties to an Object<br>
                  You can dynamically add new properties to an object using dot or bracket notation.<br>
                      1
                      let obj = { model: "Tesla" };
                      2
                      obj.color = "Red";
                      3
                      console.log(obj);
                      Output :  { model: 'Tesla', color: 'Red' }<br><br>
                `)}
              >
               See More 
              </button>
            </div>

             {/* Card 9 */}
             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              <h3 className="text-xl font-semibold text-gray-700">Functions in JavaScript</h3>
              <p className="text-gray-600 mt-2"> Functions in JavaScript are reusable blocks of code designed to perform...</p>
              <button
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                onClick={() => toggleModal(`
                  Functions in JavaScript are reusable blocks of code designed to perform specific tasks. They allow you to organize, reuse, and modularize code. It can take inputs, perform actions, and return outputs.<br> 
                    function sum(x, y) { 
                        return x + y; 
                    }
                    console.log(sum(6, 9));<br>
                    Output: 15<br><br>
                  Function Syntax and Working :
                    A function definition is sometimes also termed a function declaration or function statement. Below are the rules for creating a function in JavaScript:

                    Begin with the keyword function followed by,
                    A user-defined function name (In the above example, the name is sum)
                    A list of parameters enclosed within parentheses and separated by commas (In the above example, parameters are x and y)
                    A list of statements composing the body of the function enclosed within curly braces {} (In the above example, the statement is “return x + y”).<br><br>
                  Return Statement :
                    In some situations, we want to return some values from a function after performing some operations. In such cases, we make use of the return. This is an optional statement. In the above function, “sum()” returns the sum of two as a result. <br><br>
                  Function Parameters : 
                    Parameters are input passed to a function. In the above example, sum() takes two parameters, x and y.<br><br>
                  Calling Functions :
                    After defining a function, the next step is to call them to make use of the function. We can call a function by using the function name separated by the value of parameters enclosed between the parenthesis.<br><br>
                  Arrow Functions :
                      Arrow functions are a concise syntax for writing functions, introduced in ES6, and they do not bind their own this context.<br>
                      Syntax:

                      let function_name = (argument1, argument2 ,..) => expression<br>
                      1
                      const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
                      2
                      const a2 = a.map(function (s) {
                      3
                          return s.length;
                      });

                      console.log("Normal way ", a2);
                      const a3 = a.map((s) => s.length);
      
                      console.log("Using Arrow Function ", a3);<br>
                      Output :
                      Normal way  [ 8, 6, 7, 9 ]
                      Using Arrow Function  [ 8, 6, 7, 9 ]<br><br>
                   Callback Functions :<br>
                        A callback function is passed as an argument to another function and is executed after the completion of that function.
                        1
                        function num(n, callback) {
                        2
                            return callback(n);
                        3
                        }
                        const double = (n) => n * 2;
                        console.log(num(5, double));

                        Output
                        10<br><br> 
                  Anonymous Functions :
                          Anonymous functions are functions without a name. They are often used as arguments to other functions.

                          setTimeout(function () {
                          2
                              console.log("Anonymous function executed!");
                          3
                          }, 1000);<br><br>
                  Nested Functions :
                        Functions defined within other functions are called nested functions. They have access to the variables of their parent function.

                        function outerFun(a) {
                        2
                            function innerFun(b) {
                        3
                                return a + b;
                        4
                            }
                        5
                            return innerFun;
                        6
                        }
                        const addTen = outerFun(10);
                        9
                        console.log(addTen(5));

                        Output
                        15<br><br>
                  Pure Functions :
                            Pure functions return the same output for the same inputs and do not produce side effects. They do not modify state outside their scope, such as modifying global variables, changing the state of objects passed as arguments, or performing I/O operations.

                            1
                            function pureAdd(a, b) {
                            2
                                return a + b;
                            3
                            }
                            console.log(pureAdd(2, 3));

                            Output
                            5<br><br>
                `)}
              >
                See More
              </button>
            </div>

            

            {/* Other cards... */}
          </div>
        </div>
      </div>
    </div>
  );
}
