import Vue from 'vue'
import App from './App'
import store from './store/index.js' //数据
import * as $Router from '@/router/index.js' //路由封装
import $apiConfig from '@/apis/config.js' //访问网址封装
import apis from '@/apis/index.js' //访问具体接口名称封装
import $fun from '@/common/function.js'
Vue.config.productionTip = false
Vue.prototype.$Router = $Router;
Vue.prototype.$store = store;
Vue.prototype.$config = $apiConfig;
Vue.prototype.$apis = {
	...apis
};
Vue.prototype.$fun = $fun;
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
