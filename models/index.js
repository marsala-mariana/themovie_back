const User = require("./User");
const Favorito = require("./Favoritos");

//User.hasMan(Favorito);
//Favorito.belongsTo(User);

User.belongsTo(Favorito, { through: "elegidos" });

Favorito.belongsTo(User, { through: "elegidos" });

module.exports = { User, Favorito };
