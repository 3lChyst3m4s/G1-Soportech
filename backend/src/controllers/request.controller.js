import User from '../models/user.model';
import TypeRequest from '../models/typeRequest.model';
import CategoryRequest from '../models/categoryRequest.model';
import StateRequest from '../models/stateRequest.model';
import Connection from '../models/connection.model';
import Request from '../models/request.model';
import moment from 'moment';

export const createRequest = async (req, res) => {
  const { title, typeId, categoryId, description, endTime, classroom, stateId, conditionId } = req.body;
  const { userId } = req.user;

  const formattedEndTime = moment(endTime, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');

  try {
    const connection = await Connection.findOne({ where: { typeId, categoryId } });

    const request = await Request.create({
      clientId: userId,
      connectionId: connection.dataValues.connectionId,
      stateId,
      title,
      description,
      endTime: formattedEndTime,
      classroom,
      conditionId,
    });
    res.status(201).json(request);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getRequests = async (req, res) => {
  const { userId } = req.user;

  try {
    const userFound = await User.findOne({ where: { userId } });
    const { roleId } = userFound;

    if (roleId === 1) {
      const requests = await Request.findAll({
        where: {
          clientId: userId,
        },
      });
    
      const formattedRequests = await Promise.all(requests.map(async request => {
        const stateId = request.dataValues.stateId;
        const stateRequest = await StateRequest.findOne({ where: { stateId } });
    
        return {
          ...request.dataValues,
          stateRequest: stateRequest.dataValues.name,
          endTime: moment(request.dataValues.endTime).format('DD/MM/YYYY'),
        };
      }));
    
      res.status(200).json(formattedRequests);
    } else if (roleId === 2 || roleId === 3) {
      const requests = await Request.findAll();
      
      const formattedRequests = await Promise.all(requests.map(async request => {
        const stateId = request.dataValues.stateId;
        const stateRequest = await StateRequest.findOne({ where: { stateId } });
    
        return {
          ...request.dataValues,
          stateRequest: stateRequest.dataValues.name,
          endTime: moment(request.dataValues.endTime).format('DD/MM/YYYY'),
        };
      }));

      res.status(200).json(formattedRequests);
    } else {
      res.status(403).json({ message: 'No tienes permisos para acceder a estas solicitudes.' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getRequest = async (req, res) => {
  const { id } = req.params;

  try {
    const request = await Request.findByPk(id);
    const { clientId, solverId, connectionId } = request.dataValues;

    const { typeId, categoryId } = await Connection.findOne({ where: { connectionId } });

    const { name: nameType } = await TypeRequest.findOne({ where: { typeId } });
    const { name: nameCategory } = await CategoryRequest.findOne({ where: { categoryId} });

    const { name: nameClient } = await User.findOne({ where: { userId: clientId } })
    
    let namesolver = '';

    if (solverId) {
      const { name: solverName } = await User.findOne({ where: { userId: solverId } });
      namesolver = solverName; // Asigna el valor a namesolver
    } else {
      namesolver = 'Sin asignar';
    }

    const formattedRequest = {
      ...request.dataValues,
      clientName: nameClient,
      solverName: namesolver,
      typeRequest: nameType,
      categoryRequest: nameCategory,
      endTime: moment(request.dataValues.endTime).format('DD/MM/YYYY'),
    };

    res.status(200).json(formattedRequest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteRequest = async (req, res) => {
  const { id } = req.params;
  try {
    await Request.destroy({
      where: {
        requestId: id,
      },
    });
    res.status(200).json({ message: 'Request deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const updateRequest = async (req, res) => {
  const { id } = req.params;
  const { title, solverId, connectionId, description, endTime, classroom, stateId, conditionId } = req.body;

  const updateFields = {};

  if (title) updateFields.title = title;
  if (solverId) updateFields.solverId = solverId;
  if (connectionId) updateFields.connectionId = connectionId;
  if (description) updateFields.description = description;
  if (endTime) {
    const formattedEndTime = moment(endTime, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');
    updateFields.endTime = formattedEndTime;
  }
  if (classroom) updateFields.classroom = classroom;
  if (stateId) updateFields.stateId = stateId;
  if (conditionId) updateFields.conditionId = conditionId;

  try {
    await Request.update(
      updateFields,
      {
        where: {
          requestId: id,
        },
      }
    );
    res.status(200).json({ message: 'Request updated successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};