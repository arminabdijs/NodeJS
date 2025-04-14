const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + Math.random();

    const extensionName = path.extname(file.originalname);

    cb(null, `${uniqueSuffix}${extensionName}`);
  },
});

const uploader = multer({
  storage,
});

module.exports = uploader;