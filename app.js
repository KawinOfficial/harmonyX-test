const express = require("express");
const app = express();
const logger = require("morgan");
const cors = require("cors");

const PORT = process.env.PORT || 3005;

const apiRouter = require("./routes/api");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.send("HarmonyX Solution Test."));
app.use("/api", apiRouter);

app.listen(PORT, () => console.log(`Listen to port ${PORT}.`));
