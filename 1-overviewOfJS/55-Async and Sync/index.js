/*const firstLogs = () => {
    console.log(1)//sync
    console.log(2)//sync
}

const middleLogs = () => {
    setTimeout(() => console.log(3), 1000)//async
}

const lastLogs = () => {
    console.log(4)//sync
    console.log(5)//sync
}

firstLogs()
middleLogs()
lastLogs()*/

//----------------------------------------------------------------
//callback
/*const firstLogs = () => {
    console.log(1)
    console.log(2)
}

const middleLogs = (callback) => {
    setTimeout(() => {
        console.log(3)
        callback()
    }, 1000)
}

const lastLogs = () => {
    console.log(4)
    console.log(5)
}

firstLogs()
middleLogs(lastLogs)*/

//----------------------------------------------------------------
/*
const books = [
    {id: 1, title: "DEAD SIMPLE PYTHON", price: 500_000},
    {id: 2, title: "1984", price: 300_000},
    {id: 3, title: "The Great Gatsby", price: 350_000},
    {id: 4, title: "Pride and Prejudice", price: 250_000},
    {id: 5, title: "To Kill a Mockingbird", price: 200_000}
]

const addBook = (title, price, callback) => {
    let newBook = {
        id: books.length + 1, title: title, price: price
    }
    setTimeout(() => {
        books.push(newBook)
        callback()
    }, 2000)
}

const booksLogger = () => console.log(books)

addBook("The Catcher in the Rye", 320_000, booksLogger)
*/


//----------------------------------------------------------------
// callback Hell
const books = [
    {id: 1, title: "DEAD SIMPLE PYTHON", price: 500_000},
    {id: 2, title: "1984", price: 300_000},
    {id: 3, title: "The Great Gatsby", price: 350_000},
    {id: 4, title: "Pride and Prejudice", price: 250_000},
    {id: 5, title: "To Kill a Mockingbird", price: 200_000}
]

const addBook = (title, price, callback) => {
    let newBook = {
        id: books.length + 1, title: title, price: price
    }
    setTimeout(() => {
        books.push(newBook)
        callback(books)
    }, 2000)

}

const booksLogger = () => console.log(books)

addBook("The Catcher in the Rye", 320_000, (books) => {
    addBook("To Kill a Mockingbird", 280_000, (books) => {
        addBook("1984", 260_000, (books) => {
            addBook("Pride and Prejudice", 240_000, (books) => {
                addBook("DEAD SIMPLE PYTHON", 480_000, (books) => {
                    booksLogger(books)
                })
            })
        })
    })
})


