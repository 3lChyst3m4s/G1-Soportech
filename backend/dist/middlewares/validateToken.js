"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authRequired = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _config = require("../config.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var TOKEN_SECRET = _config.authJwt.jwtSecret;
var authRequired = function authRequired(req, res, next) {
  var token = req.cookies.token;
  if (!token) return res.status(401).json({
    message: "Not token, authorization denied"
  });
  _jsonwebtoken["default"].verify(token, TOKEN_SECRET, function (err, user) {
    if (err) return res.status(403).json({
      message: "Invalid token"
    });
    req.user = user;
    next();
  });
};
exports.authRequired = authRequired;