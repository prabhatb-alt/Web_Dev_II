// Types of events in JavaScript

/*  // 1. Click Event
document.querySelector('.btn').addEventListener('click', function() {
    alert('Button Clicked!');
});

// 2. Mouseover Event
document.querySelector('.btn').addEventListener('mouseover', function() {
    console.log('Mouse is over the button');
});

// 3. Mouseout Event
document.querySelector('.btn').addEventListener('mouseout', function() {
    console.log('Mouse has left the button');
});

// 4. Keydown Event
document.addEventListener('keydown', function(event) {
    console.log('Key pressed: ' + event.key);
});

// 5. Keyup Event
document.addEventListener('keyup', function(event) {
    console.log('Key released: ' + event.key);
});
*/
// submit event
// It occurs when a form is submitted when user clicks on submit button

const form = document.querySelector('form');
form.addEventListener('submit', function() {
    alert("Form submitted!")
});