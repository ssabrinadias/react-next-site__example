const path = require("path");
const aliases = require("./configs/aliases");

module.exports = {
	env: {
		development: {
			presets: ["next/babel"]
		},
		production: {
			presets: ["next/babel"]
		},
		test: {
			presets: [
				[
					"next/babel",
					{
						"preset-env": {
							modules: "commonjs"
						}
					}
				]
			],
			plugins: [
				[
					"module-resolver",
					{
						alias: aliases
					}
				]
			]
		}
	}
};
