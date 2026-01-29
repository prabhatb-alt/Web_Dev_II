// Changing contenr and style of elements using DOM Traversal methods

// 1 .innerText(doesnt work on hidden elements unlike .textContent)
// 2. innerHTML
const container = document.querySelector(".container")
container.innerHTML = "<h3>This div with class=container modified using innerHTML</h3><p>New paragraph added inside container div</p>"

// 3. style.property = value(camelCase to be used)
container.style.border = "2px solid black"

// // 4. classList.add/remove/toggle/contains to add/remove/toggle/check classes
// const btn = document.querySelector("button")
// btn.classList.add("btn")
// //btn.classList.remove("btn") # it will remove the class
// //btn.classList.toggle("btn") // it will toggle the class
// //console.log(btn.classList.contains("btn")) // it will return true if class is present else false

// Creating and Removing Elements

// 1. .createElement: Used to create a new element
// 2. .appendChild: Used to append a child element to a parent element
// 3. .removeChild: Used to remove a child element from a parent element

const name = document.querySelector("#name")
const btn = document.querySelector(".btn")
const list = document.querySelector(".list")
btn.addEventListener("click", () => {
    // Fixing blank entries
    if (name.value === "") { alert("Enter name"); return; }
    // Creating an element
    const li = document.createElement("li")
    const dlt =document.createElement("button")

    dlt.innerText="Delete"
    li.innerText = name.value;

    dlt.addEventListener("click", () => {list.removeChild(li);})
    
    list.appendChild(li);
    
    li.appendChild(dlt);
    name.value = "";

});