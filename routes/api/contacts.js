const express = require("express");

const router = express.Router();
const { validateBody, isValidId } = require("../../middlewares");
const { addSchema, favoriteSchema } = require("../../schemas/validateSchema");
const ctrls = require("../../controllers/");

const { ctrlWrapper } = require("../../helpers");
// console.log(ctrls.getAllContacts());
router.get("/", ctrlWrapper(ctrls.getAllContacts));
router.get("/:contactId", isValidId, ctrlWrapper(ctrls.getContactById));
router.post("/", validateBody(addSchema), ctrlWrapper(ctrls.addContact));
router.delete("/:contactId", isValidId, ctrlWrapper(ctrls.removeContact));
router.put(
  "/:contactId",
  isValidId,
  validateBody(addSchema),
  ctrlWrapper(ctrls.updateContact)
);
router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(favoriteSchema),
  ctrlWrapper(ctrls.updateFavorite)
);

module.exports = router;
