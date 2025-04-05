const url = require("url")
const BookModel = require("../models/Book")

const getAllBooks = async (req, res) => {
    try {
        const books = await BookModel.findAllBooks()

        console.log(books)
        res.writeHead(200, {"content-type": "application/json"})
        res.write(JSON.stringify(books))
        res.end()
    } catch (err) {
        console.error(err)
        res.writeHead(500, {"content-type": "application/json"});
        res.write(JSON.stringify({message: "Error fetching books"}))
        res.end();
    }

}

const getBook=async(req,res)=>{
    const urlParser = url.parse(req.url, true)
    const userID = urlParser.query.id

    try{
        const user = await BookModel.findBook(userID)
        res.writeHead(200, {"content-type": "application/json"})
        res.write(JSON.stringify(user))
        res.end()
    }catch (err){
        console.error(err)
        res.writeHead(500, {"content-type": "application/json"})
        res.write(JSON.stringify({message: "Server Error"}))
        res.end()
    }
}

const removeOne = async (req, res) => {
    const parseUrl = url.parse(req.url, true)
    const bookID = parseUrl.query.id

    try {
        const removedBook = await BookModel.remove(bookID)

        res.writeHead(200, {"content-type": "application/json"});
        res.write(JSON.stringify(removedBook))
        res.end();
    } catch (err) {
        console.error(err)
        res.writeHead(500, {"content-type": "application/json"});
        res.write(JSON.stringify({message: "Error Book not found"}))
        res.end();
    }
}

const createBook = async (req, res) => {

    try {
        const createdBook = await BookModel.create(req, res)
        console.log(createdBook)
        res.writeHead(201, {"content-type": "application/json"});
        res.write(JSON.stringify({message: `Book added successfully ${createdBook}`}))
        res.end();

    } catch (err) {
        console.error(err)
        res.writeHead(500, {"content-type": "application/json"});
        res.write(JSON.stringify({message: "Error creating book"}))
        res.end();
    }

}

const backBook = async (req, res) => {
    const urlParser = url.parse(req.url, true)
    const bookID = urlParser.query.id

    try {
        const backedBook = await BookModel.back(bookID)
        console.log(backedBook)
        res.writeHead(200, {"content-type": "application/json"});
        res.write(JSON.stringify({message: "Book returned successfully"}))
        res.end();
    } catch (err) {
        console.error(err)
        res.writeHead(500, {"content-type": "application/json"});
        res.write(JSON.stringify({message: "Error backing book"}))
        res.end();
    }
}


const updateBook = async (req, res) => {
    const urlParser = url.parse(req.url, true)
    const bookID = urlParser.query.id


    try{
        const updatedBook = await BookModel.update(bookID,req)
        console.log(updatedBook)
        res.writeHead(200, {"content-type": "application/json"});
        res.write(JSON.stringify({message: "Book updated successfully"}))
        res.end();
    }catch (e) {
        console.error(e)
        res.writeHead(500, {"content-type": "application/json"});
        res.write(JSON.stringify({message: "Error updating book"}))
        res.end();
    }

}

module.exports = {getAllBooks, removeOne, createBook, backBook, updateBook,getBook}