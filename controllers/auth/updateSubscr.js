const { errorReq } = require("../../helpers/");
const User = require("../../models/user");

const updateSubscr = async (req, res) => {
  console.log(req.body);
  console.log(req.user);
  const { _id, email, token } = req.user;
  const { subscription } = req.body;

  const result = await User.findByIdAndUpdate(
    _id,
    { subscription },
    { new: true }
  );

  if (!result) {
    throw errorReq(400);
  }
  res.status(200).json({
    token,
    user: {
      email,
      subscription,
    },
  });
};

module.exports = updateSubscr;
