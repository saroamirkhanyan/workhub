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
    this.router.get('/', AuthController.getAll);
    this.router.post('/', AuthController.create);
  }
}

//
// Create Router and export its configured Express.Router
const authRoutes = new AuthRouter();
authRoutes.init();

export default authRoutes.router;
