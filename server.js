/**
 * Server Core File
 * Used for initializing ecxpress server and connecting routes
 */

// Imports
// ---------------------------------------------------------->
const express = require('express');
const config = require('./config/config');
const app = express();
const expressPort = config.expressexpressPort;
const appName = config.appname;

// Server
// ---------------------------------------------------------->

// initialize
app.get('/', (req, res) => {
	res.send(`Welcome to the ${appName}`);
});

// routes
// server routes

// listen
app.listen(expressPort, () => {
	console.log(`Server is listening on port http://localhost:${expressPort}`);
});
