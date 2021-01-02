import { Router, Request, Response, NextFunction } from 'express';
import AuthController from './auth.controller';

export class AuthRouter {
  public router: Router;

  /*--------  Constructor  --------*/

  constructor() {
    //
    // Set router
    this.router = Router();
    this.init();
  }

  /*--------  Methods  --------*/

  /**
   * Init all routes in this router
   */
  init() {
    this.router.post('/signUp', AuthController.signUp);
    this.router.post('/signIn', AuthController.signIn);
    // this.router.post('/', WorksController.create);
  }
}

//
// Create Router and export its configured Express.Router
const authRouters = new AuthRouter();
authRouters.init();

export default authRouters.router;
