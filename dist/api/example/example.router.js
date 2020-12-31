"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleRouter = void 0;
var express_1 = require("express");
var example_controller_1 = require("./example.controller");
var ExampleRouter = /** @class */ (function () {
    /*--------  Constructor  --------*/
    function ExampleRouter() {
        // 
        // Set router
        this.router = express_1.Router();
        this.init();
    }
    /*--------  Methods  --------*/
    /**
     * Init all routes in this router
     */
    ExampleRouter.prototype.init = function () {
        this.router.get('/', example_controller_1.default.getAll);
        this.router.post('/', example_controller_1.default.create);
    };
    return ExampleRouter;
}());
exports.ExampleRouter = ExampleRouter;
// 
// Create Router and export its configured Express.Router
var exampleRoutes = new ExampleRouter();
exampleRoutes.init();
exports.default = exampleRoutes.router;
//# sourceMappingURL=example.router.js.map