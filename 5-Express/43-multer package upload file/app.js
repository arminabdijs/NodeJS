const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const upload = multer({dest:'uploads/'});

app.get('/',upload.single("profile"),async(req,res)=>{
    console.log(req.file);
    res.json(req.file)
    
})

app.listen(3000, () => {
    console.log(`Server Running On Port 3000`);
});