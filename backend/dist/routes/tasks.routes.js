"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _validateToken = require("../middlewares/validateToken.js");
var _tasksController = require("../controllers/tasks.controller.js");
var _validatorMiddleware = require("../middlewares/validator.middleware.js");
var _taskSchema = require("../schemas/task.schema.js");
var router = new _express.Router();

/**
 * @swagger
 * tags:
 *  name: Task
 *  description: Task management
 */

/**
 * @swagger
 * /tasks/{id}:
 * get:
 *  summary: Get tasks by id
 *  tags: [Task]
 */
router.get("/tasks/:id", _validateToken.authRequired, _tasksController.getTasks);

/**
 * @swagger
 * /tasks:
 * get:
 *  summary: Get all tasks
 *  tags: [Task]
 */
router.get("/tasks", _validateToken.authRequired, _tasksController.getTask);

/**
 * @swagger
 * /tasks:
 * post:
 *  summary: Create a new task
 *  tags: [Task]
 */
router.post("/tasks", _validateToken.authRequired, (0, _validatorMiddleware.validateSchema)(_taskSchema.createTaskSchema), _tasksController.createTask);

/**
 * @swagger
 * /tasks/{id}:
 * delete:
 *  summary: Delete a task
 *  tags: [Task]
 */
router["delete"]("/tasks/:id", _validateToken.authRequired, _tasksController.deleteTask);

/**
 * @swagger
 * /tasks/{id}:
 * put:
 *  summary: Update a task
 *  tags: [Task]
 */
router.put("/tasks/:id", _validateToken.authRequired, _tasksController.updateTask);
var _default = router;
exports["default"] = _default;