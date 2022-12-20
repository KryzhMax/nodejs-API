const User = require("../../models/user");
const { errorReq, sendEmail } = require("../../helpers/");

const { BASE_URL } = process.env;

const resendEmail = async (req, res) => {
  const { email } = req.body;

  if (!req.body) throw errorReq(400, "missing required field email");

  const user = await User.findOne({ email });

  if (user.verify === true)
    throw errorReq(400, "Verification has already been passed");

  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: "",
  });

  const mail = {
    to: email,
    subject: "email verification resend",
    html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${user.verificationToken}">Click here to verify Your email</a>`,
  };

  await sendEmail(mail);

  res.json({ message: "Verification successfully passed" });
};

module.exports = resendEmail;
