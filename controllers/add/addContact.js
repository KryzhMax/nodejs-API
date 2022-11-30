const Contact = require("../../models/contact");

const addContact = async (req, res) => {
  const { name, email, phone, favorite } = req.params;

  const result = await Contact.create({
    name,
    email,
    phone,
    favorite,
  });

  res.status(201).json(result);
};

module.exports = addContact;
