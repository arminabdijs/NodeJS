const http = require("http")

const Server = http.createServer((req, res) => {
    res.write("welcome to my first nodejs server ❤️❤️❤️")
    res.end()
})

Server.listen(8080, () => {
    console.log("Server is running on port 8080")
})