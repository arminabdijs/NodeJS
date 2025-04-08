const mongoose = require("mongoose");

const rentsSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    book_id: {
      type: String,
      required: true,
    },
    rentDate: {
      type: Date,
      required: false,
    },
    returnDate: {
      type: Date,
      required: false,
    },
  },
  { timestamps: true }
);


const rentsModel = mongoose.model("rents", rentsSchema);

module.exports = rentsModel;
