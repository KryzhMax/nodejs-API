const { Contact } = require("../../models/contact");

const { errorReq } = require("../../helpers");

const updateFavorite = async (req, res) => {
  const { contactId } = req.params;
  const query = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!query) {
    throw errorReq(404);
  }
  res.json(query);
};

module.exports = updateFavorite;
