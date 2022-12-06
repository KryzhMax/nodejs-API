const Contact = require("../../models/contact");
const { errorReq } = require("../../helpers/");

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const query = await Contact.findByIdAndRemove(contactId);
  if (!query) throw errorReq(404);

  res.json({ message: "This contact has been removed" });
};

module.exports = removeContact;
