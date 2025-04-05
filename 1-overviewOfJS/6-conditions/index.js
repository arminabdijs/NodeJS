/*let num1 = 12
let num2 = 5

if (num1 - num2 === 8) {
    console.log(`output : ${num1 - num2}`)
} else if (num1 - num2 === 7) {
    console.log(`output : ${num1 - num2}`)
} else {
    console.log("oops")
}*/


/*if (false) {
    console.log("oops")
}*/

/*let isLogin = true

/!*if (isLogin){
    console.log("Welcome")
}*!/

if (isLogin === true) {
    console.log("Welcome")
}*/

// ternary condition
let getUserAge = +prompt("please enter your age :");
let getUserScore = +prompt("please enter your score :");

let loggedOutput = getUserAge >= 18 && getUserScore <= 20 ? "yes" : "no";

console.log(loggedOutput)
