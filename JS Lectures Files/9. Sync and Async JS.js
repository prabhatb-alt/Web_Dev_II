// Synchronous Javascript: It is a blocking code. Each line of code is executed one by one.
/*
console.log("Start");
for(let i=0; i<10000; i++){ console.log("Loop")};
console.log("End");
*/ 

// Asynchronous Javascript: It is a non-blocking code. Some lines of code can be executed later without blocking the main thread.
/*
console.log("First Line")
// setTimeout is an asynchronous function that executes the code inside it 
// after the specified time (2000 ms = 2 seconds) without blocking the main thread. 
setTimeout(() => {console.log("After 2 sec");}, 2000);
console.log("Second Line")*/

// Handling Asynchronicity: Callback Hell, Promises, Async/Await

// 1. Callback Hell - A callback is a function passed as an argument to another 
// function, which is executed after the first one completes.
