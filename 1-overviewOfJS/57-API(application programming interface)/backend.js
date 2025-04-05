const http = require("http")

// Mock data for courses
const courses = [{
    id: 1, title: "Node.js", description: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine."
}, {id: 2, title: "React", description: "React is a JavaScript library for building user interfaces."}, {
    id: 3, title: "Vue.js", description: "Vue.js is a progressive, incrementally-adoptable JavaScript framework."
}, //... more courses...
]
// Create a simple HTTP server to serve static files and JSON data
http
    .createServer((req, res) => {
        if (req.url === "/courses") {
            res.write(JSON.stringify(courses))
            res.end()
        } else if (req.url === "/courses/1") {
            res.write(JSON.stringify(courses[0]))
            res.end()
        } else if (req.url === "/courses/1") {
            res.write(JSON.stringify(courses[1]))
            res.end()
        } else if (req.url === "/courses/1") {
            res.write(JSON.stringify(courses[2]))
            res.end()
        } else {
            res.write(JSON.stringify({message: "404 Not Found"}))
            res.end()
        }
    }).listen(8080, () => {
    console.log("Server is running on port 8080")
})
