"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestLogger = void 0;
var requestLogger = function requestLogger(req, res, next) {
  console.log("[".concat(new Date().toISOString(), "] ").concat(req.method, " ").concat(req.url));
  next();
};
exports.requestLogger = requestLogger;