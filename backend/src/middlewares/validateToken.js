import jwt from "jsonwebtoken";
import { authJwt } from "../config.js";

const TOKEN_SECRET = authJwt.jwtSecret;

export const authRequired = (req, res, next) => {
  const { token } = req.cookies;

  if (!token)
    return res.status(401).json({ message: "Not token, authorization denied" });

  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;

    next();
  });
};
