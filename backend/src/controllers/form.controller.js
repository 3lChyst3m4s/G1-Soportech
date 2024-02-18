import Form from "../models/form.model";

export const createForm = async (req, res) => {
  const { id, starCount, sentimentValue } = req.body;

  try {
    const form = await Form.create({
      requestId: id,
      starCount,
      sentimentValue,
    });
    res.status(201).json(form);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const getForm = async (req, res) => {
  const { id } = req.params;

  try {
    const form = await Form.findOne({
      where: {
        requestId: id,
      },
    });
    res.status(200).json(form);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getForms = async (req, res) => {
  try {
    const forms = await Form.findAll();
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};