const http = require("http")
const fs = require("fs")
const db = require("./db.json")

const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === '/api/users') {
        fs.readFile('db.json', (err, db) => {
            if (err) {
                throw err
            }

            const data = JSON.parse(db)

            res.writeHead(200, {"content-type": "application/json"})
            res.write(JSON.stringify(data.users))
            res.end()
        })
    } else if (req.method === "POST" && req.url === "/api/users") {
        let user = ""

        req.on("data", (data) => {
            user = user + data.toString()
        })
        req.on("end", () => {
            const {name, username, password} = JSON.parse(user)
            const newUser = {
                id: crypto.randomUUID(), name, username, password

            }

            db.users.push(newUser)

            fs.writeFile("db.json", JSON.stringify(db), (err) => {
                if (err) throw err

                res.writeHead(200, {"content-Type": "application/json"})
                res.write(`create user successfully :${JSON.stringify(newUser)}`)
                res.end()
            })
        })
    }
})

const port = 8080
server.listen(port, () => {
    console.log(`server running in port ${port}`)
})