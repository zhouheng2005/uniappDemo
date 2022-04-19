const CONFIG = {
	//开发环境配置
	development: {
		assetsPath: "https://static.yfkjqh.com/", // 静态资源路径
		// #ifdef H5  
		baseUrl: "/api/", //h5跨域访问设置
		// #endif
	},
	//生产正式环境配置
	production: {
		assetsPath: "https://static.yfkjqh.com/static", // 静态资源路径
		baseUrl: "https://api.yfkjqhw.com/api/",
	}
}
export default CONFIG[process.env.NODE_ENV];
