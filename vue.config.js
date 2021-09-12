const MODE_ARRAY = ['production', 'staging'];

module.exports = {
	outputDir: 'dist',
	assetsDir: 'assets',
	productionSourceMap: false,

	devServer: {
		open: true,
	},
	css: {
		extract: MODE_ARRAY.includes(process.env.NODE_ENV),
	},
};
