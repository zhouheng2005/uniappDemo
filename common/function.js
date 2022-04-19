import pick from 'lodash.pick';
const formPick = (data, arr) => {
	return pick(data, arr);
}
const msg = (title, duration = 1500, mask = false, icon = 'none') => {
	//统一提示方便全局修改
	if (Boolean(title) === false) {
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}
const msgDelay = (title, duration = 2000, callback) => {
	uni.showToast({
		title,
		duration,
		mask: true,
		icon: 'success',
		success: function() {
			setTimeout(() => {
				callback && callback();
			}, duration / 2)
		}
	});
}
const showLoading = (title) => {
	uni.showLoading({
		title: title || '加载中',
		mask: true
	});
}
const hideLoading = () => {
	uni.hideLoading();
}
const showModal = (payload) => {
	return new Promise((resolve, reject) => {
		uni.showModal({
			title: payload.title,
			content: payload.content ? payload.content : '',
			success: function(res) {
				if (res.confirm) {
					resolve();
				} else if (res.cancel) {
					reject();
				}
			}
		});
	});
}
const previewImage = (imgs, index) => {
	uni.previewImage({
		current: index,
		urls: imgs,
		longPressActions: {
			itemList: ['保存图片到本地'],
			success: function(data) {
				// console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
			},
			fail: function(err) {
				console.log(err.errMsg);
			}
		}
	});
}

// 获取运行在什么客户端
const client = () => {
	// 1小程序 2android 3ios 4web
	let type;
	//#ifdef MP-WEIXIN
	type = 1;
	//#endif
	//#ifdef APP-PLUS
	switch (uni.getSystemInfoSync().platform) {
		case 'android':
			type = 2;
			break;
		case 'ios':
			type = 3;
			break;
		default:
			console.log('运行在开发者工具上')
			break;
	}
	//#endif
	//#ifdef H5
	type = 4;
	//#endif
	return type + '';
}

const setClipboardData = (txt, title) => {
	uni.setClipboardData({
		data: txt,
		success: function() {
			msg(title ? title : '复制成功');
		}
	});
}

export default {
	formPick,
	msg,
	msgDelay,
	showLoading,
	hideLoading,
	showModal,
	previewImage,
	client,
	setClipboardData,
}
