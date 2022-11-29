const { Contact } = require("../../models/contact");
const { errorReq } = require("../../helpers/errorReq");

const removeContact = async (req, res, _) => {
  const { contactId } = req.params;
  const query = Contact.findByIdAndRemove(contactId);

  if (!query) throw errorReq(404);

  res.json({ message: "This contact has been removed" });
};

module.exports = removeContact;
