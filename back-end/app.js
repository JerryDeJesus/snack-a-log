const cors = require("cors");
const express = require("express");
const snackController = require("./controllers/snackController");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Get Snack'n at Snack-a-log!")
})

app.use("/snacks", snackController);

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;
