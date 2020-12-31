"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var paginate_schema_1 = require("./paginate.schema");
var paginateValidation = function (data) {
    return paginate_schema_1.default.validate(data);
};
exports.default = paginateValidation;
//# sourceMappingURL=paginate.validation.js.map