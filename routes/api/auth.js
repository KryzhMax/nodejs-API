const express = require("express");

const { validateBody } = require("../../middlewares");
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

module.exports = router;
