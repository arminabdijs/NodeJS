console.log("hello world")
setTimeout(() => {
    console.log("Hello from setTimeout")
}, 3000)

console.log("how are you?")
setTimeout(() => {
    console.log("Hello again from setTimeout")
}, 4000)


setTimeout((age) => {
    console.log(`Hello you are age ${age}`)
}, 4000, 22)


const userAge = (age) => console.log(`Hello you are age ${age}`)
setTimeout(userAge, 4000, 22)


const loggerTimeout = setTimeout(userAge, 4000, 55)
clearTimeout(loggerTimeout)