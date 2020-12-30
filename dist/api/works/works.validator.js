"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Joi = require("@hapi/joi");
var paginate_schema_1 = require("../paginate/paginate.schema");
var WorksValidator = /** @class */ (function () {
    function WorksValidator() {
    }
    /**
     *
     * @param data
     *
     */
    WorksValidator.getAll = function (data) {
        var schema = paginate_schema_1.default.append({
            searchQuery: Joi.string(),
        });
        return schema.validate(data);
    };
    return WorksValidator;
}());
exports.default = WorksValidator;
//# sourceMappingURL=works.validator.js.map