const express = require("express");
const routerUsers = express.Router();

const { User } = require("../models");
const { validarAuth } = require("../middlewares/auth");
const { generateToken, validateToken } = require("../config/token");

routerUsers.post("/registro", (req, res) => {
  User.create(req.body).then((user) => {
    console.log(user, "USER");
    res.status(201).send(user);
  });
});

routerUsers.post("/login", (req, res) => {
  const { email, contraseña } = req.body;

  User.findOne({ where: { email } }).then((user) => {
    if (!user) return res.sendStatus(401);
    user.validatePassword(contraseña).then((isValid) => {
      if (!isValid) return res.sendStatus(401);

      const payload = {
        email: user.email,
        nombre: user.nombre,
        admin: user.admin,
        id: user.id,
      };

      const token = generateToken(payload);

      res.cookie("token", token);

      res.send(payload);
    });
  });
});

routerUsers.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
});

module.exports = routerUsers;
