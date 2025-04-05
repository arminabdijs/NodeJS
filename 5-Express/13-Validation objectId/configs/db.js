const { log, error } = require("console");
require("dotenv").config()

const mongoose = require("mongoose");

const url = process.env.URL_DB

mongoose.connect(url).then(log("DBconected...")).catch(error("DBdisconect"));
