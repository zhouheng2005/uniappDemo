<template>
	<view class="content">
		<!-- 闪屏页面 -->
	</view>
</template>

<script>
	import {
		mapState,
	} from 'vuex';
	export default {
		computed: {
			...mapState(['token']),

		},
		data() {
			return {

			}
		},
		onLoad() {
			if (this.token) {
				this.$Router.switchTab('index');
			} else {
				this.$Router.reLaunch('login_index');
			}
		},
	}
</script>

<style>
	/* .content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	} */
</style>
