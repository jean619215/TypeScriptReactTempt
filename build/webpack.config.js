const webpack = require('webpack');

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: { modules: true }
					},
					'sass-loader'
				]
			}
		]
	},
	plugins: [
		// 清理上次 build 的檔案
		new CleanWebpackPlugin(),

		// 讀取 輸出的index的模板
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../template/index.html')
		}),

		// 需要告诉webpack忽略 scss.d.ts。
		new webpack.WatchIgnorePlugin([/css\.d\.ts$/, /scss\.d\.ts$/])

	],
	devServer: {
		open: true
	}
}