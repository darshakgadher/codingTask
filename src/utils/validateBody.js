const joi = require("joi");

const schema = joi.object({
  name: joi
    .string()
    .pattern(/^[A-za-z]+$/)
    .min(2)
    .max(30),
  email: joi.string().email(),
  dob: joi.date(),
  address: joi.string().min(5).max(200),
  gender: joi.string().valid("male", "female", "other"),
  phone: joi
    .string()
    .pattern(/^[0-9]+$/)
    .length(10),
});

module.exports = schema;
