const { isValidObjectId } = require("mongoose");

const { errorReq } = require("../helpers/");

const isValidId = (req, _, next) => {
  const { contactId } = req.params;
  if (!isValidObjectId(contactId)) {
    next(errorReq(400, "Id is not valid"));
  }
  next();
};

module.exports = isValidId;
