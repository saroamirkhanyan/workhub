"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRouter = void 0;
var express_1 = require("express");
var users_controller_1 = require("./users.controller");
var UsersRouter = /** @class */ (function () {
    /*--------  Constructor  --------*/
    function UsersRouter() {
        //
        // Set router
        this.router = express_1.Router();
        this.init();
    }
    /*--------  Methods  --------*/
    /**
     * Init all routes in this router
     */
    UsersRouter.prototype.init = function () {
        this.router.post('/', users_controller_1.default.create);
    };
    return UsersRouter;
}());
exports.UsersRouter = UsersRouter;
//
// Create Router and export its configured Express.Router
var UsersRoutes = new UsersRouter();
UsersRoutes.init();
exports.default = UsersRoutes.router;
//# sourceMappingURL=users.router.js.map