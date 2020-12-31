"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleRouter = void 0;
var express_1 = require("express");
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
        // this.router.get('/', ExampleController.getAll);
        // this.router.post('/', ExampleController.create);
    };
    return ExampleRouter;
}());
exports.ExampleRouter = ExampleRouter;
//
// Create Router and export its configured Express.Router
var exampleRoutes = new ExampleRouter();
exampleRoutes.init();
exports.default = exampleRoutes.router;
//# sourceMappingURL=paginate.router.js.map