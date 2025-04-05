const sum = (num1, num2, func) => {
    func()
    return num1 + num2;
}

console.log(sum(12, 15, () => {
    console.log("Higher order Functions")
}))


// ----------------------------------------------------------------
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.map((number) => {
    console.log(number)
})

// ----------------------------------------------------------------
function testFunc() {
    console.log("Test Function")
}

console.log(sum(12, 13, testFunc))


//----------------------------------------------------------------
const func = (param) => {
    let num1 = param
    return (param2) => {
        console.log("Inner function Body" + param2)
    }
}
func(8)(9)

//----------------------------------------------------------------
const func1 = (param) => {
    let num1 = 12
    return (param2) => {
        return param + param2 + num1
    }
}
console.log(func1(8)(2))

//----------------------------------------------------------------
const sum2 = (param) => {
    return (param2) => {
        return (param3) => {
            return param + param2 + param3
        }
    }
}

console.log(sum2(1)(2)(3))

//----------------------------------------------------------------
const sum3 = (param) => (param2) => (param3) => param + param2 + param3

console.log(sum3(1)(2)(3))