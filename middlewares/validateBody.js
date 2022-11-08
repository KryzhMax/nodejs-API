const { errorReq } = require("../helpers");

const validateBody = (schema) => {
  function validate(req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) next(errorReq(400, error.message));
    next();
  }
  return validate;
};

module.exports = validateBody;
