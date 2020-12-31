"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    title: String,
    subtitle: String
});
exports.default = mongoose_1.model('Example', schema);
//# sourceMappingURL=example.model.js.map