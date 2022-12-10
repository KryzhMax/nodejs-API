const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { SECRET_KEY } = process.env;

const User = require("../../models/user");
const { errorReq } = require("../../helpers/");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const passCompare = await bcrypt.compare(password, user.password);
  console.log(passCompare);
  const payload = { id: user._id };

  if (!user || !passCompare) {
    throw errorReq(400);
  }

  const token = await jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });
  await User.findByIdAndUpdate(user._id, { token });
  res.json({ token });
};

module.exports = login;
