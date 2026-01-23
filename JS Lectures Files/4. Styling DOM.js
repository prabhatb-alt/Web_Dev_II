// Changing contenr and style of elements using DOM Traversal methods

// 1 .innerText(doesnt work on hidden elements unlike .textContent)
// 2. innerHTML
const container = document.querySelector(".container")
container.innerHTML = "<h3>This div with class=container modified using innerHTML</h3><p>New paragraph added inside container div</p>"

// 3. style.property = value(camelCase to be used)
container.style.border = "2px solid black"

// 4. classList.add/remove/toggle/contains to add/remove/toggle/check classes
const btn = document.querySelector("button")
btn.classList.add("btn")
//btn.classList.remove("btn") # it will remove the class
//btn.classList.toggle("btn") // it will toggle the class
//console.log(btn.classList.contains("btn")) // it will return true if class is present else false