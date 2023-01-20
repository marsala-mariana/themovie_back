const express = require("express");
const app = express();
const db = require("./db");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const routes = require("./routes");
const models = require("./models");

app.use(cookieParser());
app.use(
  cors({
    // Si aún no tenes deployado tu front en origin va la url local.
    // Una vez que se deploye el front acá va esa url que te entrega.
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    credentials: true,
  })
);
app.use(express.json());

app.use("/api", routes);

db.sync({ force: false }).then(() => {
  app.listen(5432, () => {
    console.log("server levantado en puerto 3001");
  });
});
