// 引入vue，
import Vue from "vue";
import {} from "./app.scss";
// 引入axios
import axios from "axios";
// 引入路由
import router from './router/router.js';
// 引入store 
import store from './store/store.js';

// 安装axios
Vue.prototype.$http = axios;

// 创建vue实例化对象
new Vue({
	// 安装路由
	router,
	// 安装store
	store,
	// 视图
	el: '#app',
	// 数据
	data: {
		msg: ''
	},
	// 路由渲染位置
	template: '#tpl',
	// 定义方法
	methods: {
		showSearchResult() {
			// 提交搜索词
			this.$store.commit('changeSearchValue', this.msg);
			// 清空搜索内容
			this.msg = ''
		},
		// 返回上一个页面
		goBack() {
			// 可以通过浏览器的历史记录管理
			history.go(-1);
		}
	}
})