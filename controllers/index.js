const addContact = require("./add/addContact");
const getAllContacts = require("./getAll/getAllContacts");
const getContactById = require("./getOne/getOneContact");
const removeContact = require("./remove/removeContact");
const updateContact = require("./update/updateContact");
const updateFavorite = require("./updateFavorite/updateFavoriteContact");

module.exports = {
  addContact,
  getAllContacts,
  getContactById,
  removeContact,
  updateContact,
  updateFavorite,
};
