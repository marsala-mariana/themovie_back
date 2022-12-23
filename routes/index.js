const express = require("express");
const router = express.Router();

const routerUsers = require("../routes/User");
const routerFavorito = require("../routes/Favoritos");

router.use("/users", routerUsers);
router.use("/favorito", routerFavorito);

module.exports = router;
