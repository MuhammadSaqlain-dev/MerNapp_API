const express = require("express");
// const { errorHandler } = require("./middlewares/errorMiddlewares");
const dotenv = require("dotenv").config();
const mongoConn = require("./config/db");
const colors = require("colors");
const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded());

// app.use(errorHandler);
mongoConn();

app.use("/api/goals", require("./routes/goalRoutes"));

app.listen(port, () => console.log(`app is listening on port ${port}`));
