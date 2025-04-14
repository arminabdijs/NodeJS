const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + Math.round(Math.random() * 1e9);

    const extensionName = path.extname(file.originalname);
    
    /* const validFileTypes = [".jpeg", ".jpg", ".png"];

    if (!validFileTypes.includes(extensionName)) {
      return cb(new Error("Invalid file type only (.jpeg, .jpg, .png)"));
    } */

    const validMimeTypes = ["image/jpeg", "image/jpg", "image/png"];

    if (!validMimeTypes.includes(file.mimetype)) {
      return cb(new Error("Invalid file type only (.jpeg, .jpg, .png)"));
    }

    cb(null, `${uniqueSuffix}${extensionName}`);
  },
});


const maxSize = 1 * 1000 * 4000;

const uploader = multer({
  storage,
  limits: {
    fileSize: maxSize,
  },
});

module.exports = uploader;
