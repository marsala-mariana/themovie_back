const express = require("express");
const routerUsers = express.Router();
const { User } = require("../models");
const { validarAuth } = require("../middlewares/auth");
const { generateToken, validateToken } = require("../config/token");

//registro
routerUsers.post("/registro", (req, res) => {
  User.create(req.body).then((user) => {
    console.log(user, "USER");
    res.status(201).send(user);
  });
});

//login
routerUsers.post("/login", (req, res) => {
  const { email, contraseña } = req.body;

  User.findOne({ where: { email } }).then((user) => {
    if (!user) return res.sendStatus(401);
    user.validatePassword(contraseña).then((isValid) => {
      if (!isValid) return res.sendStatus(401);

      const payload = {
        email: user.email,
        nombre: user.nombre,

        id: user.id,
      };

      const token = generateToken(payload);

      res.cookie("token", token);

      res.send(payload);
    });
  });
});

//logout
routerUsers.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
});

//traigo todos los usuarios registrados
routerUsers.get("/usuarios", (req, res) => {
  User.findAll()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => console.log(err, "ERROR"));
});

module.exports = routerUsers;
