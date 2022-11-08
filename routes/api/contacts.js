const express = require("express");

const router = express.Router();
const { validateBody } = require("../../middlewares");
const addSchema = require("../../schemas/validateSchema");
const ctrls = require("../../models/contacts");

const { ctrlWrapper } = require("../../helpers");

router.get("/", ctrlWrapper(ctrls.listContacts));
router.get("/:contactId", ctrlWrapper(ctrls.getContactById));
router.post("/", validateBody(addSchema), ctrlWrapper(ctrls.addContact));
router.delete("/:contactId", ctrlWrapper(ctrls.removeContact));
router.put(
  "/:contactId",
  validateBody(addSchema),
  ctrlWrapper(ctrls.updateContact)
);

module.exports = router;
