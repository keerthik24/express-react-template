/**
 * Server Core File
 * Used for initializing ecxpress server and connecting routes
 */

// Modules
// ---------------------------------------------------------->
const express = require('express');
const app = express();
const port = 3000;
const appName = 'Template';

// Server
// ---------------------------------------------------------->

// initialize
app.get('/', (req, res) => {
	res.send(`Welcome to the ${appName}`);
});

// routes
// server routes

// listen
app.listen(port, () => {
	console.log(`Server is listening on port http://localhost:${port}`);
});
