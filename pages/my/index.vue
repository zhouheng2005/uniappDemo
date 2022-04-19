<template>
	<view class="content">
		我的
		<button class="btn" type="default" @click="fnOut">退出</button>
	</view>
</template>

<script>
	import {
		mapActions,
	} from 'vuex';
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			...mapActions(['logoutLogin']),
			fnOut() {
				const that = this;
				uni.showModal({
					title: '提示',
					content: '是否退出登录',
					success: function(res) {
						if (res.confirm) {
							that.loginout();
						}
					}
				});
			},
			async loginout() {
				const that = this;
				try {
					that.$fun.showLoading('退出中...');
					await that.logoutLogin();
					that.$fun.msg('退出成功');
					setTimeout(() => {
						that.$Router.reLaunch('login_index');
					}, 500);
				} catch (e) {
					console.log(e);
				} finally {
					that.$fun.hideLoading();
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		padding: 36rpx;

		.btn {
			margin-top: 80rpx;
		}
	}
</style>
