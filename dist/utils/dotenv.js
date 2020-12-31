"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dotenvConfig = void 0;
var fs = require("fs");
var dotenv = require("dotenv");
var path = require("path");
// add .env.NODE_ENV properties to process.env
function dotenvConfig(_a) {
    var envFile = _a.envFile;
    var envFilePath = path.join(__dirname, envFile).trim();
    var envConfig = dotenv.parse(fs.readFileSync(envFilePath));
    for (var k in envConfig) {
        process.env[k] = envConfig[k];
    }
}
exports.dotenvConfig = dotenvConfig;
//# sourceMappingURL=dotenv.js.map