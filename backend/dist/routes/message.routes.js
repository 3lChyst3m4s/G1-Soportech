"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _validateToken = require("../middlewares/validateToken.js");
var _messageController = require("../controllers/message.controller.js");
var router = (0, _express.Router)();

/**
 * @swagger
 * tags:
 *  name: Message
 *  description: Message management
 */

/**
 * @swagger
 * /api/messages/{id}:
 * get:
 *  summary: Get messages by id
 *  tags: [Message]
 */
router.get("/messages/:id", _validateToken.authRequired, _messageController.getMessages);

/**
 * @swagger
 * /api/messages:
 * post:
 *  summary: Create a new message
 *  tags: [Message]
 */
router.post("/messages", _validateToken.authRequired, _messageController.createMessage);
var _default = router;
exports["default"] = _default;