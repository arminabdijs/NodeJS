const myPromise = new Promise((resolve, reject) => {
    let isLogin = true;
    setTimeout(() => {
        if (isLogin) {
            resolve()
        } else {
            reject()
        }
    }, 2000)
})

const success = () => console.log("Success")
const error = () => console.log("Error")

// myPromise
//     .then(success)
//     .catch(error)

//----------------------------------------------------------------
myPromise
    .then(() => console.log("Success"))
    .catch(() => console.log("Error"))


//----------------------------------------------------------------
//send parameters to promise
const myPromise1 = new Promise((resolve, reject) => {
    let isLogin = true;
    setTimeout(() => {
        if (isLogin) {
            resolve("Login")
        } else {
            reject("Login failed")
        }
    }, 2000)
})

myPromise1
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
//----------------------------------------------------------------

let books = [{id: 1, title: "The Catcher in the Rye", price: 320_000}, {id: 2, title: "1984", price: 200_000}, {
    id: 3,
    title: "To Kill a Mockingbird",
    price: 250_000
}]

const addBook = (title, price) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (title && price) {
                const newBook = {id: books.length + 1, title, price}

                books.push(newBook)
                resolve(books)

            } else {
                reject("Book title or price is not available")
            }
        }, 2000)
    })
}

addBook("The 48 laws of power", 800_000)
    .then((res) => console.log(res))
    .catch((rej) => console.log(rej))


//----------------------------------------------------------------
//finally
const myPromise3 = new Promise((resolve, reject) => {
    let isLogin = true;
    setTimeout(() => {
        if (isLogin) {
            resolve()
        } else {
            reject()
        }
    }, 2000)
})

// myPromise3
//     .then(() => {
//         console.log("login")
//         console.log("promise completed")
//     }).catch(() => console.log("login failed"))


myPromise3
    .then(() => console.log("login"))
    .catch(() => console.log("login failed"))
    .finally(() => console.log("promise completed"))

//DRY : Don't Repeat Yourself (Don't Repeat Codes)
//----------------------------------------------------------------
//Chaining Handlers
const wordPromise = new Promise((resolve, reject) => {
    const word = "armin"
    setTimeout(() => {
        if (word) {
            resolve(word)
        } else {
            reject(new Error("Text is not a valid"))
        }
    }, 2000)
})

// wordPromise
//     .then((res) => {
//         console.log(res)
//         return res.split("")
//     })
//     .then((value) => {
//         console.log(value)
//         return value.reverse()
//     })
//     .then((value) => {
//         console.log(value)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

wordPromise
    .then((res) => res.split(""))
    .then((value) => value.reverse())
    .then((value) => console.log(value))
    .catch((err) => console.log(err))
//----------------------------------------------------------------
//Chaining Handlers task
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data fetched")
            resolve({id: 1, message: "Data fetched 💕❤️👌👍 "})
            reject(new Error("Failed to fetch data"))
        }, 2000)
    })
}

const parseData = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let parsedData = "parsed The Data was successfully => id:" + data.id + " And message: " + data.message
            resolve({parsed: parsedData})
            reject(new Error("Failed to parse data"))
        }, 1000)
    })
}

const showData = (response) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(response.parsed)
            resolve(response)
            reject(new Error("Failed to show data"))
        }, 1000)
    })
}

fetchData()
    .then(parseData)
    .then(showData)
    .catch((err) => console.log(err))