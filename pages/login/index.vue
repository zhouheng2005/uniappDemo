<template>
	<view class="content">
		登录页面

		<button class="btn" type="default" @click="submitPromise">登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			async submitPromise() {
				const that = this;
				try {
					that.$fun.showLoading('登录中...');
					const res = await that.$store.dispatch('login', 'token123456');
					setTimeout(() => {
						that.$fun.hideLoading();
						setTimeout(() => {
							that.$fun.msg('登录成功');
							that.$Router.switchTab('index');
						}, 300);
					}, 500);
				} catch (e) {
					that.$fun.hideLoading();
					console.log(e);
				}
			},
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
