import { Router, Request, Response, NextFunction } from 'express';
import WorksController from './works.controller';

export class WorksRouter {
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
    this.router.get('/', WorksController.getAll);
    this.router.post('/', WorksController.create);
  }
}

//
// Create Router and export its configured Express.Router
const WorksRouters = new WorksRouter();
WorksRouters.init();

export default WorksRouters.router;
