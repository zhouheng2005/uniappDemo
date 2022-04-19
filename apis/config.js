const CONFIG = {
	//开发环境配置
	development: {
		assetsPath: "https://xxxxx.com/", // 静态资源路径
		// #ifdef H5  
		baseUrl: "/api/", //h5跨域访问设置
		// #endif
	},
	//生产正式环境配置
	production: {
		assetsPath: "https://xxx", // 静态资源路径
		baseUrl: "https://xxxx/api/",
	}
}
export default CONFIG[process.env.NODE_ENV];
