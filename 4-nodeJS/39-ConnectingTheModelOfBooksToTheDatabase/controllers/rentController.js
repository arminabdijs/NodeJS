const RentModel = require("../models/Rent")

const addRentUser = async (req, res) => {
    try {
        const rentedUser = await RentModel.rent(req)
        res.writeHead(200, {"content-type": "application/json"})
        res.write(JSON.stringify({message: "book returned successfully"}))
        res.end()
    } catch (e) {
        
        console.log(e)
        res.writeHead(500, {"content-type": "application/json"})
        res.write(JSON.stringify({message: "Server Error"}))
        res.end()
    }
}


module.exports={addRentUser}