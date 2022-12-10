const express = require("express");

const router = express.Router();
const { validateBody, isValidId, authenticate } = require("../../middlewares");
const { addSchema, favoriteSchema } = require("../../schemas/validateSchema");
const ctrls = require("../../controllers/");
const { ctrlWrapper } = require("../../helpers");

router.get("/", authenticate, ctrlWrapper(ctrls.getAllContacts));
router.get(
  "/:contactId",
  authenticate,
  isValidId,
  ctrlWrapper(ctrls.getContactById)
);
router.post(
  "/",
  authenticate,
  validateBody(addSchema),
  ctrlWrapper(ctrls.addContact)
);
router.delete(
  "/:contactId",
  authenticate,
  isValidId,
  ctrlWrapper(ctrls.removeContact)
);
router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(addSchema),
  ctrlWrapper(ctrls.updateContact)
);
router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(favoriteSchema),
  ctrlWrapper(ctrls.updateFavorite)
);

module.exports = router;
