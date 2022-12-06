const bcrypt = require("bcryptjs");

const User = require("../../models/user");
const { errorReq } = require("../../helpers/");

const register = async (req, res) => {
  const { name, email, password, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw errorReq(409, "Email in use");
  }

  const hashPass = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    name,
    email,
    password: hashPass,
    subscription,
  });
  res.status(201).json({
    email: newUser.email,
    subscription,
  });
};

module.exports = register;