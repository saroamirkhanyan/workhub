import Joi from '@hapi/joi'


const searchWorkValidation = data => {
  const schema = Joi.string().required()
  return schema.validate(data)
}

export default searchWorkValidation