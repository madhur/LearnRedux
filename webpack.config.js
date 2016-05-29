// module.exports = {
// 	entry : './js/app.js',
// 	output: {
// 		path: __dirname,
// 		filename: './js/bundle.js'
// 	},

// 	resolve: {
// 		extensions: ['', '.js', '.jsx']
// 	}
// }

var webpack = require('webpack');


module.exports = {
	entry: [
	'script!jquery/dist/jquery.min.js',
	'script!bootstrap/dist/js/bootstrap.min.js', 
	'./app/app.jsx'
	],
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},

	resolve: {
		root: __dirname,
		alias: {
			applicationStyles: 'app/styles/app.scss'
		},
		
		extensions: ['', '.jsx', '.js' ]
	},
	module : {
		loaders: [
			{
				loader: 'babel-loader',
				query : {
					presets: [
						'react', 'es2015', 'stage-2'
					]
				},
				test: /\.jsx?$/,
				exclude: /(node_modules| bower_components)/
			},
			{
		        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
		        loader: 'url?limit=10000&mimetype=application/font-woff'
		      },
		      {
		        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
		        loader: 'url?limit=10000&mimetype=application/octet-stream'
		      },
		      {
		        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
		        loader: 'file'
		      },
		      {
		        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
		        loader: 'url?limit=10000&mimetype=image/svg+xml'
		      }
		]
	}
}