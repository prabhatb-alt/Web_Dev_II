// Event Propagation is the process by which an event travels through the DOM tree.
// There are two main phases of event propagation: capturing phase and bubbling phase.

// In capturing phase, the event starts from the root and travels down to the target element.
// In bubbling phase, the event starts from the target element and travels up to the root.

// By default, event listeners are set to listen during the bubbling phase.
// You can change this behavior by passing a third argument to addEventListener() method.

// If you set the third argument to true, the event listener will listen during the capturing phase.

const outer = document.querySelector('.outer')
const container = document.querySelector('.container')
const button = document.querySelector('button')

/*
outer.addEventListener('click', () => {
    console.log('Outer')
})

container.addEventListener('click', () => {
    console.log('Div')
})
button.addEventListener('click', () => {
    console.log('Button')
})
*/
/*
// Event Capturing: Event travels from outer to inner element
outer.addEventListener('click', () => {console.log('Outer')}, true)
container.addEventListener('click', () => {console.log('Div')}, true)
button.addEventListener('click', () => {console.log('Button')}, true)
*/

// Event Bubbling: Event travels from inner to outer element
outer.addEventListener('click', () => {console.log('Outer')}, false)
container.addEventListener('click', () => {console.log('Div')}, false)
button.addEventListener('click', () => {console.log('Button')}, false)

// event.stopPropagation() can be used to stop the propagation of the event.