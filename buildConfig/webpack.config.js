const path = require('path');

module.exports = {
	mode: 'development', // 開發模式
	entry: path.resolve(__dirname, '../src/main.js'),    // 入口文件
	output: {
		filename: 'output.js',      // 打包後的文件名稱
		path: path.resolve(__dirname, '../dist')  // 打包後的目錄
	}
}