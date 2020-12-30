"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var paginate_schema_1 = require("./paginate.schema");
var PaginateController = /** @class */ (function () {
    function PaginateController() {
    }
    /**
     * Paginate
     * @param {*} req
     * @param {*} res
     * @param {*} next
     */
    PaginateController.paginate = function (req, res, next) {
        var _a = req.query, page = _a.page, limit = _a.limit;
        var error = paginate_schema_1.default.validate({ page: page, limit: limit }).error;
    };
    return PaginateController;
}());
exports.default = PaginateController;
//# sourceMappingURL=paginate.controller.js.map