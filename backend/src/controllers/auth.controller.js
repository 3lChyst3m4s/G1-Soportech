import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../lib/jwt.js";

export const register = async (req, res) => {
  const { name, email, password, phone, address, city, photo, roleId } = req.body;
  try {
    const userFound = await User.findOne({ where: { email } });
    if (userFound) return res.status(400).json(["The email already exists"]);

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: passwordHash,
      phone,
      address,
      city,
      photo,
      roleId,
    });

    const userSaved = await newUser.save();
    const token = await createAccessToken({ userId: userSaved.userId });

    res.cookie("token", token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });

    res.json({
      userId: userSaved.userId,
      name: userSaved.name,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await User.findOne({ where: { email } });
    if (!userFound) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch)
      return res.status(400).json({ message: "Incorrect password" });

    const token = await createAccessToken({ userId: userFound.userId, photo: userFound.photo, roleId: userFound.roleId });

    res.cookie("token", token);

    res.json({
      userId: userFound.userId,
      name: userFound.name,
      email: userFound.email,
      phone: userFound.phone,
      address: userFound.address,
      city: userFound.city,
      roleId: userFound.roleId,
      photo: userFound.photo,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    if (error.name === 'SequelizeDatabaseError') {
      res.status(500).json({ message: "Database error occurred" });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }  
};

export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });

  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  const { id } = req.params;
  const userFound = await User.findByPk(id);

  if (!userFound) return res.status(400).json({ message: "User not found" });

  return res.json({
    userId: userFound.userId,
    name: userFound.name,
    email: userFound.email,
    phone: userFound.phone,
    address: userFound.address,
    city: userFound.city,
    roleId: userFound.roleId,
    photo: userFound.photo,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  });
};
