"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Joi = require("@hapi/joi");
var UsersValidator = /** @class */ (function () {
    function UsersValidator() {
    }
    /**
     *
     * @param data
     *
     */
    UsersValidator.create = function (data) {
        var schema = Joi.object({
            name: Joi.string().min(6).required(),
            email: Joi.string().min(6).required().email(),
            password: Joi.string().min(6).required(),
        });
        return schema.validate(data);
    };
    return UsersValidator;
}());
exports.default = UsersValidator;
//# sourceMappingURL=users.validator.js.map