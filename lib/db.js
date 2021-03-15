/**
 * Database Core File
 * Connects to database
 */

// Imports
// ---------------------------------------------------------->
const dbConfig = require('../config').sqlConfig;
const mySql = require('mysql2');

// Init & Connect
// ---------------------------------------------------------->
const db = mySql.createConnection(dbConfig);

db.connect(err => {
  if (!err) {
    console.log(`Database ${dbConfig.database} is connected`);
  } else {
    console.log(err);
  }
});

module.exports = db;
