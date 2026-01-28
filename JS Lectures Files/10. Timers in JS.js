// Timers in JavaScript
// There are two main types of timers in JavaScript: setTimeout and setInterval
/*
// 1. setTimeout
// The setTimeout function is used to execute a function after a specified delay (in milliseconds).

setTimeout(() => {
    alert("Alert after 2 mins")
}, 2000); // 2000 milliseconds = 2 seconds*/

// 2. setInterval
// The setInterval function is used to execute a function repeatedly at specified intervals (in milliseconds).

// setInterval(() => {
//     console.log("setInterval after every 2 seconds");
// }, 2000); // This will log "setInterval" to the console every 2 seconds

// 3. Clearing Timers
// You can clear a timer set by setTimeout or setInterval using clearTimeout and clearInterval respectively.

// const timerID = setInterval(() => {console.log("setInterval with timerID")}, 2000);
// const timeoutID = setTimeout(() =>{clearInterval(timerID);}, 10000); // This will stop the interval after 10 seconds

// Example: Creating a simple countdown timer which starts at 1 and ends at 10
// let count = 1;
// const countdown = setInterval(() => {
//     console.log(count);
//     count+=1;
//     if (count > 10) { clearInterval(countdown);
//         console.log("Count end");}
// }, 1000); 

