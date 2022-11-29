const { Contact } = require("../../models/contact");
const { errorReq } = require("../../helpers/errorReq");

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const query = Contact.findById(contactId);
  if (!query) throw errorReq(404);
  res.json(query);
};

module.exports = getContactById;
