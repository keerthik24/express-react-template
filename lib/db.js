/**
 * Database Core Class
 * Creates new instance of database class
 * Connects to MySql database
 * Builds Queries
 */

// Imports
// ---------------------------------------------------------->
const sqlConfig = require('../config').sqlConfig;
const mySql = require('mysql2');

// Database Class
// ---------------------------------------------------------->
class Database {

  private connection;

  constructor(config) {
    this.connection = mySql.createConnection(config);

    this.connection.connect(err => {
      if (!err) {
        console.log(`Database ${config.database} is connected at port ${config.port}`);
      } else {
        console.log(err);
      }
    })
  }

}

module.exports = new Database(sqlConfig);
