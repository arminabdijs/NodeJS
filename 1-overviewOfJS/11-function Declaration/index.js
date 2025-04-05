function sayHi() {
    console.log("hello world")
}

function power2number() {
    let number = 2
    console.log(number ** 2)
}

sayHi()
sayHi()
sayHi()

power2number()


// ----------------------------------------------------------------


function addNumbers(num1, num2) {
    return num1 + num2
}

console.log(addNumbers(5, 7))

//----------------------------------------------------------------


function multiplyNumbers(num1 = 0, num2 = 0) {
    return num1 * num2
}

console.log(multiplyNumbers(5, 7))
console.log(multiplyNumbers(5))

// ----------------------------------------------------------------
