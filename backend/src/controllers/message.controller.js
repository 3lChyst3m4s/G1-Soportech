import Message from '../models/message.model';

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
  const { ticketId } = req.params;

  try {
    const messages = await Message.findAll({
      where: {
        ticketId,
      },
    });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

