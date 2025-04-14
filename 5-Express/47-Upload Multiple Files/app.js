const express = require('express');
const bodyParser = require('body-parser');
const uploader = require('./middlewares/multer');

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',uploader.array("profile",3), (req, res) => {
    console.log(req.files);
    res.json(req.files);
});

app.listen(3000, () => {
    console.log(`Server Running On Port 3000`);
});