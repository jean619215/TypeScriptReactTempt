const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	mode: 'development', // 開發模式
	entry: path.resolve(__dirname, '../src/main.tsx'),    // 入口文件
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},
	output: {
		filename: '[name].[hash:8].js',      // 打包後的文件名稱
		path: path.resolve(__dirname, '../dist')  // 打包後的目錄
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader'
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),// 清理重複的

		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../public/index.html') // 讀取 輸出的index的模板
		})

	]
}