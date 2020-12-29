import { Request, Response, NextFunction } from 'express';
import UsersValidator from './users.validator';
import Model from './user.model';

export default class UsersController {
  /**
   * Create
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  public static async create(req: Request, res: Response, next: NextFunction) {
    //
    try {
      // Validation
      // const { error } = UsersValidator.create({});

      // Create model
      let model = new Model({
        title: 'Test title',
        subtitle: 'test subtitle',
      });

      //
      // Save
      await model.save();

      res.send({
        message: 'Created!',
        model: model,
      });
    } catch (error) {
      res.json({ error: error });
    }
  }
}
