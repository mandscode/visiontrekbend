const { createPool } = require("mysql");
var path = require("path");
require('dotenv').config({path: "./env_local"})

const pool = createPool({
    port: process.env.DB_PORT_REMOTELY,
    host: process.env.DB_HOST_REMOTELY,
    password: process.env.DB_PASS_REMOTELY,
    database: process.env.MYSQL_DB_REMOTELY,
    user: process.env.DB_USER_REMOTELY,
    connectionLimit: 100,
    acquireTimeout: 1000000,
    // port: process.env.DB_PORT,
    // host: process.env.DB_HOST,
    // password: process.env.DB_PASS,
    // database: process.env.MYSQL_DB,
    // user: process.env.DB_USER,
    // connectionLimit: 100,
    // acquireTimeout: 1000000,
});

const poolUser = createPool({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    password: process.env.DB_PASS,
    database: process.env.MYSQL_DB_USER,
    user: process.env.DB_USER,
    connectionLimit: 100,
    acquireTimeout: 1000000,
});


module.exports = { pool, poolUser };