const Joi = require("joi");

const userLogin = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(5).required(),
});
const userSubscription = Joi.object({
  subscription: Joi.string().valid("starter", "pro", "business").required(),
});
const userResend = Joi.object({
  email: Joi.string().email().required(),
});
const userSchema = { userLogin, userSubscription, userResend };
module.exports = userSchema;
