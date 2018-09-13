// 引入vue和rouer
import Vue from "vue";
import Router from "vue-router";
// 引入组件
import Home from "../components/home.vue";
import List from "../components/list.vue";
import Detail from "../components/detail.vue";
// 安装路由
Vue.use(Router);
// 定义规则
let routes = [
	// 列表页
	{
		path: '/list/:type/:typeid',
		component: List
	},
	// 详情页
	{
		path: '/detail/:detailid',
		component: Detail
	},
	// 默认首页
	{
		path: '*',
		component: Home
	}
]
// 创建实例化对象
export default new Router({ routes })
