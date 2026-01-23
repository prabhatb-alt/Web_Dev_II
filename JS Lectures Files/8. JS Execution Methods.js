// JS Execution Methods: Debugger Statement
// The debugger statement invokes any available debugging functionality, such as setting a breakpoint.
// If no debugging functionality is available, this statement has no effect.
// When the debugger statement is executed, execution is paused, and the debugger (if available) is activated.

/*
debugger;
let a = 4597;
var b = 8999;

console.log(a);
console.log(b);

function print() {
    var c = 867;
    console.log(c);
    console.log("inside fn");
}

print();
*/

// Call Stack
// The call stack is a mechanism for an interpreter (like the JavaScript interpreter) to keep track of its place 
// in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc.

// The call stack is a stack data structure that stores information about the active subroutines of a computer program.
/*
function first() {
    second();
}
function second() {
    third();
}
function third() {
    console.trace();
}
first();
*/

// Call Staxk Overflow
// A call stack overflow occurs when there is no more space in the call stack to store information about active subroutines.
// This usually happens when there is excessive or infinite recursion in the code.

/*
function infinite() {
    infinite();
}
infinite();

// Uncaught RangeError: Maximum call stack size exceeded
*/

// Temporal Dead Zone (TDZ)
// The temporal dead zone is the time between entering a scope and the point where a variable declared with let or const is initialized.
// During this time, the variable cannot be accessed, and any attempt to do so will result in a ReferenceError.

//console.log(a); // undefined
//console.log(b); // ReferenceError: Cannot access 'b' before initialization
//console.log(c); // ReferenceError: Cannot access 'c' before initialization
/*
var a = 345;
let b  = 5674;

console.log(a); // 345
console.log(b); // 5674 */

// IMP EXAMPLE
let total = 40;
function calculate() {
    console.log(total);
    let total = 100
}
calculate()