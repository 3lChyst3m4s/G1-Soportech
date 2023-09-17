import { Router } from 'express';
import { getTasks, getTask, getTaskCount, createTask, updateTask, deleteTask } from '../controllers/tasks';

const router = Router()

router.get('/tasks', getTasks)

router.get('/tasks/count', getTaskCount)

router.get('/tasks/:id', getTask)

router.post('/tasks', createTask)

router.delete('/tasks/:id', deleteTask)

router.put('/tasks', updateTask)

export default router