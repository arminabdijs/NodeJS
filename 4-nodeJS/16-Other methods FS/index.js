const fs = require('fs')

// To rename a file using the file system method, we use the following method:
// fs.rename('db.json', 'dataBase.json', (err) => {
//     if (err) throw err
//     console.log('File renamed successfully.')
// })
// ----------------------------------------------------------------


//To delete a file using the file system method, we use the following method:
// fs.unlink('dataBase.json', (err) => {
//     if (err) throw err
//     console.log('File deleted successfully.')
// })


//To delete a file using the fs.rm() method, which is a modern alternative to fs.unlink():
// fs.rm('dataBase.json', (err) => {
//     if (err) throw err
//     console.log('File deleted successfully.')
// })
// ----------------------------------------------------------------


//To check if a file exists using the file system method, we use the following method:
// if (fs.existsSync("dataBase.json")) {
//     fs.unlink('dataBase.json', (err) => {
//         if (err) throw err
//         console.log('File deleted successfully.')
//     })
// }else {
//     console.log('File does not exist.')
// }
// ----------------------------------------------------------------


//To append data to a file using the file system method, we use the following method:
// fs.appendFile("user.json", JSON.stringify({message: "This is where user data is stored."},), (err) => {
//     if (err) throw err
//     console.log("The value was placed in the file!")
// })
// ----------------------------------------------------------------


// To create a new directory using the file system method, we use the following method:
// fs.mkdir("armin",(err)=>{
//     if (err) throw err
//     console.log("Directory created successfully!")
// })


//To create a new directory with all its parents recursively using the file system method, this will no longer show an error if a file already exists
// fs.mkdir("armin", {recursive: true}, (err) => {
//     if (err) throw err
//     console.log("Directory created successfully!")
// })


// fs.mkdir("armin2/user/rent", {recursive: true}, (err) => {
//     if (err) throw err
//     console.log("Directory created successfully!")
// })
// ----------------------------------------------------------------


//To remove a directory using the file system method, we use the following method:
// fs.rmdir("armin2",(err)=>{
//     if (err) throw err
//     console.log("Directory deleted successfully!")
// })
// ----------------------------------------------------------------


//To read the contents of a file using the file system method, it reads the contents of the first file and inserts the entire contents into the inner files.
// fs.readdir("armin2", (err,files) => {
//     if (err) throw err
//     console.log("Files in armin2:", files)
// })