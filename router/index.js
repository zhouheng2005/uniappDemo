import {
	stringifyQuery
} from '@/common/util.js';
// 全局路由表
const routes = [{
	path: "/pages/login/index",
	name: "login_index"
},{
	path: "/pages/index/index",
	name: "index"
},{
	path: "/pages/news/index",
	name: "news_index"
},{
	path: "/pages/my/index",
	name: "my_index"
}];

const findRoutes = function(name) {
	let _route = routes.find(item => item.name == name),
		_path = "";
	if (_route) {
		_path = _route.path;
	} else {
		console.error(`${name}对应的路由不存在`);
	}
	return _path;
}
const getPath = function(name, param = null) {
	let _path = "";
	if (name == undefined || name == "") {
		console.error(`name 必传参数!`);
		return false;
	}
	if (name.indexOf('/') > -1) {
		_path = stringifyQuery(name, param);
	} else {
		_path = stringifyQuery(findRoutes(name), param);
	}
	return _path;
}
const navigateTo = function(name, param = null) {
	let _path = getPath(name, param);
	if (_path) {
		uni.navigateTo({
			url: _path,
			fail: function(err) {
				console.error(err)
			}
		})
	}
}
const redirectTo = function(name, param = null) {
	let _path = getPath(name, param);
	if (_path) {
		uni.redirectTo({
			url: _path,
			fail: function(err) {
				console.error(err)
			}
		})
	}
}
const reLaunch = function(name, param = null) {
	let _path = getPath(name, param);
	if (_path) {
		uni.reLaunch({
			url: _path,
			fail: function(err) {
				console.error(err)
			}
		})
	}
}
const switchTab = function(name, param = null) {
	let _path = getPath(name, param);
	if (_path) {
		uni.switchTab({
			url: _path,
			fail: function(err) {
				console.error(err)
			}
		})
	}
}
const navigateBack = function(delta = 1) {
	uni.navigateBack({
		delta
	});
}
export {
	getPath,
	findRoutes,
	navigateTo,
	redirectTo,
	reLaunch,
	switchTab,
	navigateBack
}
