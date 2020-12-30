"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_schema_1 = require("./auth.schema");
var AuthValidator = /** @class */ (function () {
    function AuthValidator() {
    }
    /**
     *
     * @param data
     *
     */
    AuthValidator.signIn = function (data) {
        var schema = auth_schema_1.signInSchema;
        return schema.validate(data);
    };
    /**
     *
     * @param data
     *
     */
    AuthValidator.signUp = function (data) {
        var schema = auth_schema_1.signUpSchema;
        return schema.validate(data);
    };
    return AuthValidator;
}());
exports.default = AuthValidator;
//# sourceMappingURL=auth.validator.js.map