// DOM Travsersal
// Process of navigating through the DOM tree to access and manipulate elements to access diff nodes
// based in terms of parent, child, sibling relationships

console.log(document)

// Selecting Elements with built in methods

// getElementById
const para = document.getElementById("para")
para.innerText = "Lecture 2: id=para has been modified using getElementById"
para.style.color = "green"
para.style.fontSize = "20px"

// getElementsByClassName - Selects all elements with same class name (returns array as HTMLCollection)
const para2 = document.getElementsByClassName("para")
para2[0].innerText = "Lecture 2: class=para(1) at para[0] modified using getElementsByClassName"
para2[1].style.color = "purple"
console.log(para2)

// getElementsByTagName

// querySelector (more powerful than getElementById and getElementsByClassName)
const para3 = document.querySelector(".para")
para3.innerText = "Lecture 2: class=para modified using querySelector"
para3.style.color = "orange"
console.log(para3)

// querySelectorAll (returns array as NodeList)
const para4 = document.querySelectorAll(".para")
para4[1].innerText = "Lecture 2: class=para(2) at para4[1] modified using querySelectorAll"
para4[1].style.color = "red"
console.log(para4)

//let arr=[23,54,46,232,564,23]
//const newArr=arr.map((ele)=> ele) // does return new array
//arr.forEach((ele)=> console.log(ele)) //does not return new array
//console.log(newArr)

