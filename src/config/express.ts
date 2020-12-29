import * as fs from 'fs';
import * as dotenv from 'dotenv';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as logger from 'morgan';
import * as path from 'path';
import * as mongoose from 'mongoose';
import * as cors from 'cors';

import Routes from './routes';

class Express {
  public app: express.Express;
  private envFile: string = '../../.env';

  /*--------  Constructor  --------*/

  constructor() {
    //
    // ENV
    this.setEnv();

    //
    // Mongo
    this.connectToMongo();

    //
    // Start App
    this.app = express();

    // Middleware
    this.setMiddleware();

    //
    // Set static files
    this.setStaticFiles();

    //
    // Routes
    this.setRoutes();
  }

  /*--------  Methods  --------*/

  /**
   * Set env
   * Set env from .env or .env.${NODE_ENV} file using dotenv
   */
  private setEnv() {
    //
    // Add NODE_ENV to path if is not production
    if (process.env.NODE_ENV !== 'production')
      this.envFile += '.' + process.env.NODE_ENV;
    // Set env from file
    const envFilePath = path.join(__dirname, this.envFile).trim();
    const envConfig = dotenv.parse(fs.readFileSync(envFilePath));
    // merge envConfig and process.env
    Object.assign(process.env, envConfig);
  }

  /**
   * Connect to mongo
   */
  private connectToMongo() {
    //
    // Connect to mongo using mongoose
    // @todo: fix "open()" DeprecationWarning warning
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  /**
   * Set middleware
   */
  private setMiddleware() {
    //
    // Add logging
    this.app.use(logger('dev'));

    //
    // Add body parser
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));

    // Add cookie parser
    this.app.use(cookieParser());

    // set Cors
    this.app.use(cors());
  }

  /**
   * Set static files
   */
  private setStaticFiles() {
    //
    // Set static route for public folder
    this.app.use(express.static(path.join(__dirname, '../../src/public')));
  }

  /**
   * Set routes
   */
  private setRoutes() {
    //
    // Create Routes, and export its configured Express.Router
    new Routes(this.app);
  }
}

export default new Express().app;
