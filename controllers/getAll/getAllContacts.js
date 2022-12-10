const Contact = require("../../models/contact");
const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20, favorite = false } = req.query;
  const queryReq = favorite ? { owner, favorite } : { owner };
  // filtration
  const totalSelected = await Contact.find({ owner, favorite });

  const skip = (page - 1) * limit;
  const result = await Contact.find(queryReq, { skip, limit }).populate(
    "owner",
    "email subscription"
  );
  res.json({ ...result, favorite: totalSelected });
};

module.exports = getAllContacts;
