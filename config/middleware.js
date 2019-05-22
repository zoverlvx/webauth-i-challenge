const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");
const KnexSessionsStore = require("connect-session-knex")(session);
const sessionConfig = require("./sessionConfig");

// we add this to configure the instance of knex
sessionConfig.store = new KnexSessionsStore({ 
    // configures the instance of knex
    knex: require("../data/dbConfig"), 
    // table that will store sessions inside the db, name it anything we want
    tablename: "sessions",  
    // column that will hold the session id, name this whatever we want
    sidfieldname: "sid",
    // if the table doesn't exist, it will be created automatically for us
    createtable: true,
    // the amount of time before checking old sessions and removing them from the database to keep everything clean and performant.
    clearInterval: 1000 * 60 * 60
});

module.exports = server => {
    server.use(express.json());
    server.use(helmet());
    server.use(cors());
    server.use(session(sessionConfig));
}
