const { Contact } = require("../../models/contact");

const addContact = async (req, res) => {
  const { name, email, phone } = req.params;

  const result = await Contact.create({
    name,
    email,
    phone,
  });

  res.statu(201).json(result);
};

module.exports = addContact;
