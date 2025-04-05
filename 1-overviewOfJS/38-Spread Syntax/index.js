let users = ["Armin", "John", "Ali", "Amir"]

let users2 = [...users]

users2.push("Babak")

console.log("Users", users)
console.log("Users2", users2)

let mainUsers = ["Qadir", "Sasan"]

const concatUsers = [...users, ...mainUsers]
console.log(concatUsers)

let numbers = [20, 30, 40,]

const logNumber = (num1, num2, num3) => {
    console.log(num1, num2, num3)
}

logNumber(...numbers)


const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
}

const updateMyVehicle = {
    type: 'car',
    year: 2021,
    color: 'yellow'
}

console.log({...updateMyVehicle, ...myVehicle})