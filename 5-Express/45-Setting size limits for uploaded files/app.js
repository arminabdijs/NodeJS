const express = require('express');
const bodyParser = require('body-parser');
const uploader = require('./middlewares/multer');

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',uploader.single("profile"), (req, res) => {
    console.log(req.file);
    res.json(req.file);
});

app.listen(3000, () => {
    console.log(`Server Running On Port 3000`);
});