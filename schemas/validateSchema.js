const Joi = require("joi");
// const emailFormat = require("../models/user");

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});

const favoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string()
    .min(8)
    .required()
    .messages({ "string.min": "Insert at least 8 symbols" }),
  subscription: Joi.string().required(),
});
const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(8).required(),
});

module.exports = {
  addSchema,
  favoriteSchema,
  registerSchema,
  loginSchema,
};
