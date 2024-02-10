"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _authController = require("../controllers/auth.controller.js");
var _validateToken = require("../middlewares/validateToken.js");
var _validatorMiddleware = require("../middlewares/validator.middleware.js");
var _authSchema = require("../schemas/auth.schema.js");
var router = (0, _express.Router)();

/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: Authentication
 */

/**
 * @swagger
 * /api/auth/register:
 * post:
 *   summary: Register a new user
 *   tags: [Auth]
 */
router.post("/register", (0, _validatorMiddleware.validateSchema)(_authSchema.registerSchema), _authController.register);

/**
 * @swagger
 * /api/auth/login:
 * post:
 *  summary: Login a user
 *  tags: [Auth]
 */
router.post("/login", (0, _validatorMiddleware.validateSchema)(_authSchema.loginSchema), _authController.login);

/**
 * @swagger 
 * /api/auth/logout:
 * post:
 *  summary: Logout a user
 *  tags: [Auth]
 */
router.post("/logout", _authController.logout);

/**
 * @swagger
 * /api/auth/profile/{id}:
 * get:
 *  summary: Get user profile
 *  tags: [Auth]
 */
router.get("/profile/:id", _validateToken.authRequired, _authController.profile);
var _default = router;
exports["default"] = _default;