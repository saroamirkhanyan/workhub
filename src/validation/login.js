import Joi from "@hapi/joi"
// login Validation
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  })
  return schema.validate(data)
}

export default loginValidation
