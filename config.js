/**
 * Server Config
 * Saves database and server variables
 */

module.exports = {
  expressConfig: {
    appName: 'Template App',
    port: process.env.EXPRESSPORT || 3000,
  },

  sqlConfig: {
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'template-test',
  },
};
