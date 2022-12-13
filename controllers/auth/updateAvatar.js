const User = require("../../models/user");
const path = require("path");
const fs = require("fs/promises");
const jimp = require("jimp");
const { errorReq } = require("../../helpers");

const avatarPath = path.join(process.cwd(), "public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;
  const filename = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarPath, filename);
  //   const image = jimp.read(tempUpload, (err, image) => {
  //     if (err) errorReq(400);
  //     image.resize(250, 250).quality(60).writeAsync(resultUpload);
  //   });
  const image = jimp
    .read(tempUpload)
    .then((ava) => {
      return ava
        .resize(256, 256) // resize
        .greyscale() // set greyscale
        .writeAsync(resultUpload); // save
    })
    .catch((error) => {
      return errorReq(400, error);
    });

  await fs.rename(tempUpload, resultUpload);

  const avatarURL = path.join("avatars", filename);

  await User.findByIdAndUpdate(_id, {
    image,
  });
  res.status(201).json({ avatarURL });
};

module.exports = updateAvatar;

// for checking http://localhost:3000/avatars/6394b3b88fce61c244035f08_pngwing.com.png
