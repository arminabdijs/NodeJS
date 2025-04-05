const express = require("express");
const bodyParser=require("body-parser")
const {isValidObjectId} = require("mongoose")
const mongoose=require("mongoose")
require("dotenv").config()

require("./configs/db");
require("./models/users")

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


app.get("/test/:id",(req,res)=>{
  const {id}=req.params
  console.log(id)

  // res.send(isValidObjectId(id))
  res.send(mongoose.Types.ObjectId.isValid(id))
})


const port=process.env.PORT||8080

app.listen(port,()=>{
  console.log(`server runing on port ${port}`)
})

