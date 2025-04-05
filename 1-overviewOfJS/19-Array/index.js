let users1 = "Ali"
let users2 = "Qadir"
let users3 = "Amin"

console.log(users1, users2, users3)
//----------------------------------------------------------------
let users = ["Ali", "Qadir", "Amin", "Babak", "sasan", "Zahra"]
let products = ["Laptop", "Phone", "Milk"]

console.log(users)
console.log(users[1])
console.log(users[10]) //output undefined

// ----------------------------------------------------------------
console.log(users.length)

users.push("Armin")
console.log(users)

users.pop()
console.log(users)

users.unshift("Farid")
console.log(users)

users.shift()
console.log(users)

users.reverse()
console.log(users)

console.log(users.join())

console.log(users.join("--"))

console.log(users.slice(0, 2))

console.log(users.concat(products))

console.log(users.includes("Ali"))

console.log(users.indexOf("Ali"))

console.log(users.lastIndexOf("Ali"))

users.splice(1, 0, "Armin")
console.log(users)

users.splice(3, 1)
console.log(users)

users.sort()
console.log(users)
// ----------------------------------------------------------------
for (let i in users) {
    console.log(i, users[i])
}

for (let user of users) {
    console.log(user)
}

users.forEach((i) => {
    console.log(i)
})
// ----------------------------------------------------------------