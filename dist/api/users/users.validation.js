"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = require("@hapi/joi");
//Users Validation
var usersValidation = function (data) {
    var schema = joi_1.default.object({
        name: joi_1.default.string().min(6).required(),
        email: joi_1.default.string().min(6).required().email(),
        password: joi_1.default.string().min(6).required(),
    });
    return schema.validate(data);
};
exports.default = usersValidation;
//# sourceMappingURL=users.validation.js.map