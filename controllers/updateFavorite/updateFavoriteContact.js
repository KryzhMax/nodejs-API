const Contact = require("../../models/contact");

const { errorReq } = require("../../helpers");

const updateFavorite = async (req, res) => {
  const { contactId } = req.params;
  console.log(req.body);
  const query = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!query) {
    throw errorReq(400, "missing field favorite");
  }
  res.status(200).json(query);
};

module.exports = updateFavorite;
