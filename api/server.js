const express = require("express");
const configureMiddleware = require("../config/middleware");
const authRouter = require("../routes/authRouter");
const usersRouter = require("../routes/usersRouter");

// Server initialization
const server = express();

configureMiddleware(server);

//Routes
server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);

module.exports = server;
