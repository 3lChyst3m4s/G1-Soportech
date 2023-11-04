import Message from '../models/message.model';
import Log from '../models/log.model';

export const createMessage = async (req, res) => {
  const { logId, content } = req.body;
  const { userId } = req.user;

  try {
    const message = await Message.create({
      logId,
      userId,
      content,
    });
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMessages = async (req, res) => {
  const { id } = req.params;

  try {
    const log = await Log.findOne({
      where: {
        requestId: id,
      },
    });

    const messages = await Message.findAll({
      where: {
        logId: log.dataValues.logId,
      },
    });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

