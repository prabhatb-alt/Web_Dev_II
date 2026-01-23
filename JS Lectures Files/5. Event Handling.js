// Event Handling is the process of capturing events triggered by user interactions
// such as clicks, key presses, mouse movements, etc., and responding to them
// using JavaScript functions known as event handlers or event listeners.

// Event Listeners are functions that are called when a specific event occurs on a particular element.

// We use addEventListener method to attach an event listener to an element.

// Example: Adding a click event listener to a button element
//const button = document.querySelector('button');
//button.addEventListener('click', function() {
//    alert('Button was clicked!');
//    console.log("Button was clicked event listener added.");
//});

// Example of some events: mouseover, mouseout, keydown, keyup, submit, etc.

// Mouseover example - color change + alert on hover
//button.addEventListener('mouseover', function() {
//    alert("Button was clicked with mouseover event!");
//    button.style.backgroundColor = 'lightblue';
//    console.log("Button clicked using mouseover")
//});

// removeEventListener can be used to remove an event listener from an element
// Example: Removing the click event listener from the button after it is clicked once
function message() {
    alert('Button was clicked! This listener will be removed now.');
}
//const button2 = document.querySelector('button');
//button2.removeEventListener('click', message);

// Event Object
// It is an object that it is automatically passed to the event handler function
// when an event occurs. It contains useful information about the event such as
// the type of event, the target element, mouse coordinates, key pressed, etc.

// Example: Using the event object to get mouse coordinates on button click
const button = document.querySelector('button');
button.addEventListener('click', function(event) {
    alert('Button clicked at coordinates: X=' + event.clientX + ', Y=' + event.clientY);
    console.log("Button clicked at coordinates: X=" + event.clientX + ", Y=" + event.clientY);
});