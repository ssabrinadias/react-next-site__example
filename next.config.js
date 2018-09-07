const webpack = require('webpack');
const path = require('path');
const withPlugins = require('next-compose-plugins');
const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const commonsChunkConfig = require('@zeit/next-css/commons-chunk-config');

const configDefault = {
	distDir: 'dist',
	poweredByHeader: false
};

const nextConfig = {
	...configDefault,
	webpack: (config, { dev, isServer }) => {

		config.module.rules.push(
			{
				test: /\.(eot|woff2?|ttf|otf)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/'
						}
					}
				]
			},
			{
				test: /\.(svg|jpe?g|png|svg|gif|ico)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: dev ? '[path][name].[ext]' : '',
							publicPath: `/_next/static/`,
							outputPath: './static'
						}
					}
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
