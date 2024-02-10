"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _requestController = require("../controllers/request.controller.js");
var _authorizationMiddleware = require("../middlewares/authorization.middleware.js");
var _validateToken = require("../middlewares/validateToken.js");
var _validatorMiddleware = require("../middlewares/validator.middleware.js");
var _requestSchema = require("../schemas/request.schema.js");
var router = (0, _express.Router)();

/**
 * @swagger
 * tags:
 *  name: Requests
 *  description: Request management
 */

/**
 * @swagger
 * /api/requests:
 * post:
 *  summary: Create a new request
 *  tags: [Requests]
 */
router.post("/requests", _validateToken.authRequired, (0, _validatorMiddleware.validateSchema)(_requestSchema.createRequestSchema), _requestController.createRequest);

/**
 * @swagger
 * /api/requests/{id}:
 * get:
 *  summary: Get a request by id
 *  tags: [Requests]
 * put:
 *  summary: Update a request
 *  tags: [Requests]
 * delete:
 *  summary: Remove a request
 *  tags: [Requests]
 */
router.route("/requests/:id").get(_validateToken.authRequired, _requestController.getRequest).put(_validateToken.authRequired, _requestController.updateRequest)["delete"](_validateToken.authRequired, _requestController.deleteRequest);

/**
 * @swagger
 * /api/countrequests/{id}:
 * get:
 *  summary: Get the number of requests
 *  tags: [Requests]
 */
router.get("/countrequests/:id", _validateToken.authRequired, (0, _authorizationMiddleware.authorizeRole)([2]), _requestController.getCountRequests);

/**
 * @swagger
 * /api/requestsglobal/{id}:
 * get:
 *  summary: Get all requests
 *  tags: [Requests]
 */
router.get("/requestsglobal/:id", _validateToken.authRequired, _requestController.getRequests);

/**
 * @swagger
 * /api/requestsfiltered/{id}:
 * get:
 *  summary: Get all requests filtered by role
 *  tags: [Requests]
 */
router.get("/requestsfiltered/:id", _validateToken.authRequired, (0, _authorizationMiddleware.authorizeRole)([2]), _requestController.getRequestsFiltered);
var _default = router;
exports["default"] = _default;