const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const mappedNumbers = numbers.map((number) => number * 2)

console.log(mappedNumbers)


//----------------------------------------------------------------
//callBack function
const sum = (num1, num2, callback) => {
    if ((num1 + num2) % 2 === 0) {
        callback("Even")
    } else {
        callback("Odd")
    }
}

sum(5, 7, (result) => {
    console.log(result)
})


// ----------------------------------------------------------------
function callbackFunction(result) {
    console.log(result)
}

sum(4, 7, callbackFunction)