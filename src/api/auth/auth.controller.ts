import { Request, Response, NextFunction } from 'express';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
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
      // Validation
      const { error } = AuthValidator.signUp(req.body);
      if (error) res.status(400).json({ error: error });
      // check Email
      const emailExist = await UserModel.findOne({
        email: req.body.email,
      });
      if (emailExist) return res.status(400).json({ error: 'email was taken' });
      // Hashing Password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      // Create User Model
      const userModel = new UserModel({
        email: req.body.email,
        name: req.body.name,
        password: hashedPassword,
      });
      // Save User
      try {
        const savedUserModel = await userModel.save();
        const token = jwt.sign(
          { _id: savedUserModel._id },
          process.env.JWT_SECRET
        );
        res.header('auth-token', token);
        res.status(200).json({});
      } catch (error) {
        res.json({ error });
      }
    } catch (error) {
      res.json({ error });
    }
  }
  /**
   * Sign Up
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  public static async signIn(req: Request, res: Response, next: NextFunction) {
    try {
      //
      // Validation
      const signInValidation = AuthValidator.signIn(req.body);
      if (signInValidation.error)
        res.status(400).json({ error: signInValidation.error });
      const user: any = await UserModel.findOne({
        email: req.body.email,
      });
      if (!user) return res.status(400).send('Email is not valid');

      const validPass = await bcrypt.compare(req.body.password, user.password);
      if (!validPass) return res.status(400).send('Invalid Password');

      //Create token
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
      // Send Token
      res.header('auth-token', token).json({});
    } catch (error) {
      res.json({ error: error });
    }
  }
}
