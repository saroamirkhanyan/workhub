"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
var express_1 = require("express");
var auth_controller_1 = require("./auth.controller");
var AuthRouter = /** @class */ (function () {
    /*--------  Constructor  --------*/
    function AuthRouter() {
        //
        // Set router
        this.router = express_1.Router();
        this.init();
    }
    /*--------  Methods  --------*/
    /**
     * Init all routes in this router
     */
    AuthRouter.prototype.init = function () {
        this.router.get('/', auth_controller_1.default.getAll);
        this.router.post('/', auth_controller_1.default.create);
    };
    return AuthRouter;
}());
exports.AuthRouter = AuthRouter;
//
// Create Router and export its configured Express.Router
var authRoutes = new AuthRouter();
authRoutes.init();
exports.default = authRoutes.router;
//# sourceMappingURL=auth.router.js.map