const webpack = require('webpack');
const path = require('path');
const withPlugins = require('next-compose-plugins');
const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const commonsChunkConfig = require('@zeit/next-css/commons-chunk-config');

const configDefault = {
	distDir: 'build',
	poweredByHeader: false
};

const nextConfig = {
	...configDefault,
	webpack: (config, { dev, isServer }) => {

		config.module.rules.push(
			{
				test: /\.(jpe?g|gif|ico)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',
							outputPath: './static'
						}
					}
				]
			},

			{
				test: /\.(png)$/,
				use: [
					{
						loader: 'file-loader?limit=10000&mimetype=text/html',
						options: {
							name:  '[path][name].[ext]',
							outputPath: './static'
						}
					}
				]
			},
			{
				test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader:
							'url-loader?limit=10000&mimetype=application/font-woff',
						options: {
							name: '[path][name].[ext]',
							outputPath: './fonts'
						}
					}
				]
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader:
							'url-loader?limit=10000&mimetype=application/octet-stream'
					}
				]
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				use: [{ loader: 'file-loader' }]
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{ loader: 'url-loader?limit=10000&mimetype=image/svg+xml' }
				]
			}
		);

		config.resolve.alias = {
			STATIC: path.resolve(__dirname, 'static')
		};

		if (isServer) {
			return config;
		}

		return commonsChunkConfig(config, /\.(sass|scss)$/);
	}
};

module.exports = withPlugins(
	[
		[
			withSass,
			{
				cssModules: true,
				cssLoaderOptions: {
					importLoaders: 1,
					localIdentName: '[path][name]__[local]',
					includePaths : 'node_modules'
				}
			}
		],
		[
			withCss,
			{
				cssModules: true,
				cssLoaderOptions: {
					importLoaders: 1,
					localIdentName: '[path][name]__[local]'
				}
			}
		]
	],
	nextConfig
);
