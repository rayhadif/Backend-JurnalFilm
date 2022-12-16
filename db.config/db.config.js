const { Client } = require('pg');
require('dotenv').config();
const { 
    DB_PORT, 
    DB_HOST,
    DB_USER,
    DB_PASS,
    DB_NAME
} = process.env;

const db = new Client({
    user: DB_USER,
    host: DB_HOST,
    database: DB_NAME,
    password: DB_PASS,
    port: DB_PORT,
});

module.exports = db;