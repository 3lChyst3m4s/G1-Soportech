import Log from "../models/log.model";
import Request from "../models/request.model";

export const createLog = async (req, res) => {
  const { id } = req.body;
  const { userId } = req.user;

  try {
    const { clientId } = await Request.findOne({ where: { requestId: id } });

    const log = await Log.create({
      requestId: id,
      clientId,
      solverId: userId,
    });
    res.status(201).json(log);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const getLog = async (req, res) => {
  const { id } = req.params;

  try {
    const log = await Log.findOne({
      where: {
        requestId: id,
      },
    });
    res.status(200).json(log);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};