const webpack = require('webpack');

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
					//MiniCssExtractPlugin.loader,
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

		//處理CSS的包裝
		// new MiniCssExtractPlugin({
		// 	filename: 'css/[name].[hash].css'
		// }),

		// typings-for-css-modules-loader会生成.d.ts文件，需要告诉webpack忽略它们。
		new webpack.WatchIgnorePlugin([/css\.d\.ts$/, /scss\.d\.ts$/])

	]
}