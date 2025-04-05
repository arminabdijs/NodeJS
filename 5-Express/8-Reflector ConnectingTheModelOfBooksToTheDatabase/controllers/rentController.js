const RentModel = require("../models/Rent");

const addRentUser = async (req, res) => {
  try {
    const rentedUser = await RentModel.rent(req);
    res.status(200).send({ message: "Rent added successfully" });
  } catch (e) {
    console.log(e);
    res.status(404).send({ message: "rent book or user not found" });
  }
};

module.exports = { addRentUser };
