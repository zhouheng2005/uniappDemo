const plugins = []
if (process.env.NODE_ENV === 'production') {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  plugins.push(new BundleAnalyzerPlugin({ analyzerPort: 8920 }))
}
module.exports = {
	// 配置路径别名
	configureWebpack: {
		devServer: {
			disableHostCheck: true
		},
		optimization: {
			minimize: true,
		},
		plugins
	}
}
