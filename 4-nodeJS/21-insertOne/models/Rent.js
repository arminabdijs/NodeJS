const db = require("../db.json");
const fs = require("fs");

const rent = (req) => {
    return new Promise((resolve, reject) => {
        let reqBody = ""

        req.on("data", (data) => {
            reqBody = reqBody + data.toString()
        })

        req.on("end", () => {
            const {userID, bookID, startDate, endDate} = JSON.parse(reqBody)


            const isFreeBook = db.books.some(book => book.id === bookID && book.free === 1)
            const isExistenceOfUser = db.users.find(user => user.id === userID)
            const isExistenceOfBook = db.books.find(book => book.id === bookID)

            if (isFreeBook) {
                db.books.forEach(book => {
                    if (book.id === bookID) {
                        book.free = 0
                    }
                })
                const newRent = {
                    id: crypto.randomUUID(), userID, bookID, startDate, endDate
                }

                db.rents.push(newRent)

                fs.writeFile("db.json", JSON.stringify(db), (err) => {
                    if (err) reject(err)
                    resolve("Book Reserved successfully")
                })
            } else if (!isFreeBook) {
                reject("The desired book is not available")
            } else if (isExistenceOfUser === -1) {
                reject("user not fond")
            } else if (isExistenceOfBook === -1) {
                reject("book not fond")
            } else {
                reject("request not fond")
            }
        })
    })
}

module.exports={
    rent
}