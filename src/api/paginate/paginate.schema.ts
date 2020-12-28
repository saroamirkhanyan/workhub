import * as Joi from '@hapi/joi';

export default Joi.object({
  page: Joi.number().min(1).required(),
  limit: Joi.number().min(1).required(),
});
