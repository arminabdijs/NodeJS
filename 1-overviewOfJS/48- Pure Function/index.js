// Puer functions
const power = (number) => {
    return number ** 2
}

console.log(power(7))

//impure (Side effect)
const power1 = (number) => {
    console.log("number", number)
    return number ** 2
}

console.log(power1(7))


let fakeNumber = 10
//impure (Side Effects)
const power2 = (number) => {
    fakeNumber = 15
    return number ** 2
}

console.log(power2(7))

//impure 
const power3 = (number) => {
    return number ** 2 + Math.floor(Math.random() * 1000)
}

console.log(power3(7))


//pure
const power4 = (number) => {
    let sumNumber = 5
    return  (number ** 2)+ sumNumber
}

console.log(power4(5))