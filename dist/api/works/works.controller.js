"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var works_validator_1 = require("./works.validator");
var works_model_1 = require("./works.model");
var WorksController = /** @class */ (function () {
    function WorksController() {
    }
    /**
     * Get all
     * @param {*} req
     * @param {*} res
     * @param {*} next
     */
    WorksController.getAll = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var page, limit, searchQuery, error, queryOptions, paginateOptions, queryHashtags, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        page = parseInt(req.query.page);
                        limit = parseInt(req.query.limit);
                        searchQuery = req.query.searchQuery;
                        error = works_validator_1.default.getAll({ page: page, limit: limit, searchQuery: searchQuery }).error;
                        if (error)
                            throw new Error(error);
                        queryOptions = {};
                        paginateOptions = {
                            page: page,
                            limit: limit,
                        };
                        // if searchQuery exsist add hashtags for search
                        if (searchQuery) {
                            queryHashtags = searchQuery.split(' ');
                            queryOptions.hashtags = { $in: queryHashtags };
                        }
                        return [4 /*yield*/, works_model_1.default.paginate(queryOptions, paginateOptions)];
                    case 1:
                        result = _a.sent();
                        // Response
                        res.json(result);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        //
                        console.log(error_1);
                        // Error response
                        res.json({ error: error_1 });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Create
     * @param {*} req
     * @param {*} res
     * @param {*} next
     */
    WorksController.create = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return WorksController;
}());
exports.default = WorksController;
//# sourceMappingURL=works.controller.js.map