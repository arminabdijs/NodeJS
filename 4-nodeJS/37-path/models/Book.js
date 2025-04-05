const db = require("../db.json")
const fs = require("fs");

const findAllBooks = () => {
    return new Promise((resolve, reject) => {
        resolve(db.books)
        reject(new Error("Failed to find books"))
    })
}

const findBook = (userID) => {
    return new Promise((resolve, reject) => {
        const user = db.books.find(user => user.id === userID)
        if (!user) {
            reject('User not found')
        } else {
            resolve(user)
        }
    })
}


const remove = (bookID) => {
    return new Promise((resolve, reject) => {

        const newBook = db.books.filter(book => book.id !== bookID)

        const bookExists = db.books.find(book => book.id === bookID)

        if (!bookExists) {
            reject('Book not found')
        } else {
            fs.writeFile(`${process.cwd()}/db.json`, JSON.stringify({...db, books: newBook}), (err) => {
                if (err) reject(err);
                resolve('Book deleted successfully')
            })
        }

    })
}

const create = (req, res) => {
    return new Promise((resolve, reject) => {
        let book = ""

        req.on("data", (data) => {
            book = book + data.toString()
        })

        req.on("end", () => {

            const newBook = {
                id: crypto.randomUUID(), ...JSON.parse(book), free: 1
            }
            db.books.push(newBook)


            fs.writeFile("db.json", JSON.stringify(db), (err) => {
                if (err) reject(err);
                resolve('The book has been added to the database!')


            })
        })

    })
}

const back = (bookID) => {
    return new Promise((resolve, reject) => {
        db.books.forEach(book => {
            if (book.id === bookID) {
                book.free = 1
                const findIndex = db.rents.findIndex(book => book.bookID === bookID)

                db.rents.splice(findIndex, 1)

            }
        })

        fs.writeFile("db.json", JSON.stringify(db), (err) => {
            if (err) reject(err);
            resolve('Book returned successfully');

        })

    })
}

const update = (bookID,req) => {
    return new Promise((resolve, reject) => {
        let book = ""

        req.on("data", (data) => {
            book = book + data.toString()
        })
        req.on("end", () => {
            const updatedBook = {id: bookID, ...JSON.parse(book)}
            const bookIndex = db.books.findIndex(book => book.id === bookID)

            if (bookIndex === -1) {
                reject('Book not found');

            } else {
                db.books[bookIndex] = updatedBook
                fs.writeFile("db.json", JSON.stringify(db), (err) => {
                    if (err)  reject(err);
                    resolve('Book updated successfully');

                })
            }

        })
    })
}


module.exports = {findAllBooks, remove, create, back, update,findBook}