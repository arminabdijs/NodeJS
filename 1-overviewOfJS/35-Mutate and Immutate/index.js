//mutate vs Immutate
//mutable vs immutable

let user = {
    id: 1,
    name: 'John Doe',
    age: 25
}

console.log(user)

user.job = "web Developer"//Mutate

console.log(user)

user.age = 12

console.log(user)
//----------------------------------------------------------------
let num1 = 12 //immutable

console.log(num1)

num1 = 15 //reAssistant

console.log(num1)

// references Types => Mutable
// primitive Types => Immutable

//----------------------------------------------------------------
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let reversedNumbers = number.reverse()//mutable

console.log("reverse numbers : " + reversedNumbers)

console.log("original numbers : " + number)

//----------------------------------------------------------------


let powNumber = number.map(Number => Number ** 2)

console.log("square numbers : " + powNumber)

console.log("original numbers : " + number)