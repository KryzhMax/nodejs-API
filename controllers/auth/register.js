const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const ids = require("short-id");
const User = require("../../models/user");
const { errorReq, sendEmail } = require("../../helpers/");

const { BASE_URL } = process.env;

const register = async (req, res) => {
  const { name, email, password, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw errorReq(409, "Email in use");
  }

  const verificationToken = ids.generate();
  const hashPass = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const newUser = await User.create({
    name,
    email,
    password: hashPass,
    subscription,
    avatarURL,
    verificationToken,
  });

  const mail = {
    to: email,
    subject: "email verification",
    html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${verificationToken}">Click here to verify Your email</a>`,
  };

  await sendEmail(mail);

  res.status(201).json({
    name: newUser.name,
    email: newUser.email,
    subscription,
  });
};

module.exports = register;
