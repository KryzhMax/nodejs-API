const User = require("../../models/user");
const { errorReq } = require("../../helpers");

const ids = require("short-id");

const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken });
  if (!user) throw errorReq(404);

  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: "",
  });

  res.json({ message: "Verification successfully passed" });
};

module.exports = verifyEmail;
