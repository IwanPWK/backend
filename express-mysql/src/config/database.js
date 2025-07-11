const mysql = require("mysql2");
const config = require("./env");

const pool = mysql.createPool({
  host: config.DB_HOST,
  user: config.DB_USER,
  database: config.DB_NAME,
  password: config.DB_PASSWORD,
});

module.exports = pool.promise();
