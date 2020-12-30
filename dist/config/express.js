"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var dotenv = require("dotenv");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var express = require("express");
var logger = require("morgan");
var path = require("path");
var mongoose = require("mongoose");
var cors = require("cors");
var routes_1 = require("./routes");
var Express = /** @class */ (function () {
    /*--------  Constructor  --------*/
    function Express() {
        this.envFile = '../../.env';
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
    Express.prototype.setEnv = function () {
        //
        // Add NODE_ENV to path if is not production
        if (process.env.NODE_ENV !== 'production')
            this.envFile += '.' + process.env.NODE_ENV;
        // Set env from file
        var envFilePath = path.join(__dirname, this.envFile).trim();
        var envConfig = dotenv.parse(fs.readFileSync(envFilePath));
        // merge envConfig and process.env
        Object.assign(process.env, envConfig);
    };
    /**
     * Connect to mongo
     */
    Express.prototype.connectToMongo = function () {
        //
        // Connect to mongo using mongoose
        // @todo: fix "open()" DeprecationWarning warning
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    };
    /**
     * Set middleware
     */
    Express.prototype.setMiddleware = function () {
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
    };
    /**
     * Set static files
     */
    Express.prototype.setStaticFiles = function () {
        //
        // Set static route for public folder
        this.app.use(express.static(path.join(__dirname, '../../src/public')));
    };
    /**
     * Set routes
     */
    Express.prototype.setRoutes = function () {
        //
        // Create Routes, and export its configured Express.Router
        new routes_1.default(this.app);
    };
    return Express;
}());
exports.default = new Express().app;
//# sourceMappingURL=express.js.map