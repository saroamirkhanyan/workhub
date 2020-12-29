import * as Joi from '@hapi/joi';
import paginateSchema from '../paginate/paginate.schema';
export default class WorksValidator {
  /**
   *
   * @param data
   *
   */
  public static getAll(data) {
    const schema = paginateSchema.append({
      searchQuery: Joi.string(),
    });
    return schema.validate(data);
  }
}
