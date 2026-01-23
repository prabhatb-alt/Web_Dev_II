/* Introduction To DOM
The Document Object Model (DOM) is a programming interface for web documents. 
It represents the page so that programs can change the document structure, style, and content. 
The DOM represents the document as a tree of nodes, where each node corresponds to a part of the document, 
such as an element, attribute, or text.

Key Concepts of DOM:

1. Document Tree: The DOM represents the document as a hierarchical tree structure. 
    Each element in the HTML document is a node in the tree.

2. Nodes: There are different types of nodes in the DOM, including element nodes, text nodes, 
    and attribute nodes.

3. Accessing Elements: You can access and manipulate elements in the DOM using various methods 
    such as getElementById, getElementsByClassName, querySelector, etc.

4. Manipulating Elements: You can change the content, attributes, and styles of elements using properties 
    like innerHTML, setAttribute, style, etc.

5. Event Handling: The DOM allows you to handle events such as clicks, mouse movements, and 
    keyboard input using event listeners.

6. Traversing the DOM: You can navigate through the DOM tree using properties like 
parentNode, childNodes, firstChild, lastChild, nextSibling, and previousSibling.

Example:
// Accessing an element by its ID
let element = document.getElementById("myElement");

// Changing the content of the element
element.innerHTML = "Hello, World!";

// Adding an event listener to the element
element.addEventListener("click", function() {
    alert("Element clicked!");
});
*/

// Manipulating The HTML Document using elements from HTML
const para = document.querySelector(".para")
para.innerText = "This paragraph has been modified using DOM! Lecture 1"


// Manipulating styles using DOM
para.style.color = "green"
para.style.fontSize = "20px"

console.log(para)

// querySelectorAll
const paras = document.querySelectorAll(".para")
paras.forEach((p, index) => {
    p.innerText = `This is paragraph number ${index + 1} modified using querySelectorAll`
    p.style.color = "blue"
})

console.log(paras)