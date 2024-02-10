"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _validateToken = require("../middlewares/validateToken.js");
var _logController = require("../controllers/log.controller.js");
var router = (0, _express.Router)();

/**
 * @swagger
 * tags:
 *  name: Log
 *  description: Log management
 */

/**
 * @swagger
 * /api/logs/{id}:
 * get:
 *  summary: Get log by id
 *  tags: [Log]
 */
router.get("/logs/:id", _validateToken.authRequired, _logController.getLog);

/**
 * @swagger
 * /api/logs:
 * post:
 *  summary: Create a new log
 *  tags: [Log]
 */
router.post("/logs", _validateToken.authRequired, _logController.createLog);
var _default = router;
exports["default"] = _default;