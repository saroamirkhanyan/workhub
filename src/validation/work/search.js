import Joi from '@hapi/joi'


const searchWorkValidation = data => {
  const schema = Joi.object({
    hashtags: Joi.array().required(),
  })
  return schema.validate(data)
}

export default searchWorkValidation