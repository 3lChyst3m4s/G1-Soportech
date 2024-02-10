"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authorizeRole = void 0;
var authorizeRole = function authorizeRole(allowedRoles) {
  return function (req, res, next) {
    var roleId = req.user.roleId;
    console.log(req.user);
    if (!allowedRoles.includes(roleId)) {
      return res.status(403).json({
        message: "Unauthorized"
      });
    }
    next();
  };
};
exports.authorizeRole = authorizeRole;