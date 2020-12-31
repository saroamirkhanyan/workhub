"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var users_router_1 = require("../api/users/users.router");
var works_router_1 = require("../api/works/works.router");
var Routes = /** @class */ (function () {
    /*--------  Constructor  --------*/
    function Routes(app) {
        //
        // Set router
        this.router = express_1.Router();
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
    Routes.prototype.setAllRoutes = function () {
        /*--------  Set all custom routes here  --------*/
        //
        // Your routes goes here
        this.app.use('/api/users', users_router_1.default);
        this.app.use('/api/works', works_router_1.default);
        /*--------  Main routes  --------*/
        //
        // Set main route for any other route found
        this.setMainRoute();
    };
    /**
     * Set main route
     * this route will be used for all other routes not found before
     */
    Routes.prototype.setMainRoute = function () {
        //
        // All other routes should redirect to the index.html
        this.app.route('/*').get(this.index);
    };
    /**
     * Main route
     */
    Routes.prototype.index = function (req, res, next) {
        res.json({
            message: 'Hello World!',
        });
    };
    return Routes;
}());
exports.default = Routes;
//# sourceMappingURL=routes.js.map