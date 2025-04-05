// ESM => Es Module | CommonJS
// export --> module.exports.folan = folan
// export default --> module.exports = {....}
// import --> require()

// export --> module.exports.folan = folan
const {isLogin} = require("./funcs/funcs")
console.log(isLogin("ramin"))


// export default --> module.exports = {....}
const funcs = require("./funcs/funcs")
console.log(funcs.isLogin("ramin"))
console.log(funcs.isEmail("arminabdijs@gmail.com"))