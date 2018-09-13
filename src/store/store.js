// 引入vue
import Vue from 'vue';
// 引入vuex
import Vuex, { Store } from 'vuex';

// 安装这个模块
Vue.use(Vuex);

// 创建store
let store = new Store({
	// 状态数据
	state: {
		search: ''
	},
	// 修改方法
	mutations: {
		changeSearchValue(state, value) {
			state.search = value;
		}
	}
})

// 暴露接口
export default store;