const express = require("express");
const configureMiddleware = require("../config/middleware");
/*
const loginRouter = require("../routes/loginRouter");
const registrationRouter = require("../routes/registrationRouter");
const usersRouter = require("../routes/usersRouter");
*/

// Server initialization
const server = express();

configureMiddleware(server);

//Routes
/*
server.use("/api/registration", registrationRouter);
server.use("/api/login", loginRouter);
server.use("/api/users", usersRouter);
*/

module.exports = server;
