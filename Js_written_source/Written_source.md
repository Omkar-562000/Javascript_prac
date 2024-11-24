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

Example input code :

console.log(hoistedVar); // Output: undefined
var hoistedVar = 10;

console.log(hoistedLet); // Error: Cannot access 'hoistedLet' before initialization
let hoistedLet = 20;

5) Explain the types of variable scope ?
Ans :- a. Function scope :- 
Variables declared using var inside a function are function-scoped.
These variables are accessible only within the function where they are declared.

For example :-
Input code :
   function functionScopeExample() {
  var functionVar = "I am function-scoped";
  console.log(functionVar); // Output: I am function-scoped
}

// console.log(functionVar); // Error: functionVar is not defined
functionScopeExample();

Notes:
Variables declared with var are not accessible outside their parent function.


b.  Global Scope :- 
A variable declared outside of any function or block has a global scope.
Global variables are accessible from anywhere in the code, including inside functions and blocks.

For example :- 
Input code :
// Global Scope
let globalVar = "I am global";

function accessGlobal() {
  console.log(globalVar); // Output: I am global
}

accessGlobal();
console.log(globalVar); // Output: I am global

Notes:
Avoid excessive use of global variables to prevent naming conflicts.


c.  Block Scope
Variables declared using let or const are block-scoped.
These variables are accessible only within the block {} where they are defined.

For example :- 
Input code :-
function blockScopeExample() {
  if (true) {
    let blockVar = "I am block-scoped";
    const anotherBlockVar = "I am also block-scoped";
    console.log(blockVar); // Output: I am block-scoped
    console.log(anotherBlockVar); // Output: I am also block-scoped
  }
  // console.log(blockVar); // Error: blockVar is not defined
  // console.log(anotherBlockVar); // Error: anotherBlockVar is not defined
}

blockScopeExample();

d. Lexical (Nested) Scope
JavaScript supports lexical scoping, meaning a function can access variables declared in its parent scope.
Inner functions can access variables declared in outer functions.

For example:- 
Input code :-
function outerFunction() {
  let outerVar = "I am from the outer scope";

  function innerFunction() {
    console.log(outerVar); // Output: I am from the outer scope
  }

  innerFunction();
}

outerFunction();
