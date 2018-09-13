module.exports = {
	// 定义webpack的配置
	configureWebpack: {
		// 更改vue入口文件
		resolve: {
			alias: {
				'vue$': 'vue/dist/vue.js'
			}
		}
	}
}