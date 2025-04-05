const http = require("http")

const Server = http.createServer((req, res) => {
        // 'Content-Type': 'text/html'
        //     if (req.url === "/") {
        //         res.writeHead(200, {'Content-Type': 'text/html'});
        //         res.write("<h1>Hello World!</h1>");
        //         res.end()
        //     } else {
        //         res.writeHead(404, {'Content-Type': 'text/html'});
        //         res.write("<h1>Page Not Found</h1>");
        //         res.end()
        //     }

        // 'Content-Type': 'application/json'
        // if (req.url === "/") {
        //     res.writeHead(200, {'Content-Type': 'application/json'});
        //     res.write(JSON.stringify({message: "Hello World"}));
        //     res.end()
        // } else {
        //     res.writeHead(404, {'Content-Type': 'application/json'});
        //     res.write(JSON.stringify({message: "Page Not Found"}));
        //     res.end()
        // }

        // 'Content-Type': 'text/plain'
        // if (req.url === "/") {
        //     res.writeHead(200, {'Content-Type': 'text/plain'});
        //     res.write("Hello World!");
        //     res.end()
        // } else {
        //     res.writeHead(404, {'Content-Type': 'text/plain'});
        //     res.write("Page Not Found");
        //     res.end()
        // }

         // Content-Type: text/xml
        // if (req.url === "/") {
        //     res.writeHead(200, {'Content-Type': 'text/xml'});
        //     res.write(`<root><message>Hello World!</message></root>`);
        //     res.end()
        // } else {
        //     res.writeHead(404, {'Content-Type': 'text/xml'});
        //     res.write(`<root><message>Page Not Found</message></root>`);
        //     res.end()
        // }
    }
)

Server.listen(8080, () => {
    console.log("Server is running on port 8080")
})