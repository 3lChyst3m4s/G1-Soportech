import Request from '../models/request.model';

export const createRequest = async (req, res) => {
  const { title, description, endTime, classroom } = req.body;
  const { id } = req.user;

  const formattedEndTime = moment(endTime).format('YYYY-MM-DD HH:mm:ss');

  try {
    const request = await Request.create({
      title,
      description,
      endTime: formattedEndTime,
      classroom,
      userId: id,
    });
    res.status(201).json(request);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getRequests = async (req, res) => {
  try {
    const { id, roleId } = req.user;

    if (roleId === 1) {
      const requests = await Request.findAll({
        where: {
          userId: id,
        },
      });
      res.status(200).json(requests);
    } else if (role === 2 || role === 3) {
      const requests = await Request.findAll();
      res.status(200).json(requests);
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
    res.status(200).json(request);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteRequest = async (req, res) => {
  const { id } = req.params;
  try {
    await Request.destroy({
      where: {
        id,
      },
    });
    res.status(200).json({ message: 'Request deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const updateRequest = async (req, res) => {
  const { id } = req.params;
  const { title, description, endTime, classroom } = req.body;
  try {
    await Request.update(
      {
        title,
        description,
        endTime,
        classroom,
      },
      {
        where: {
          id,
        },
      }
    );
    res.status(200).json({ message: 'Request updated successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};