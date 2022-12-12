const isValidId = require("./isValidId");
const validateBody = require("./validateBody");
const authenticate = require("./authenticate");
const uploadAvatar = require("./uploadAvatar");

module.exports = {
  validateBody,
  isValidId,
  authenticate,
  uploadAvatar,
};
