const Sequelize = require("sequelize");

const db = new Sequelize(
  "peliculas_blj2",
  peliculas_blj2_user,
  J49NCPSHGZf7PUAvHpC8JgwjhDZbUFDx,
  {
    host: "dpg-cf5e9kirrk09v0vhc0vg-a",
    dialect: "postgres",
    logging: false,
  }
);

module.exports = db;
