"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var mongoosePaginate = require("mongoose-paginate-v2");
var WorkSchema = new mongoose_1.Schema({
    userId: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        min: 25,
        max: 1000,
    },
    hashtags: {
        type: Array,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
WorkSchema.plugin(mongoosePaginate);
exports.default = mongoose_1.model('Work', WorkSchema);
//# sourceMappingURL=works.model.js.map