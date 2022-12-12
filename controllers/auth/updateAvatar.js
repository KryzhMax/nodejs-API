const User = require("../../models/user");
const path = require("path");
const fs = require("fs/promises");

const avatarPath = path.join(process.cwd(), "public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;
  const filename = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarPath, filename);
  await fs.rename(tempUpload, resultUpload);
  const avatarURL = path.join("avatars", filename);
  await User.findByIdAndUpdate(_id, {
    avatarURL,
  });
  res.status(201).json({ avatarURL });
};

module.exports = updateAvatar;
