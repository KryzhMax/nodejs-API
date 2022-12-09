const express = require("express");

const { validateBody, authenticate } = require("../../middlewares");
const { loginSchema, registerSchema } = require("../../schemas/validateSchema");
const { ctrlWrapper } = require("../../helpers");
const ctrls = require("../../controllers/auth");

const router = express.Router();

router.post(
  "/signup",
  validateBody(registerSchema),
  ctrlWrapper(ctrls.register)
);
router.post("/login", validateBody(loginSchema), ctrlWrapper(ctrls.login));

router.get("/current", authenticate, ctrlWrapper(ctrls.getCurrent));

router.get("/logout", authenticate, ctrlWrapper(ctrls.logout));

router.patch("/", authenticate, ctrlWrapper(ctrls.updateSubscr));

module.exports = router;
