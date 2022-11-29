const addContact = require("./add/addContact");
const getAllContacts = require("./getAll/getAllContacts");
const getContactById = require("./getOne/getOneContact");
const removeContact = require("./remove/removeContact");
const updateContact = require("./update/updateContact");
const updateFavorite = require("./updateFavourite/updateFavouriteContac");

module.exports = {
  addContact,
  getAllContacts,
  getContactById,
  removeContact,
  updateContact,
  updateFavorite,
};

// const fs = require("fs/promises");
// const path = require("path");
// const ids = require("short-id");
// const contactsPath = path.join(__dirname, "contacts.json");

// const updateContactList = async (contacts) =>
//   fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

// const listContacts = async () => {
//   const result = fs.readFile(contactsPath);
//   return JSON.parse(result);
// };

// const getContactById = async (contactId) => {
//   const contacts = await listContacts();
//   const idx = contacts.find((item) => item.id === contactId);

//   return idx || null;
// };

// const removeContact = async (contactId) => {
//   const contacts = await listContacts();
//   const deletedContact = contacts.findIndex((item) => item.id === contactId);

//   if (deletedContact === -1) return null;

//   const [result] = contacts.splice(deletedContact, 1);
//   await updateContactList();

//   return result;
// };

// const addContact = async ({ name, email, phone }) => {
//   const contacts = await listContacts();
//   const newContact = {
//     id: ids(),
//     name,
//     email,
//     phone,
//   };
//   const newList = [...contacts, newContact];
//   await updateContactList();

//   return newList;
// };

// const updateContact = async (contactId, body) => {
//   const contacts = await listContacts();
//   const contactToUpdate = contacts.findIndex((item) => item.id === contactId);

//   if (contactToUpdate === -1) return null;

//   contacts[contactToUpdate] = { contactId, ...body };
//   await updateContactList();

//   return contacts[contactToUpdate];
// };

// module.exports = {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
//   updateContact,
// };
