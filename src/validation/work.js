import Joi from '@hapi/joi'

const workValidation = data => {
  const schema = Joi.object({
    userId: Joi.object().required(),
    price: Joi.number().min(0).required(),
    description: Joi.string().required(),
  })
  return schema.validate(data)
}

export default workValidation