const express = require("express");

const {
  validateBody,
  authenticate,
  uploadAvatar,
} = require("../../middlewares");
const {
  loginSchema,
  registerSchema,
  verifySchema,
} = require("../../schemas/validateSchema");
const { ctrlWrapper } = require("../../helpers");
const ctrls = require("../../controllers/auth");

const router = express.Router();

router.post(
  "/signup",
  validateBody(registerSchema),
  ctrlWrapper(ctrls.register)
);

router.get("/verify/:verificationToken", ctrlWrapper(ctrls.verifyEmail));

router.post(
  "/verify/",
  validateBody(verifySchema),
  ctrlWrapper(ctrls.resendEmail)
);

router.post("/login", validateBody(loginSchema), ctrlWrapper(ctrls.login));

router.get("/current", authenticate, ctrlWrapper(ctrls.getCurrent));

router.get("/logout", authenticate, ctrlWrapper(ctrls.logout));

router.patch("/", authenticate, ctrlWrapper(ctrls.updateSubscr));

// uploadAvatar.fields([{name: 'avatar', maxCount: 2}, {name: 'cover', maxCount: 1}]) - name: название поля формы, maxCount - макс. число файлов в этом поле, в html в инпуте обязательно добавить type: "file" multiple
// uploadAvatar.array('avatar', 3) => req.files - название поля и макс. число файлов, которые ожидаем
router.patch(
  "/avatars",
  authenticate,
  uploadAvatar.single("avatar"),
  ctrlWrapper(ctrls.updateAvatar)
);

module.exports = router;
