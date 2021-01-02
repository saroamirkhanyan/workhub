import { Router, Request, Response, NextFunction } from 'express';
import UsersRouter from '../api/users/users.router';
import WorksRouter from '../api/works/works.router';
import AuthRouter from '../api/auth/auth.router';

export default class Routes {
  public router: Router;
  private app;

  /*--------  Constructor  --------*/

  constructor(app) {
    //
    // Set router
    this.router = Router();

    //
    // Set app
    this.app = app;

    //
    // Set all routes
    this.setAllRoutes();
  }

  /*--------  Methods  --------*/

  /**
   * Set all app routes
   */
  setAllRoutes() {
    /*--------  Set all custom routes here  --------*/

    //
    // Your routes goes here
    this.app.use('/api/users', UsersRouter);
    this.app.use('/api/works', WorksRouter);
    this.app.use('/api/auth', AuthRouter);
    /*--------  Main routes  --------*/

    //
    // Set main route for any other route found
    this.setMainRoute();
  }

  /**
   * Set main route
   * this route will be used for all other routes not found before
   */
  private setMainRoute() {
    //
    // All other routes should redirect to the index.html
    this.app.route('/*').get(this.index);
  }

  /**
   * Main route
   */
  private index(req: Request, res: Response, next: NextFunction) {
    res.json({
      message: 'Hello World!',
    });
  }
}
