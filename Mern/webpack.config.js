
module.exports = {
	mode: 'development',
	entry: {
		app: './src/App.jsx',
		// vendor: ['react', 'react-dom', 'react-router-dom', 'whatwg-fetch', 'babel-polyfill'],
	},
	output: {
		path: `${__dirname}/static`,
		filename: '[name].bundle.js',
	},
  
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					chunks: 'all',
				}
			}
		}
	},

	module: {
		rules: [
			{ 
				test: /\.jsx$/,     // what files : jsx -> js
				exclude: /(node_modules|bower_components)/,
				use: [{ loader: 'babel-loader', options: {presets: ['es2015', 'react']} }]
			},
		],
	},
	devServer: {
		port: 8000,
		contentBase: 'static',
		proxy: {
			'/api/*': {
				target: 'http://localhost:3000',
			},
		},
	},
	devtool: 'source-map', // for debug
};