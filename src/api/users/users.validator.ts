import * as Joi from '@hapi/joi';
export default class UsersValidator {
  /**
   *
   * @param data
   *
   */
  public static create(data) {
    const schema = Joi.object({
      name: Joi.string().min(6).required(),
      email: Joi.string().min(6).required().email(),
      password: Joi.string().min(6).required(),
    });
    return schema.validate(data);
  }
}
