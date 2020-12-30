"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorksRouter = void 0;
var express_1 = require("express");
var works_controller_1 = require("./works.controller");
var WorksRouter = /** @class */ (function () {
    /*--------  Constructor  --------*/
    function WorksRouter() {
        //
        // Set router
        this.router = express_1.Router();
        this.init();
    }
    /*--------  Methods  --------*/
    /**
     * Init all routes in this router
     */
    WorksRouter.prototype.init = function () {
        this.router.get('/', works_controller_1.default.getAll);
        this.router.post('/', works_controller_1.default.create);
    };
    return WorksRouter;
}());
exports.WorksRouter = WorksRouter;
//
// Create Router and export its configured Express.Router
var worksRouters = new WorksRouter();
worksRouters.init();
exports.default = worksRouters.router;
//# sourceMappingURL=works.router.js.map