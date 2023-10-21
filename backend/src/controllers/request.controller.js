import User from '../models/user.model';
import TypeRequest from '../models/typeRequest.model';
import CategoryRequest from '../models/categoryRequest.model';
import StateRequest from '../models/stateRequest.model';
import Connection from '../models/connection.model';
import Request from '../models/request.model';
import moment from 'moment';

export const createRequest = async (req, res) => {
  const { title, connectionId, description, endTime, classroom, stateId, conditionId } = req.body;
  const { userId } = req.user;

  const formattedEndTime = moment(endTime, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');

  try {
    const request = await Request.create({
      clientId: userId,
      connectionId,
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
        console.log(stateId);
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
    const clientId = request.dataValues.clientId;
    const connectionId = request.dataValues.connectionId;

    const connection = await Connection.findOne({ where: { connectionId } });
    const typeId = connection.dataValues.typeId;
    const categoryId = connection.dataValues.categoryId;

    const typeRequest = await TypeRequest.findOne({ where: { typeId } });
    const categoryRequest = await CategoryRequest.findOne({ where: { categoryId} });

    const client = await User.findOne({ where: { userId: clientId } })

    const formattedRequest = {
      ...request.dataValues,
      clientName: client.dataValues.name,
      typeRequest: typeRequest.dataValues.name,
      categoryRequest: categoryRequest.dataValues.name,
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
  const { title, resolutorId, connectionId, description, endTime, classroom, stateId, conditionId } = req.body;

  const formattedEndTime = moment(endTime, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');

  try {
    await Request.update(
      {
        title,
        resolutorId,
        connectionId,
        description,
        endTime: formattedEndTime,
        classroom,
        stateId,
        conditionId,
      },
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