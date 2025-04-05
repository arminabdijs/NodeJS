const fs = require('fs');

/*fs.readFile("text.txt", (error, data) => {
    if (error) {
        throw error
    } else {
        console.log(`Users list:\n ${data}`)
    }
})*/

/*const data = fs.readFileSync("text.txt")
console.log(`Users list:\n ${data}`)*/


/*fs.readFile("data.json", (err, data) => {
    if (err) throw err

    console.log(JSON.parse(data))
    console.log(JSON.parse(data).books[1])

})*/

//{flag: "a"}: The flag "a" tells Node.js to append to the file instead of overwriting it.
/*fs.writeFile("text.txt", "\nahmad", {flag: "a"}, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
})*/


/*
fs.writeFileSync("text.txt", "\nmohammd", {flag: "a"})
*/


/*fs.readFile("data.json", (err, data) => {
    if (err) throw err

    const db = JSON.parse(data)

    const newBook = {id: crypto.randomUUID(), title: "javascript book", price: 200000}

    db.books.push(newBook)

    fs.writeFile("data.json", JSON.stringify(db), (err) => {
        if (err) throw err

        console.log("The book has been added to the database!")
    })
})*/


