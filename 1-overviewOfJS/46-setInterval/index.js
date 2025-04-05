// const logger = (age) => {
//     console.log(`hello you are age ${age}`)
// }
//
// setInterval(logger, 2000, 34)
//

let timer = 10
const result = setInterval(() => {
    console.log(`hello you are  time ${timer}s`)
    timer--
    if (timer === 0) {
        clearInterval(result)
    }
}, 1000)