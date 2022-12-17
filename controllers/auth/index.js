const register = require("./register");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updateSubscr = require("./updateSubscr");
const updateAvatar = require("./updateAvatar");
const verifyEmail = require("./verifyEmail");

module.exports = {
  register,
  login,
  getCurrent,
  logout,
  updateSubscr,
  updateAvatar,
  verifyEmail,
};
