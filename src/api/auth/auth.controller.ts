import { Request, Response, NextFunction } from 'express';
import AuthValidator from './auth.validator';
import UserModel from '../users/user.model';

export default class AuthController {
  /**
   * Sign Up
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  public static async signUp(req: Request, res: Response, next: NextFunction) {
    try {
      // Get Inputs
      const email: string = <string>req.body.email;
      const name: string = <string>req.body.name;
      const password: string = <string>req.body.name;
      // Validation
      const { error } = AuthValidator.signUp({ email, name, password });
      if (error) throw new Error(error);
      // check Email
      const emailExist = await UserModel.findOne({
        email: req.body.email,
      });
      if (emailExist) return res.status(400).json({ error: 'email was taken' });
    } catch (error) {
      res.json(error);
    }
  }
}
