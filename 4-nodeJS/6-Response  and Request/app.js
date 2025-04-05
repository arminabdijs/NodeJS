const http = require("http")

const Server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/") {
        res.write("welcome to my first nodejs server ❤️❤️❤️")
        res.end()
    } else if (req.method === "GET" && req.url === "/posts") {
        res.write("welcome to posts page!!!")
        res.end()
    } else if (req.method === "GET" && req.url === "/books") {
        res.write("welcome to books page!!!")
        res.end()
    }else if (req.method === "GET" && req.url === "/users") {
        res.write("welcome to users page!!!")
        res.end()
    } else {
        res.write("404 Not Found")
        res.end()
    }
})

Server.listen(3000, () => {
    console.log("Server is running on port 3000")
})