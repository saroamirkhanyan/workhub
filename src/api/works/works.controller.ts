import { Request, Response, NextFunction, query } from 'express';
import WorksValidation from './works.validation';
import Model from './works.model';

export default class WorksController {
  /**
   * Get all
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  public static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      //
      const page: number = parseInt(<string>req.query.page);
      const limit: number = parseInt(<string>req.query.limit);
      const searchQuery: string = <string>req.query.searchQuery;

      // Paginate Validation

      const { error } = WorksValidation.getAll({ page, limit, searchQuery });

      // if (error) return res.json(error);

      // Get data
      const queryOptions: any = {};
      const paginateOptions = {
        page,
        limit,
      };
      // if searchQuery exsist add hashtags for search
      if (searchQuery) {
        const queryHashtags = searchQuery.split(' ');
        queryOptions.hashtags = { $in: queryHashtags };
      }

      let result = await Model.paginate(queryOptions, paginateOptions);

      // Response
      res.json(result);
    } catch (error) {
      //
      console.log(error);
      // Error response
      res.json({ error });
    }
  }

  /**
   * Create
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  public static async create(req: Request, res: Response, next: NextFunction) {
    //
    // Create model
    // let model = new Model({
    //   title: 'Test title',
    //   subtitle: 'test subtitle',
    // });
    // //
    // // Save
    // await model.save();
    // res.send({
    //   message: 'Created!',
    //   model: model,
    // });
  }
}
