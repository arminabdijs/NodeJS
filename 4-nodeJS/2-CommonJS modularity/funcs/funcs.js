const isLogin = (userName) => {
    if (userName === "armin") {
        return true
    } else {
        return false
    }
}

const isEmail = (email) => {
    if (email === "arminabdijs@gmail.com") {
        return true
    } else {
        return false
    }

}

module.exports.isLogin = isLogin
exports.isLogin = isLogin

module.exports = {isLogin, isEmail}