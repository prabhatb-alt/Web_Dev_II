let obj = {
    name: "Alice",
    age: 30,
    city: "New York"
}

console.log(obj)
console.log(obj.name)
console.log(obj['age'])

obj.age = 31
console.log(obj.age)

obj.country = "USA"
console.log(obj)

delete obj.city
console.log(obj)

