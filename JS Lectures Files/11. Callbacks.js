// Callbacks in JavaScript

// A callback is a function passed into another function as an argument,
// which is then invoked inside the outer function to complete some kind of routine or action.

// console.log("First Line")
// setTimeout(() => {
//     console.log("Inside setTimeout after 2 seconds")
// }, 2000);
// console.log("Last Line")

// In the above example, the function passed to setTimeout is a callback function.
// It will be executed after the specified delay (2 seconds) while the rest of the code continues to run.

// To print the above three lines in order with a delay of 2 seconds between each line, we can use callbacks(asynchronous):
// We will use CallBack Functions to achieve this/ 
// Callback Functions are functions that are passed as arguments to other functions and are executed after some operation is completed.

// function print(callback) { // Converted async code to sync code using CallBacks
//     setTimeout(() => {
//         console.log("Inside function print()"); 
//         callback();
//     }, 2000);
// }

// function callback() { console.log("Inside function callback()"); } // name of fn doesnt matter its still callback fn
// print(callback); // Callback Function

// Example: Printing lines in order with a delay of 2 seconds between each line using CallBacks
// console.log("First Line")
// setTimeout(() => {
//     console.log("Inside setTimeout after 2 seconds")
//     console.log("Last Line")
// }, 2000);
// Here, the second and third lines are printed inside the callback function of setTimeout, 
// ensuring they are executed after the delay, maintaining the desired order.

// Callback Hell
// When we have multiple nested callbacks, it can lead to code that is hard to read and maintain, 
// often referred to as "callback hell" or "pyramid of doom".

