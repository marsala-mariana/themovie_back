const Sequelize = require("sequelize");

const db = new Sequelize(
  "peliculas_4hix",
  peliculas_4hix_user,
  x6ywL1kHJEJCQERRCftD2Gi9MOwMXqmz,
  {
    host: "dpg-cf5buq9mbjsobakq8esg-a",
    dialect: "postgres",
    logging: false,
  }
);

module.exports = db;
