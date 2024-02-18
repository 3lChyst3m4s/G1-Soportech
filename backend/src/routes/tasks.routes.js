import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "../controllers/tasks.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTaskSchema } from "../schemas/task.schema.js";

const router = new Router();

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
router.get("/tasks/:id", getTasks);

/**
 * @swagger
 * /tasks:
 * get:
 *  summary: Get all tasks
 *  tags: [Task]
 */
router.get("/tasks", getTask);

/**
 * @swagger
 * /tasks:
 * post:
 *  summary: Create a new task
 *  tags: [Task]
 */
router.post(
  "/tasks",
  validateSchema(createTaskSchema),
  createTask
);

/**
 * @swagger
 * /tasks/{id}:
 * delete:
 *  summary: Delete a task
 *  tags: [Task]
 */
router.delete("/tasks/:id", deleteTask);

/**
 * @swagger
 * /tasks/{id}:
 * put:
 *  summary: Update a task
 *  tags: [Task]
 */
router.put("/tasks/:id", updateTask);

export default router;
