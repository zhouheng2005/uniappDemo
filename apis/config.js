const CONFIG = {
	//开发环境配置
	development: {
		assetsPath: "https://static.yfkjqh.com/static/company", // 静态资源路径
		assetsStaticPath: "https://static.yfkjqh.com/", // 静态资源路径
		sharePath: "https://static.yfkjqh.com/static/share_mini_image", // 静态分享图片资源
		staticUrl: "https://static.yfkjqh.com/static/", //json文件
		baseUrl: "https://api.dev.yfkjqhw.com/api/",
		appsUrl: 'https://api.yfkjqhw.com/api/apps/',
		domain: "https://m.dev.yfkjqhw.com",
		Applets: "https://m.dev.yfkjqhw.com/#/",
		wwsUrl:"api.dev.yfkjqhw.com/wss",
		// #ifdef H5  
		baseUrl: "/api/",
		staticUrl: "/static/",
		// #endif
	},
	//生产正式环境配置
	production: {
		assetsPath: "https://static.yfkjqh.com/static/company", // 静态资源路径
		assetsStaticPath: "https://static.yfkjqh.com/", // 静态资源路径
		sharePath: "https://static.yfkjqh.com/static/share_mini_image", // 静态分享图片资源
		staticUrl: "https://static.yfkjqh.com/static/",
		// wwsUrl:"api.yfkjqhw.com/wss",
		// baseUrl: "https://api.yfkjqhw.com/api/",
		// appsUrl: 'https://api.yfkjqhw.com/api/apps/',
		// domain: "https://m.yfkjqhw.com",
		// Applets: "https://m.yfkjqhw.com/#/",
		wwsUrl:"api.dev.yfkjqhw.com/wss",
		baseUrl: "https://api.dev.yfkjqhw.com/api/",
		appsUrl: 'https://api.dev.yfkjqhw.com/api/apps/',
		domain: "https://m.dev.yfkjqhw.com",
		Applets: "https://m.dev.yfkjqhw.com/#/",
	}
}
export default CONFIG[process.env.NODE_ENV];
