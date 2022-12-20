const { validateToken } = require("../config/token");

const validarAdmin = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.sendStatus(401);

  const { user } = validateToken(token);
  console.log(user, "USER");
  if (!user.admin) return res.sendStatus(401);

  req.user = user;

  next();
};

module.exports = { validarAdmin };
