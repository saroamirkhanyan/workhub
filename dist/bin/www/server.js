"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var express_1 = require("../../config/express");
/*--------  Start App  --------*/
var port = normalizePort(process.env.PORT || 9000);
express_1.default.set('port', port);
var server = http.createServer(express_1.default);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
/*--------  Methods  --------*/
/**
 * Normalize port
 * @param {*} val
 */
function normalizePort(val) {
    var port = typeof val === 'string' ? parseInt(val, 10) : val;
    if (isNaN(port))
        return val;
    else if (port >= 0)
        return port;
    else
        return false;
}
/**
 * On error
 * callback event for createServer error
 * @param {*} error
 */
function onError(error) {
    if (error.syscall !== 'listen')
        throw error;
    var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
}
/**
 * On listening
 * callback event for createServer listening
 */
function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string' ? "pipe " + addr : "port " + addr.port;
    console.info("Listening on " + bind);
}
//# sourceMappingURL=server.js.map