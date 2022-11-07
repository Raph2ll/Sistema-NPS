const Joi = require('joi');

const schemaProduct = Joi.object({
  name: Joi.string().required().not().empty(),
  email: Joi.string().email().required().not()
    .empty(),
  value: Joi.number().integer().max(10).required()
    .not()
    .empty(),
}).messages({
  'any.empty': '{#label} is not allowed',
});

module.exports = schemaProduct;
