"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Joi = require("@hapi/joi");
var paginate_schema_1 = require("../paginate/paginate.schema");
var WorksValidation = /** @class */ (function () {
    function WorksValidation() {
    }
    /**
     *
     * @param data
     *
     */
    WorksValidation.getAll = function (data) {
        var schema = paginate_schema_1.default.append({
            searchQuery: Joi.string(),
        });
        return schema.validate(data);
    };
    return WorksValidation;
}());
exports.default = WorksValidation;
//# sourceMappingURL=works.validation.js.map