const db = require("../db.json")
const fs = require("fs");

const findAllUsers = () => {
    return new Promise((resolve, reject) => {
        resolve(db.users)
        reject(new Error("Failed to fetch users"))
    })
}

const crete = (req, res) => {
    return new Promise((resolve, reject) => {
        let user = ""
        req.on("data", (data) => {
            user = user + data.toString()
        })

        req.on("end", () => {
            const {name, username, email, address, phone, password} = JSON.parse(user)
            const newUser = {
                id: crypto.randomUUID(), name, username, email, address, phone, password, crime: 0, role: "USER"
            }

            const isUserExist = db.users.find(user => user.name === name || user.username === username || user.email === email || user.phone === phone)


            if (name === "" || username === "" || email === "" || address === "" || phone === "") {
                reject("User data are not valid");

            }

            if (isUserExist) {
                reject('User already exists');

            }

            db.users.push(newUser)

            fs.writeFile("db.json", JSON.stringify(db), (err) => {
                if (err) reject(err);
                resolve('User registered successfully!');

            })
        })
    })
}

const upgrade = (userID) => {
    return new Promise((resolve, reject) => {
        db.users.forEach(user => {
            if (user.id === userID) user.role = "ADMIN"
        })

        fs.writeFile("db.json", JSON.stringify(db), (err) => {
            if (err) reject(err);
            resolve('User role Upgraded successfully');

        })
    })
}

const login = (req) => {
    return new Promise((resolve, reject) => {
        let user = ""
        req.on("data", (data) => {
            user = user + data.toString()
        })
        req.on("end", () => {
            const {username, password, email} = JSON.parse(user)

            const userFound = db.users.find(user => user.username === username || user.email === email && user.password === password)
            if (!userFound) {
                reject('User not found');

            } else {
                resolve('User logged in successfully');

            }
        })
    })

}

const update = (userID,req) => {
    return new Promise((resolve, reject) => {
        let reqBody = ""
        req.on("data", (data) => {
            reqBody = reqBody + data.toString()
        })
        req.on("end", () => {
            const {crime} = JSON.parse(reqBody)
            db.users.forEach(user => {
                if (user.id === userID) user.crime = crime
            })

            fs.writeFile("db.json", JSON.stringify(db), (err) => {
                if (err) reject(err);
                resolve('User crime updated successfully');
            })
        })
    })

}



module.exports = {
    findAllUsers,
    crete,
    upgrade,
    login,
    update,
}