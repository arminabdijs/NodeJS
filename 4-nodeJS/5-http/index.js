const http = require("http")

const Server = http.createServer((req, res) => {
    console.log(req.method)
    console.log(req.url)
})

Server.listen(8080, () => {
    console.log("Server is running on port 8080")
})