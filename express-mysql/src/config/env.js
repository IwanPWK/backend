// const path = require("path");

// const config = {};
// require("dotenv").config({
//   path: path.resolve(__dirname, "../.env"), // kembali ke root
//   processEnv: config,
// });

const config = {};
require("dotenv").config({ processEnv: config });
module.exports = config;
