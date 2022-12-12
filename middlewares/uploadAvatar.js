const path = require("path");
const multer = require("multer");

const tempDir = path.join(process.cwd(), "temp");
// console.log(tempDir);

const storage = multer.diskStorage({
  destination: tempDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadAvatar = multer({
  storage,
});

module.exports = uploadAvatar;
