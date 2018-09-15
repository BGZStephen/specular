const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

module.exports = {
	mode: 'development',
	entry: ['./src/app.js'],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						scss: [
		          'vue-style-loader',
		          'css-loader',
		          'postcss-loader',
		          'sass-loader',
		          {
		            loader: 'sass-resources-loader',
		            options: {
		              resources: path.resolve(__dirname, 'app/src/renderer/styles/variables.scss'), // for example
		            },
		          },
		        ],
					},
					extractCSS: true,
				},
			},
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
						loader: 'css-loader', options: {
							importLoaders: 1,
							config: {
				      	path: './postcss.config.js'
				    	}
						}
					},
          'postcss-loader'
        ]
      },
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
	resolve: {
		// Add `.ts` and `.tsx` as a resolvable extension.
		extensions: ['.vue', '.js'],
		alias: {
			'@styles': path.resolve(__dirname, 'src/styles/'),
			'@modules': path.resolve(__dirname, 'src/modules/'),
			'@services': path.resolve(__dirname, 'src/services/'),
		},
	},
	devServer: {
		historyApiFallback: true,
		overlay: true,
	},
	performance: {
		hints: false,
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js',
		},
	},
	devtool: '#eval-source-map',
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true,
		}),
		new MiniCssExtractPlugin({
			filename: 'style.css',
		}),
	],
};

