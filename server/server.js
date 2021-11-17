const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const db = require("./config/db");
const app = express();
const sauceRoutes = require("./routes/sauce");
const userRoutes = require("./routes/user");

const { PORT } = process.env;

db();
app.use(cors());

app.use(bodyParser.json());

app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/api/sauces", sauceRoutes);
app.use("/api/auth", userRoutes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
