import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const TOKEN = uni.getStorageSync("token") || "";
const store = new Vuex.Store({
	state: {
		// 前端token
		token: TOKEN,
	},
	getters: {
		// 用户是否登录
		getHasLogin: state => {
			let _token = state.token;
			if (_token == undefined) {
				_token = uni.getStorageSync("token");
			}
			if (_token) {
				return true;
			} else {
				return false
			}
		},

	},
	mutations: {
		SET_TOKEN(state, token) {
			state.token = token;
			uni.setStorageSync("token", token);
		},

	},
	actions: {
		login({
			commit
		}, payload) {
			commit('SET_TOKEN', result.token);
		},
	}
})

export default store
