// This module has utilities for URL resolution and parsing meant to have feature parity with node.js core url module.

const http = require('http')
const url = require("url")


const server = http.createServer((req, res) => {
    if (req.method === "DELETE") {
        const parseUrl = url.parse(req.url, true)
        const queryPars = parseUrl.query.id

        console.log(parseUrl)
        console.log("---------------------------")
        console.log(queryPars)

        res.writeHead(200, {"content-Type": 'application/json'})
        res.write(JSON.stringify({meessage:"request successful"}))
        res.end()
    }

})

server.listen(8080, () => {
    console.log("Server is running on port 8080")
})
