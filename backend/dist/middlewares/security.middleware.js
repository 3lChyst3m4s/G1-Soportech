"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.securityHeaders = void 0;
var securityHeaders = function securityHeaders(req, res, next) {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "deny");
  res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
  res.setHeader("Content-Security-Policy", "default-src 'self'");
  next();
};
exports.securityHeaders = securityHeaders;