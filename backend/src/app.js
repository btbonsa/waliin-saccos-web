const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const authRoutes = require("./Routes/authsRoutes");
const announceRoutes = require("./Routes/announceRoutes");
const errorMiddleware = require("./middleWare/errorMiddleWare");

const app = express();

app.use(helmet());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/announcements", announceRoutes);

app.use(errorMiddleware);

module.exports = app;
