const express = require("express");
const rentsController = require("../Controllers/rents");

const rentsRouter = express.Router();

rentsRouter.post("/rent",rentsController.addRentUser);

rentsRouter.put("/back/:id",rentsController.backBook);

module.exports = rentsRouter;
