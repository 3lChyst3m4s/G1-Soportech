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

export const createTask = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query('INSERT INTO tests(title, description) VALUES (?,?)', [
    req.body.title,
    req.body.description
  ]);
  
  res.json({
    id: results.insertId,
    ...req.body,
  });
};

export const deleteTask = async (req, res) => {
  const connection = await connect();
  await connection.query("DELETE FROM tests WHERE id = ?", [
    req.params.id,
  ]);

  res.sendStatus(204);
};

export const updateTask = async (req, res) => {
  const connection = await connect();
  await connection.query('UPDATE tests SET ? WHERE id = ?', [
    req.body,
    req.params.id
  ])

  res.sendStatus(204);
};