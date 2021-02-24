/**
 * Webpack Config File
 * configures webpack compiler 
 */

// Imports
// ---------------------------------------------------------->
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

// Module
// ---------------------------------------------------------->
module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'index_bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './src/index.html'
		})
	]
};
