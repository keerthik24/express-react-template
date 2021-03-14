/**
 * React App Component Wrapper
 * recieves React components, Context/ Redux, Router etc.
 */

// Imports
// ---------------------------------------------------------->
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Pages/Home';

// App Component
// ---------------------------------------------------------->
const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
			</Switch>
		</Router>
	);
};

export default App;
