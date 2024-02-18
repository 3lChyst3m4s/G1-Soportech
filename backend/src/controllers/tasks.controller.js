import Task from '../models/task.model.js';

export const getTasks = async (req, res) => {
  try {
    res.send('Obtencion tareas');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createTask = async (req, res) => {
  const { title, description, date } = req.body;
  try {
    const newTask = await Task.create({
      title,
      description,
      date,
      userId: req.user.id,
    });
    res.json(newTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const task = await Task.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id,
      },
    });
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.destroy({
      where: {
        id: req.params.id,
        userId: req.user.id,
      },
    });
    if (!deletedTask) return res.status(404).json({ message: "Task not found" });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.update(req.body, {
      where: {
        id: req.params.id,
        userId: req.user.id,
      },
      returning: true,
    });
    if (!updatedTask[0]) return res.status(404).json({ message: "Task not found" });
    res.json(updatedTask[1][0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};