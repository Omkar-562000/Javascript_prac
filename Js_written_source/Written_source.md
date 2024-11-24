Variables in javascript are used to store data that can be refrenced and manipulated throughout a program .

Javascript variables are declared using var, let , or const .

Question no 1 
1) What is a Variable ?
Ans :- A variable is a named storage for data .Its value can be changed (except for const )during program execution 

2) How to declare variables ?
Ans :- Syntax for variables in javascript :

Input code :-
    var variableName;
    let variableName;
    const variableName = value;

*Rules for Variables Names 
1) Must start with a letter , underscore(_) , or dollar sign ($).
2) Can contain letters ,digits , underscores , or dollar signs. 
3) Cannot used reserved keywords ( eg :- let ,const , var).

3) How this variables are been declare on what basis ?
Ans :-  a. var 
    * Function-scoped : Accessible within the function in which its declared .
    * Redeclaration : Can be redeclared within the same scope /
    * Hoisting : Variables declared with var are hoisted to the top of their scope , but they are undefined until assignment 

        b. let 
    * Block-scoped : Accessible only within the block {} where its declared .
    * Redeclaration : Cannot be redeclared within the same scope . 
    * Hoisting : Hoisted but not initialized . Accessing before declaration throws a refrence error 

        c. const 
    * Block - Scoped : Like let , but with additonal restrictions . 
    * Constant value : Once assigned , cannot be changed .
    * Requires Initialization : Must be initialized at the time of declaration 
    * Hoisting : Hoisted but not initialized .

4) What is Hoisting ?
Ans :- Hoisting is a behaviour where variable and function declarations are moved to the top of their scope before execution . 

5) Explain the types of variable scope ?
Ans :- a. Function scope :- 
Variables declared using var inside a function are function-scoped.
These variables are accessible only within the function where they are declared.

Notes:
Variables declared with var are not accessible outside their parent function.


b.  Global Scope :- 
A variable declared outside of any function or block has a global scope.
Global variables are accessible from anywhere in the code, including inside functions and blocks.

Notes:
Avoid excessive use of global variables to prevent naming conflicts.


c.  Block Scope
Variables declared using let or const are block-scoped.
These variables are accessible only within the block {} where they are defined.

d. Lexical (Nested) Scope
JavaScript supports lexical scoping, meaning a function can access variables declared in its parent scope.
Inner functions can access variables declared in outer functions.

e. Module Scope
Variables declared inside a module (e.g., using ES6 import/export) are scoped to that module.
These variables are not accessible globally.

Notes:
Module scope is enforced in ES6 modules.

f. Hoisting and Scope 
* Hoisting in Function Scope (var)
Variables declared with var are hoisted and initialized to undefined.
* Hoisting in Block Scope (let and const)
Variables declared with let and const are hoisted but remain uninitialized until their declaration is encountered.


6) Data types for variables
Variables can store different types of data :
   1. Number: let x = 5;
   2. String: let name = "Alice";
   3. Boolean: let isTrue = true;
   4. Object: let obj = { key: "value" };
   5. Array: let arr = [1, 2, 3];
   6. Function: let greet = function() { return "Hello"; };

7) Important point :
Best Practices
a)Use let and const:
1.Use const for values that won't change.
2.Use let for values that may change.
3.Avoid using var.

b)Descriptive Names:
Use meaningful variable names like userName or isLoggedIn.

c)Avoid Global Variables:
Limit variables to their necessary scope to avoid conflicts.

d)Initialize Variables:
Always initialize variables when declaring them.