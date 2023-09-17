import {connect} from '../database';

export const getTasks = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query('SELECT * FROM tests');
  res.json(rows);
};

export const getTask = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query('SELECT * FROM tests WHERE id = ?',[req.params.id]);
  res.json(rows[0]);
};

export const getTaskCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query('SELECT COUNT(*) FROM tests');
  res.json(rows[0]["COUNT(*)"]);
};

export const createTask = (req, res) => {
  res.send('CREATE Tasks')
};

export const deleteTask = (req, res) => {
  res.send('DELETE Tasks')
};

export const updateTask = (req, res) => {
  res.send('UPDATE Tasks')
};