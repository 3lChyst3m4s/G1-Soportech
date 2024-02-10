"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _validateToken = require("../middlewares/validateToken.js");
var _formController = require("../controllers/form.controller.js");
var router = (0, _express.Router)();

/**
 * @swagger
 * tags:
 *  name: Form
 *  description: Form management
 */

/**
 * @swagger
 * /forms/{id}:
 * get:
 *   summary: Get forms by id
 *   tags: [Form]
 */
router.get("/forms/:id", _validateToken.authRequired, _formController.getForms);

/**
 * @swagger
 * /forms:
 * get:
 *   summary: Get all forms
 *   tags: [Form]
 */
router.get("/forms", _validateToken.authRequired, _formController.getForm);

/**
 * @swagger
 * /forms:
 * post:
 *   summary: Create a new form
 *   tags: [Form]
 */
router.post("/forms", _validateToken.authRequired, _formController.createForm);
var _default = router;
exports["default"] = _default;