export const authorizeRole = (allowedRoles) => (req, res, next) => {
  const { roleId } = req.user;
  console.log(req.user);

  if (!allowedRoles.includes(roleId)) {
    return res.status(403).json({ message: "Unauthorized" });
  }

  next();
};