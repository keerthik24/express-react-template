/**
 * Server Core File
 * Used for initializing ecxpress server and connecting routes
 */

// Imports
// ---------------------------------------------------------->
const express = require('express');
const config = require('./config');

// Initialize
// ---------------------------------------------------------->
const app = express();

// Routes
// ---------------------------------------------------------->
// root
app.get('/', (req, res) => {
	res.send(`Welcome to the ${config.expressConfig.appName}`);
});

// Start Server
// ---------------------------------------------------------->
// set port
app.set('port', config.expressConfig.port);

// listen
app.listen(app.get('port'), () => {
	console.log(`Server is listening on port http://localhost:${app.get('port')}`);
});
