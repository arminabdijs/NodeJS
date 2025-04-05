const url = require("url")
const UserModel = require("../models/User")
const fs = require("fs");

const getAllUsers = async (req, res) => {
    const users =await UserModel.findAllUsers()

    console.log(users)
    res.writeHead(200, {"content-type": "application/json"})
    res.write(JSON.stringify(users))
    res.end()

}

const createUsers = async (req, res) => {
    try{
        const createdUsers = await UserModel.crete(req,res)
        res.writeHead(201, {"content-type": "application/json"})
        res.write(JSON.stringify(createdUsers))
        res.end()

    }catch (err){
        console.error(err)
        res.writeHead(500, {"content-type": "application/json"})
        res.write(JSON.stringify({message: "Server Error"}))
        res.end()
    }
}

const upgradeRoleUser = async (req, res) => {
    const urlParser = url.parse(req.url, true)
    const userID = urlParser.query.id

    try {
        const upgradeableUser = await UserModel.upgrade(userID)
        res.writeHead(200, {"content-type": "application/json"})
        res.write(JSON.stringify(upgradeableUser))
        res.end()
    }catch (err) {
        console.error(err)
        res.writeHead(500, {"content-type": "application/json"})
        res.write(JSON.stringify({message: "Server Error"}))
        res.end()
    }
}

const loginUser =async (req, res) => {
    try {
        const user = await UserModel.login(req)
        res.writeHead(200, {"content-type": "application/json"})
        res.write(JSON.stringify(user))
        res.end()
    }catch (err) {
        console.error(err)
        res.writeHead(500, {"content-type": "application/json"})
        res.write(JSON.stringify({message: "Server Error"}))
        res.end()
    }
}

const updateUser=async (req, res) => {
    const urlParser = url.parse(req.url, true)
    const userID = urlParser.query.id

    try {
        const updatedUser = await UserModel.update(userID, req)
        res.writeHead(200, {"content-type": "application/json"})
        res.write(JSON.stringify(updatedUser))
        res.end()
    }catch (err) {
        console.error(err)
        res.writeHead(500, {"content-type": "application/json"})
        res.write(JSON.stringify({message: "Server Error"}))
        res.end()
    }
}

module.exports ={getAllUsers,createUsers,upgradeRoleUser,loginUser,updateUser}