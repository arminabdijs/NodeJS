const http = require('http')
const fs = require('fs')
const url = require('url')
const db = require("./db.json")

const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === '/api/books') {
        fs.readFile('db.json', (err, db) => {
            if (err) {
                throw err
            }

            const data = JSON.parse(db)

            console.log(data.books)
            res.writeHead(200, {"content-type": "application/json"})
            res.write(JSON.stringify(data.books))
            res.end()
        })
    }
    else if (req.method === "GET" && req.url === '/api/users') {
        fs.readFile('db.json', (err, db) => {
            if (err) {
                throw err
            }

            const data = JSON.parse(db)

            res.writeHead(200, {"content-type": "application/json"})
            res.write(JSON.stringify(data.users))
            res.end()
        })
    }
    else if (req.method === "DELETE" && req.url.startsWith("/api/books")) {

        const parseUrl = url.parse(req.url, true)
        const bookID = parseUrl.query.id

        const newBook = db.books.filter(book => book.id !== bookID)

        const bookExists = db.books.find(book => book.id === bookID)

        if (!bookExists) {
            console.log('Book not found');
            res.writeHead(404, {"content-type": "application/json"});
            res.write(JSON.stringify({message: "Book not found"}))
            res.end();
        } else {
            fs.writeFile("db.json", JSON.stringify({...db, books: newBook}), (err) => {
                if (err) throw err;
                console.log('Book deleted successfully');
                res.writeHead(200, {"content-type": "application/json"});
                res.write(JSON.stringify({message: "Book deleted successfully"}))
                res.end();
            })
        }

    }
    else if (req.method === "POST" && req.url === "/api/books") {
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
                if (err) throw err;
                console.log('The book has been added to the database!')
                res.writeHead(201, {"content-type": "application/json"});
                res.write(JSON.stringify({message: "Book added successfully"}))
                res.end();
            })
        })
    }
    else if (req.method === "PUT" && req.url.startsWith("/api/books/back")) {
        const urlParser = url.parse(req.url, true)
        const bookID = urlParser.query.id

        db.books.forEach(book => {
            if (book.id === bookID) {
                book.free = 1
            }
        })

        fs.writeFile("db.json", JSON.stringify(db), (err) => {
            if (err) throw err;
            console.log('Book returned successfully');
            res.writeHead(200, {"content-type": "application/json"});
            res.write(JSON.stringify({message: "Book returned successfully"}))
            res.end();
        })
    }
    else if (req.method === "PUT" && req.url.startsWith("/api/books")) {
        const urlParser = url.parse(req.url, true)
        const bookID = urlParser.query.id
        let book = ""
        req.on("data", (data) => {
            book = book + data.toString()
        })
        req.on("end", () => {
            const updatedBook = {id: bookID, ...JSON.parse(book)}
            const bookIndex = db.books.findIndex(book => book.id === bookID)

            if (bookIndex === -1) {
                console.log('Book not found');
                res.writeHead(404, {"content-type": "application/json"});
                res.write(JSON.stringify({message: "Book not found"}))
                res.end();
            } else {
                db.books[bookIndex] = updatedBook
                fs.writeFile("db.json", JSON.stringify(db), (err) => {
                    if (err) throw err;
                    console.log('Book updated successfully');
                    res.writeHead(200, {"content-type": "application/json"});
                    res.write(JSON.stringify({message: "Book updated successfully"}))
                    res.end();
                })
            }

        })
    }
    else if (req.method === "POST" && req.url === "/api/users") {
        let user = ""
        req.on("data", (data) => {
            user = user + data.toString()
        })

        req.on("end", () => {
            const {name, username, email, address, phone} = JSON.parse(user)
            const newUser = {
                id: crypto.randomUUID(), name, username, email, address, phone, crime: 0, role: "USER"
            }

            const isUserExist = db.users.find(user => user.name === name || user.username === username || user.email === email || user.phone === phone)


            if (name === "" || username === "" || email === "" || address === "" || phone === "") {
                console.log("User data are not valid");
                res.writeHead(422, {"content-type": "application/json"});
                res.write(JSON.stringify({message: "User data are not valid"}))
                res.end();
                return;

            }

            if (isUserExist) {
                console.log('User already exists');
                res.writeHead(409, {"content-type": "application/json"});
                res.write(JSON.stringify({message: "User already exists"}))
                res.end();
                return;
            }

            db.users.push(newUser)

            fs.writeFile("db.json", JSON.stringify(db), (err) => {
                if (err) throw err;
                console.log('User registered successfully!');
                res.writeHead(201, {"content-Type": "application/json"});
                res.write(JSON.stringify({message: "User registered successfully"}))
                res.end();
            })
        })
    }
    else if (req.method === "PUT" && req.url.startsWith("/api/users/upgrade")) {
        const urlParser = url.parse(req.url, true)
        const userID = urlParser.query.id

        db.users.forEach(user => {
            if (user.id === userID) user.role = "ADMIN"
        })

        fs.writeFile("db.json", JSON.stringify(db), (err) => {
            if (err) throw err;
            console.log('User role Upgraded successfully');
            res.writeHead(200, {"content-type": "application/json"});
            res.write(JSON.stringify({message: "User role Upgraded successfully"}))
            res.end();
        })
    }
    else if (req.method === "PUT" && req.url.startsWith("/api/users")) {
        const urlParser = url.parse(req.url, true)
        const userID = urlParser.query.id
        let reqBody = ""
        req.on("data", (data) => {
            reqBody = reqBody + data.toString()
        })
        req.on("end", () => {
            const {crime} = JSON.parse(reqBody)
            db.users.forEach(user => {
                if (user.id === userID) user.crime = crime
            })

            fs.writeFile("db.json", JSON.stringify(db), (err) => {
                if (err) throw err;
                console.log('User crime updated successfully');
                res.writeHead(200, {"content-type": "application/json"});
                res.write(JSON.stringify({message: "User crime updated successfully"}))
                res.end();
            })
        })


    }
    else if (req.method === "POST" && req.url === "/api/users/login") {
        let user = ""
        req.on("data", (data) => {
            user = user + data.toString()
        })
        req.on("end", () => {
            const {username, password, email} = JSON.parse(user)

            const userFound = db.users.find(user => user.username === username || user.email === email && user.password === password)
            if (!userFound) {
                console.log('User not found');
                res.writeHead(404, {"content-type": "application/json"});
                res.write(JSON.stringify({message: "User not found"}))
                res.end();
            } else {
                console.log('User logged in successfully');
                res.writeHead(200, {"content-type": "application/json"});
                res.write(JSON.stringify({message: "User logged in successfully", user: userFound}))
                res.end();
            }
        })

    }
    else if (req.method === "POST" && req.url === "/api/books/rent") {
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
                    if (err) throw err

                    console.log("Book Reserved successfully")
                    res.writeHead(201, {"content-type": "application/json"})
                    res.write(JSON.stringify({message: "Book Reserved successfully"}))
                    res.end()
                })
            } else if (!isFreeBook) {
                console.log("The desired book is not available")
                res.writeHead(401, {"content-type": "application/json"})
                res.write(JSON.stringify({message: "The desired book is not available"}))
                res.end()
            } else if (isExistenceOfUser === -1) {
                console.log("user not fond")
                res.writeHead(404, {"content-type": "application/json"})
                res.write(JSON.stringify({message: "user is not fond"}))
                res.end()
            } else if (isExistenceOfBook === -1) {
                console.log("book not fond")
                res.writeHead(404, {"content-type": "application/json"})
                res.write(JSON.stringify({message: "book is not fond"}))
                res.end()
            } else {
                console.log("request not fond")
                res.writeHead(404, {"content-type": "application/json"})
                res.write(JSON.stringify({message: "request is not fond"}))
                res.end()

            }
        })
    }


})


server.listen(8080, (err) => {
    if (err) throw err ; else console.log('Server is running on port 8080')
})