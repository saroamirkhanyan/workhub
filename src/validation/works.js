import Joi from '@hapi/joi'

const worksValidation = data => {
  const schema = Joi.object({
    page: Joi.number().min(1),
    count: Joi.number().min(1)
  })
  return schema.validate(data)
}

export default worksValidation