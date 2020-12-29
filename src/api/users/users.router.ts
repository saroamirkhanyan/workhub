import { Router, Request, Response, NextFunction } from 'express';
import UsersController from './users.controller';

export class UsersRouter {
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
    this.router.post('/', UsersController.create);
  }
}

//
// Create Router and export its configured Express.Router
const UsersRoutes = new UsersRouter();
UsersRoutes.init();

export default UsersRoutes.router;
