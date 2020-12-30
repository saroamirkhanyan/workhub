"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Joi = require("@hapi/joi");
exports.default = Joi.object({
    page: Joi.number().min(1).required(),
    limit: Joi.number().min(1).required(),
});
//# sourceMappingURL=paginate.schema.js.map