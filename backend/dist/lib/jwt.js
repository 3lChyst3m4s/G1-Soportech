"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAccessToken = createAccessToken;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _config = require("../config.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var TOKEN_SECRET = _config.authJwt.jwtSecret;
function createAccessToken(payload) {
  return new Promise(function (resolve, reject) {
    _jsonwebtoken["default"].sign(payload, TOKEN_SECRET, {
      expiresIn: "1d"
    }, function (err, token) {
      if (err) reject(err);
      resolve(token);
    });
  });
}