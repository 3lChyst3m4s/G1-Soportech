import { Router } from "express";

import {
  createRequest,
  deleteRequest,
  getCountRequests,
  getRequest,
  getRequests,
  getRequestsFiltered,
  updateRequest,
} from "../controllers/request.controller.js";

import { authorizeRole } from "../middlewares/authorization.middleware.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createRequestSchema } from "../schemas/request.schema.js";

const router = Router();

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
router.post(
  "/requests",
  authRequired,
  validateSchema(createRequestSchema),
  createRequest
);

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
router.route("/requests/:id")
  .get(authRequired, getRequest)
  .put(authRequired, updateRequest)
  .delete(authRequired,deleteRequest);

/**
 * @swagger
 * /api/countrequests/{id}:
 * get:
 *  summary: Get the number of requests
 *  tags: [Requests]
 */
router.get(
  "/countrequests/:id",
  authRequired,
  authorizeRole([2]),
  getCountRequests
);

/**
 * @swagger
 * /api/requestsglobal/{id}:
 * get:
 *  summary: Get all requests
 *  tags: [Requests]
 */
router.get(
  "/requestsglobal/:id", 
  authRequired, 
  getRequests
);

/**
 * @swagger
 * /api/requestsfiltered/{id}:
 * get:
 *  summary: Get all requests filtered by role
 *  tags: [Requests]
 */
router.get(
  "/requestsfiltered/:id", 
  authRequired,
  authorizeRole([2]),
  getRequestsFiltered
);

export default router;