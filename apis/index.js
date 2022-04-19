import {
	http
} from '@/plugin/luch-request/index.js'
import {
	comboParameter
} from '@/common/util.js'
import config from "@/apis/config.js";
const common = {
	// 获取小程序二维码
	getWechatCode: (params) => http.get('manage/company_order/getminicode', {
		params
	}),
	// 初始化数据
	initData: () => http.get('merchant/app/init'),
	// 获取行业树形数据
	getCategoryTree: () => http.get('company_category/treelist'),
	// 获取验证码
	sendAuthSms: (data) => http.post('company/auth/sendauthsms', data),
	// 商户管理员注册
	regeditAdmin: (data) => http.post('company_user/regedit', data),
	// 商户管理员登录
	loginAdmin: (data) => http.post('company/auth/login', data),
	// 重置密码
	resetPwd: (data) => http.post('merchant/auth/resetpwd', data),
	// 验证手机号
	authPhone: (data) => http.post('auth/compareauthsms', data),
	// 上传文件
	uploadFile: (data) => http.upload('company/upload/upfiles', data),
	// 获取资源分类 参数 type 默认image，枚举(image,video,audio)
	getResourceCategoryList: (params) => http.get('company/resource_category/list', {
		params
	}),
	// 资源分类批量排序
	categoryListSort: (data) => http.post('company/resource_category/updatesort', data),
	// 资源分类删除
	categoryDel: (data) => http.post('company/resource_category/del', data),
	// 添加资源分类
	categoryAdd: (data) => http.post('company/resource_category/create', data),
	// 修改资源分类
	categoryEdit: (data) => http.post('company/resource_category/edit', data),
	// 上传资源图片视频
	uploadcategoryFile: (data) => http.post('company/resource_image/create', data),
	// 获取oss上传签名
	osssingImg: (params) => http.get('company/resource_image/osssing', {
		params
	}),
	// 获取oss上传签名
	osssingVideo: (params) => http.get('company/resource_video/osssing', {
		params
	}),
	// 商品图片资源
	getPicsPages: (params) => http.get('company/company_goods/getpics', {
		params
	}),
	// 获取资源图片列表
	getResourceImagePages: (params) => http.get('company/resource_image/pages', {
		params
	}),
	// 获取资源视频列表
	getResourceVideoPages: (params) => http.get('company/resource_video/pages', {
		params
	}),
	// 删除图片
	delResourceImage: (data) => http.post('company/resource_image/del', data),
	// 删除视频
	delResourceVideo: (data) => http.post('company/resource_video/del', data),
	// 修改图片名称或分类
	editResourceImage: (data) => http.post('company/resource_image/edit', data),
	// 修改视频名称或分类
	editResourceVideo: (data) => http.post('company/resource_video/edit', data),
	// 获取店铺评价列表
	evaluatePages: (params) => http.get('company/company_goods_evaluate/pages', {
		params
	}),
	// 回复店铺评价
	replyEvaluate: (data) => http.post('company/company_goods_evaluate/addreply', data),
	// 获取餐饮店铺评价列表
	evaluateCateringPages: (params) => http.get('company/company_catering_shop_evaluate/pages', {
		params
	}),
	// 餐饮回复店铺评价
	replyCateringEvaluate: (data) => http.post('company/company_catering_shop_evaluate/addreply', data),
	// 获取省市区
	amapRegeo: (params) => http.get('company/amap/regeo', {
		params
	}),
	// ios版本更新
	versionIos: (data) => http.post('apps/version/ios', data),
	// 安卓版本更新
	versionAndroid: (data) => http.post('apps/version/android', data),
	// 微信code换openid
	wxCodeOpenid: (data) => http.post('company/wx_service/code2openid', data),
	// 获取小程序订阅模板
	getsubscribetemplatelist: (data) => http.post('company/wx_service/getsubscribetemplate', data),
	// 打印订单上报
	reportPrintlogService: (data) => http.post('company/company_order/pushnoticelog', data),
	// 数据中心首页
	dataCenterIndex: (data) => http.post('company/index/statindex', data),
	// 数据中心数据列表
	dataCenterGoods: (data) => http.post('company/index/statgoods', data),
	// 检查手机号是否注册
	userCheckphone: (data) => http.post('company/company_user/checkphone', data),
	// 经营手册分类列表
	helpCategory: (data) => http.post('company/company_help/category', data),
	// 经营手册分类列表
	helpPages: (data) => http.post('company/company_help/pages', data),
	// 经营手册分类列表
	helpGet: (data) => http.post('company/company_help/get', data),
	
}

const company = {
	// 获取商户注册信息
	get: () => http.post('company_info/get'),
	// 企业信息编辑
	edit: (data) => http.post('company_info/edit', data),
	// 企业信息创建
	create: (data) => http.post('company_info/create', data),
	// 营业执照识别
	licensesImageVerify: (data) => http.post('company_info/verifybusinesslicensesimage', data),
	// 身份证识别
	identityImageVerify: (data) => http.post('company_info/verifypersonpaperimage', data),
	// 反馈
	feedBack: (data) => http.post('company/company_feedback/create', data),
	// 消息
	noticePage: (data) => http.post('company/company_notice/page', data),
}

const store = {
	// 工作台订单数据统计
	todayOrderStat: () => http.post('company/index/todayorderstat'),
	// 工作台数据
	workBench: (data) => http.post('company/index/index', data),
	// 获取店铺信息
	get: (params) => http.get('company/company_shop_info/get', {
		params
	}),
	// 店铺信息添加
	create: (data) => http.post('company/company_shop_info/create', data),
	// 店铺信息更新修改
	shopInfoEdit: (data) => http.post('company/company_shop_info/edit', data),
	// 店铺设置信息
	shopConfList: (data) => http.post('company/company_shop_conf/list', data),
	// 修改店铺设置信息
	shopConfEdit: (data) => http.post('company/company_shop_conf/edit', data),
	// 店铺标签列表
	shopTag: (params) => http.get('company/company_shop_tag/list', {
		params
	}),
}

const coupon = {
	// 创建/修改商品
	create: (data) => http.post('merchant/shop_coupon/create', data),
	// 编辑商品主要信息
	edit: (data) => http.post('merchant/shop_coupon/edit', data),
	// 获取单个商品信息
	get: (params) => http.get('merchant/shop_coupon/get', {
		params
	}),
	// 获取商品列表
	getPages: (params) => http.get('merchant/shop_coupon/pages', {
		params
	})
}

const goods = {
	// 创建/修改商品
	saveGoods: (data) => http.post('company/company_goods/create', data),
	// 编辑商品主要信息
	editGoods: (data) => http.post('company/company_goods/edit', data),
	// 删除商品
	delGoods: (data) => http.post('company/company_goods/del', data),
	// 批量删除商品
	batchDelGoods: (data) => http.post('company/company_goods/batchdel', data),
	// 获取单个商品信息
	getGoods: (params) => http.get('company/company_goods/get', {
		params
	}),
	// 获取商品列表
	getGoodsList: (params) => http.get('company/company_goods/pages', {
		params
	}),
	// 分组商品排序
	updateGoodsSort: (data) => http.post('company/company_goods/updatesort', data),
	// 获取分组列表
	getGroupList: (params) => http.get('company/company_goods_group/list', {
		params
	}),
	// 创建分组
	createGroup: (data) => http.post('company/company_goods_group/create', data),
	// 编辑分组
	editGroup: (data) => http.post('company/company_goods_group/edit', data),
	// 删除分组
	delGroup: (data) => http.post('company/company_goods_group/del', data),
	// 更新分组排序
	updateGroupSort: (data) => http.post('company/company_goods_group/updatesort', data),
	//批量编辑商品
	updateGoodsStatus: (data) => http.post('company/company_goods/batchedit', data),
	// 创建商品规格
	createGoodsSpec: (data) => http.post('company/company_goods_spec/create', data),
	// 删除商品规格
	delGoodsSpec: (data) => http.post('company/company_goods_spec/del', data),
	// 获取商品规格列表
	getGoodsSpecList: (params) => http.get('company/company_goods_spec/list', {
		params
	}),
	// 批量创建商品规格值
	createGoodsSpecValue: (data) => http.post('company/company_goods_spec_item/create', data),
	// 获取商品规格值列表
	getGoodsSpecValueList: (params) => http.get('company/company_goods_spec_item/list', {
		params
	}),
	// 新的商品列表
	newGoodsPages: (data) => http.post('company/company_goods/newpages', data),
}

const goods_catering = {
	// 创建/修改商品
	saveGoods: (data) => http.post('company/company_catering_goods/create', data),
	// 编辑商品主要信息
	editGoods: (data) => http.post('company/company_catering_goods/edit', data),
	// 删除商品
	delGoods: (data) => http.post('company/company_catering_goods/del', data),
	// 批量删除商品
	batchDelGoods: (data) => http.post('company/company_catering_goods/batchdel', data),
	// 获取单个商品信息
	getGoods: (params) => http.get('company/company_catering_goods/get', {
		params
	}),
	// 获取商品列表
	getGoodsList: (params) => http.get('company/company_catering_goods/pages', {
		params
	}),
	// 分组商品排序
	updateGoodsSort: (data) => http.post('company/company_catering_goods/updatesort', data),
	//批量编辑餐饮商品
	updateGoodsStatus: (data) => http.post('company/company_catering_goods/batchedit', data),
	// 获取分组列表
	getGroupList: (params) => http.get('company/company_catering_goods_group/list', {
		params
	}),
	// 创建分组
	createGroup: (data) => http.post('company/company_catering_goods_group/create', data),
	// 编辑分组
	editGroup: (data) => http.post('company/company_catering_goods_group/edit', data),
	// 删除分组
	delGroup: (data) => http.post('company/company_catering_goods_group/del', data),
	// 更新分组排序
	updateGroupSort: (data) => http.post('company/company_catering_goods_group/updatesort', data),
	// 创建商品规格
	createGoodsSpec: (data) => http.post('company/company_catering_goods_spec/create', data),
	// 获取商品规格列表
	getGoodsSpecList: (params) => http.get('company/company_catering_goods_spec/list', {
		params
	}),
	// 批量创建商品规格值
	createGoodsSpecValue: (data) => http.post('company/company_catering_goods_spec_item/create', data),
	// 获取商品规格值列表
	getGoodsSpecValueList: (params) => http.get('company/company_catering_goods_spec_item/list', {
		params
	}),
	// 修改每日库存
	goodsBatcheditstock: (data) => http.post('company/company_catering_goods/batcheditstock', data),
}

const order = {
	// 获取订单列表
	orderPages: (params) => http.get('merchant/company_order/pages', {
		params
	}),
	// 商城订单标识
	orderTotaltag: (params) => http.get('merchant/company_order/ordertotaltag', {
		params
	}),
	// 餐饮订单标识
	orderCateringTotaltag: (data) => http.post('company/company_catering_order/ordertotaltag', data),
	// 获取订单信息
	getOrder: (params) => http.get('company/company_order/get', {
		params
	}),
	// 催付
	noticeUserpay: (data) => http.post('merchant/company_activity/noticeuserpay', data),
	// 保存订单备注
	saveOrderRemarks: (data) => http.post('merchant/company_order/editremarks', data),
	// 订单发货
	orderDeliver: (data) => http.post('merchant/company_order/delivergoods', data),
	// 快递公司列表
	expressList: () => http.get('company/company_express/list'),
	// 付款记录
	orderCollectionlog: (data) => http.post('company/company_order/collectionlog',data),
}

const catering = {
	// 获取餐饮订单列表
	cateringPages: (data) => http.post('company/company_catering_order/pages', data),
	// 获取餐饮订单详情
	cateringGet: (data) => http.post('company/company_catering_order/get', data),
	// 拒绝接单
	cateringAcceptingorders: (data) => http.post('company/company_catering_order/acceptingorders', data),
	// 餐饮订单物品退款状态
	cateringOrderStatus: (data) => http.post('company/company_order_goods_refund/getordergoodsinfo', data),
	// 发起/修改餐饮退款申请
	cateringOrderRefund: (data) => http.post('company/company_order_goods_refund/create', data),
	// 餐饮商品评价列表
	cateringOrderEvaluate: (data) => http.post('company/company_catering_shop_evaluate/pages', data),
	// 推荐商品列表
	cateringRecommendGoodsPage: (data) => http.post('company/company_catering_shop_recommend/pages', data),
	// 添加推荐商品
	addCateringRecommendGoods: (data) => http.post('company/company_catering_shop_recommend/create', data),
	// 批量删除餐饮店铺内推荐商品
	allDelCateringRecommendGoods: (data) => http.post('company/company_catering_shop_recommend/batchdel', data),
	// 删除餐饮店铺内推荐商品
	delCateringRecommendGoods: (data) => http.post('company/company_catering_shop_recommend/del', data),
	// 更新餐饮店铺内推荐商品排序
	sortCateringRecommendGoods: (data) => http.post('company/company_catering_shop_recommend/updatesort', data),
	// 修改餐饮店铺内推荐商品
	eidCateringRecommendGoods: (data) => http.post('company/company_catering_shop_recommend/edit', data),
	// 上门组合套餐使用
	useCombinationPackage: (data) => http.post('company/company_order/usecombinationpackage', data),
}

const reality = {
	// 拒绝接单
	realityRejectorder: (data) => http.post('company/company_order/rejectorder', data),
}

const order_refund = {
	// 获取订单退款列表
	orderRefundPages: (data) => http.post('company/company_order_goods_refund/pages', data),
	// 获取订单退款详情 company_order_refund
	getOrderRefund: (data) => http.post('company/company_order_goods_refund/get', data),
	// 退款退货处理
	editOrderRefund: (data) => http.post('company/company_order_goods_refund/edit', data),
	// 订单快递信息查询
	queryExpress: (data) => http.post('company/company_order/queryexpress', data),
	// 线下，核销订单
	orderVerificationCode: (data) => http.post('company/company_order/useorderexchangecode', data),
	//线下 ，核销列表
	company_order_exchange_code: (data) => http.post('company/company_order_exchange_code/getuselist', data),
}

const setting = {
	// 地址列表
	getReturnAddressPages: (params) => http.get('company/company_address/pages', {
		params
	}),
	// 账户资金安全验证
	accountVerify: (data) => http.post('company/company_setting_security/verify', data),
	// 账户资金钱包
	accountWalletInfo: (params) => http.get('company/company_auto_cashout/getwalletinfo', {
		params
	}),
	// 绑定/修改 微信收款/支付宝收款信息
	accountWalletEditSecurityetting: (data) => http.post('company/company_setting_security/editsecuritysetting',
		data),
	// 账户资金充值
	accountWalletRechargeBalance: (data) => http.post('company/company_balance_order/rechargebalance', data),
	// 提现申请
	accountAutoCashOutCreate: (data) => http.post('company/company_auto_cashout/create', data),
	// 账户资金提现明细
	accountAutoCashOutPage: (data) => http.post('company/company_auto_cashout/pages', data),
	// 账户资金明细
	accounttradelogCapitalPage: (data) => http.post('company/company_trade_log/pages', data),
	// 账户交易明细
	accountOrderWaitingPage: (data) => http.post('company/company_order_waiting/pages', data),
	// 商家地址添加
	CreateReturnAddress: (params) => http.get('company/company_address/create', {
		params
	}),
	// 商家地址修改
	EditReturnAddress: (params) => http.get('company/company_address/edit', {
		params
	}),
	// 商家地址删除
	DelReturnAddress: (params) => http.get('company/company_address/del', {
		params
	}),
	// 商家交易安全设置
	securityGet: (params) => http.get('company/company_setting_security/get', {
		params
	}),
	// 重置密码
	editSensitiveUserinfo: (params) => http.get('company/company_user/editsensitiveuserinfo', {
		params
	}),
	// 重置安全手机
	editSecurityMobile: (params) => http.get('company/company_setting_security/editsecuritymobile', {
		params
	}),
}

const live = {
	// 开始直播
	beginLive: (data) => http.post('merchant/company_live_data/beginlive', data),
	// 创建直播或发布预告
	createLive: (data) => http.post('merchant/company_live_data/create', data),
	// 修改直播信息
	editLive: (data) => http.post('merchant/company_live_data/edit', data),
	// 直播首页数据(店铺信息，直播预告)
	getLiveData: (params) => http.get('merchant/company_live_data/getindex', {
		params
	}),
	// 获取直播详情信息
	getLiveDetail: (params) => http.get('merchant/company_live_data/getinfo', {
		params
	}),
	// 获取直播历史列表
	liveHistory: (params) => http.get('merchant/company_live_data/pages', {
		params
	}),
	// 删除直播预告
	delLiveAdvance: (data) => http.post('merchant/company_live_data/del', data),
	// 获取直播录制模版列表
	getLiveTemplate: (params) => http.get('merchant/company_live_data/recordtemplate', {
		params
	}),
	getLiveGoodsList: (params) => http.get('merchant/company_live_data/get', {
		params
	}),
	// 获取添加直播商品列表
	getAddGoodsList: (params) => http.get('merchant/company_goods/getlist', {
		params
	}),
	// 添加直播商品
	addGoods: (data) => http.post('merchant/company_live_data/addgoods', data),
	// 删除直播商品
	delGoods: (data) => http.post('merchant/company_live_data/delgoods', data),
	// 发放直播商品专享券
	sendGoodsCoupon: (data) => http.post('merchant/company_live_data/sendcoupon', data),
	// 获取添加直播商品专享券列表
	getAddGoodsCouponList: (data) => http.post('merchant/company_live_data/livegoodscouponlist', data),
	// 获取直播商品专享券列表
	getLiveCouponList: (params) => http.get('merchant/company_live_data/sendcouponlog', {
		params
	}),
	// 创建直播活动
	createLiveActivity: (data) => http.post('merchant/company_live_activity/create', data),
	// 编辑直播活动
	editLiveActivity: (data) => http.post('merchant/company_live_activity/edit', data),
	// 获取直播活动列表
	getLiveActivityPages: (params) => http.get('merchant/company_live_activity/pages', {
		params
	}),
	// 获取直播活动详情
	getLiveActivity: (params) => http.get('merchant/company_live_activity/get', {
		params
	}),
	// 开启直播活动
	sendLiveActivity: (data) => http.post('merchant/company_live_activity/sendactivity', data),
	// 删除直播活动
	delLiveActivity: (data) => http.post('merchant/company_live_activity/del', data),
	// 结束直播活动
	endLiveActivity: (data) => http.post('merchant/company_live_activity/end', data),
	// 直播活动参与记录
	getLiveActivityLogPages: (params) => http.get('merchant/company_live_activity/membertasklog', {
		params
	}),
	// 讲解商品/结束讲解商品
	explainGoods: (data) => http.post('merchant/company_live_data/editgoods', data),
	// 暂停/恢复直播
	controllive: (data) => http.post('merchant/company_live_data/controllive', data),
	// 结束直播
	closeLive: (data) => http.post('merchant/company_live_data/closelive', data),
	// 申请开通直播
	applyLive: (data) => http.post('merchant/company_live_apply/create', data),
	// 获取审核状态
	getApplyStatus: (params) => http.get('merchant/company_live_apply/get', {
		params
	}),
	// 更新点赞数
	getlikenum: (data) => http.post('merchant/company_live_data/getlikenum', data),
	//获取实时人数
	getgroupinfo: (data) => http.post('merchant/company_live_data/getgroupinfo', data),
	// 排序直播商品
	updateSort: (data) => http.post('merchant/company_live_data/updatesort', data),
}

const tool = {
	// 优惠劵列表
	shopCouponPages: (data) => http.post('company/shop_coupon/pages', data),
	// 优惠劵新增
	shopCouponAdd: (data) => http.post('company/shop_coupon/create', data),
	// 优惠劵删除
	shopCouponDel: (data) => http.post('company/shop_coupon/del', data),
	// 优惠劵修改
	shopCouponEdit: (data) => http.post('company/shop_coupon/edit', data),
	// 优惠劵详情
	shopCouponGet: (params) => http.get('company/shop_coupon/get', {
		params
	}),
	// 优惠劵领取记录
	shopCouponGetRecord: (params) => http.get('company/shop_coupon/getrecord', {
		params
	}),
	// 优惠劵使用记录列表
	shopCouponUseRecord: (params) => http.get('company/shop_coupon/userecord', {
		params
	}),
	// 优惠劵的指定商品列表
	shopCouponGetGoodsPages: (params) => http.get('company/shop_coupon/getgoodspages', {
		params
	}),
	// 餐饮区域列表
	cateringAreaList: (data) => http.post('company/company_catering_seat/arealist', data),
	// 餐饮区域座位列表
	cateringSeatList: (data) => http.post('company/company_catering_seat/seatlist', data),
	// 餐饮区域座位列表
	cateringSeatList: (data) => http.post('company/company_catering_seat/seatlist', data),
	// 餐饮座位详情
	cateringCheckSeat: (data) => http.post('company/company_catering_seat/checkseat', data),
	// 餐饮座位新增
	cateringSeatCreate: (data) => http.post('company/company_catering_seat/create', data),
	// 餐饮座位删除
	cateringSeatDel: (data) => http.post('company/company_catering_seat/del', data),
	// 餐饮座位修改
	cateringSeatEdit: (data) => http.post('company/company_catering_seat/edit', data),
	// 区域信息
	cateringSeatGet: (data) => http.post('company/company_catering_seat/get', data),
	// 赠购物金 活动列表
	activityPages: (data) => http.post('company/company_activity_amount/pages', data),
	// 赠购物金 活动详情
	activityGet: (data) => http.post('company/company_activity_amount/get', data),
	// 赠购物金 创建活动
	activityCreate: (data) => http.post('company/company_activity_amount/create', data),
	// 赠购物金 编辑活动
	activityEdit: (data) => http.post('company/company_activity_amount/edit', data),
	// 赠购物金 删除活动
	activityDataDel: (data) => http.post('company/company_activity_amount/del', data),
	// 赠购物金 商品列表
	activityGoodsList: (data) => http.post('company/company_activity_amount/goodsList', data),
	// 赠购物金 活动商品
	activityDataList: (data) => http.post('company/company_activity_amount/dataList', data),
	// 满赠列表
	giftPages: (data) => http.post('merchant/company_gift/pages', data),
	// 满赠详情
	giftGet: (data) => http.post('merchant/company_gift/get', data),
	// 满赠 新增
	giftCreate: (data) => http.post('merchant/company_gift/create', data),
	// 满赠修改
	giftEdit: (data) => http.post('merchant/company_gift/edit', data),
	// 删除满赠
	giftDel: (data) => http.post('merchant/company_gift/del', data),
	// 提前结束满赠
	giftEndactivity: (data) => http.post('merchant/company_gift/endactivity', data),
	// 赠品列表
	giftGoodsList: (data) => http.post('merchant/company_gift/giftlist', data),
	// 新增赠品
	giftGoodsAdd: (data) => http.post('merchant/company_gift/addgift', data),
	// 修改赠品
	giftGoodsEdit: (data) => http.post('merchant/company_gift/editgift', data),
	// 删除赠品
	giftGoodsDel: (data) => http.post('merchant/company_gift/delgift', data),
	// 满减列表
	minusPages: (data) => http.post('merchant/company_discount_activity/pages', data),
	// 满减详情
	minusGet: (data) => http.post('merchant/company_discount_activity/get', data),
	// 满减新增
	minusCreate: (data) => http.post('merchant/company_discount_activity/create', data),
	// 满减修改
	minusEdit: (data) => http.post('merchant/company_discount_activity/edit', data),
	// 删除满减
	minusDel: (data) => http.post('merchant/company_discount_activity/del', data),
	// 提前结束满减
	minusEndactivity: (data) => http.post('merchant/company_discount_activity/end', data),
	// 代金券列表
	vouchersPages: (data) => http.post('company/company_goods/voucherspages', data),
	// 代金券添加修改
	vouchersCreate: (data) => http.post('company/company_goods/createvouchers', data),
	// 代金券领取记录列表
	vouchersLog: (data) => http.post('company/company_goods/voucherslog', data),
	// 分销数据分析
	activitysSalestat: (data) => http.post('merchant/company_activity/salestat', data),
	// 活动 列表
	activitysPages: (data) => http.post('merchant/company_activity/pages', data),
	// 活动详情
	activitysGet: (data) => http.post('merchant/company_activity/get', data),
	// 新增活动
	activitysCreate: (data) => http.post('merchant/company_activity/create', data),
	// 修改活动
	activitysEdit: (data) => http.post('merchant/company_activity/edit', data),
	// 删除活动
	activitysDel: (data) => http.post('merchant/company_activity/del', data),
	// 活动看见记录
	activitysBargainLog: (data) => http.post('merchant/company_activity/bargainlog', data),
	// 活动砍价记录详情
	activitysBargainHelplog: (data) => http.post('merchant/company_activity/bargainhelplog', data),
	// 显示隐藏活动记录
	activitysToggleStatus: (data) => http.post('merchant/company_activity/togglestatus', data),
	// 砍价商品列表
	activitysGoodslist: (data) => http.post('merchant/company_activity/goodslist', data),
	// 活动数据
	activitysStat: (data) => http.post('merchant/company_activity/stat', data),
	// 活动配置商品列表
	activitysDataList: (data) => http.post('merchant/company_activity/datalist', data),
	// 修改活动配置商品
	activitysDataEdit: (data) => http.post('merchant/company_activity/dataedit', data),
	//删除活动配置商品
	activitysDataDel: (data) => http.post('merchant/company_activity/datadel', data),
	// 批量添加商品
	activitysGoodsBatchCreate: (data) => http.post('merchant/company_activity/goodsbatchcreate', data),
	// 成团列表
	activitysGrouplist: (data) => http.post('merchant/company_activity/grouplist', data),
	// 成团详情
	activitysGroupGet: (data) => http.post('merchant/company_activity/groupget', data),
	// 折扣商品列表
	discountPage: (data) => http.post('company/company_catering_activity/discountlist', data),
	// 选择商品
	discountSetGoodsList: (data) => http.post('company/company_catering_activity/goodslist', data),
	// 折扣商品详情
	discountGet: (data) => http.post('company/company_catering_activity/get', data),
	// 折扣商品添加
	discountAdd: (data) => http.post('company/company_catering_activity/add', data),
	// 折扣商品修改
	discountEdit: (data) => http.post('company/company_catering_activity/update', data),
	// 折扣商品删除
	discountDelete: (data) => http.post('company/company_catering_activity/delete', data),
	// 修改折扣库存
	discountEditStock: (data) => http.post('company/company_catering_activity/editstock', data),
	// 还价列表
	counterOfferPages: (data) => http.post('company/company_counter_offer/pages', data),
	// 还价详情
	counterOfferGet: (data) => http.post('company/company_counter_offer/get', data),
	//修改还价数据
	counterOfferEdit: (data) => http.post('company/company_counter_offer/edit', data),
	//首页广告列表
	bannerPages: (data) => http.post('company/company_shop_ad/pages', data),
	//删除广告
	bannerDel: (data) => http.post('company/company_shop_ad/del', data),
	//广告排序
	bannerUpdateSort: (data) => http.post('company/company_shop_ad/updatesort', data),
	//修改广告
	bannerEdit: (data) => http.post('company/company_shop_ad/edit', data),
	//广告添加
	bannerCreate: (data) => http.post('company/company_shop_ad/create', data),
	//连锁店铺
	shopChainPages: (data) => http.post('company/shop_chain/pages', data),
	// 退出连锁
	signOutChain: (data) => http.post('company/shop_chain/quitchain', data),
	// 分销订单列表
	orderSaleorder: (data) => http.post('company/company_order/saleorder', data),
}

const offline = {
	// 服务案例；列表
	serverCasePages: (data) => http.post('company/company_goods_service_case/pages', data),
	// 删除案例
	serverCaseDel: (data) => http.post('company/company_goods_service_case/del', data),
	// 修改案例
	serverCaseEdit: (data) => http.post('company/company_goods_service_case/edit', data),
	// 案例详情
	serverCaseGet: (data) => http.post('company/company_goods_service_case/get', data),
	//新增案例
	serverCaseCreate: (data) => http.post('company/company_goods_service_case/create', data),
	// 包厢管理-列表
	companyBusinessPages: (data) => http.post('company/company_business/pages', data),
	// 包厢管理-删除
	companyBusinessDel: (data) => http.post('company/company_business/del', data),
	// 包厢管理-详情
	companyBusinessGet: (data) => http.post('company/company_business/get', data),
	// 包厢管理-创建
	companyBusinessCreate: (data) => http.post('company/company_business/create', data),
	// 包厢管理-修改
	companyBusinessEdit: (data) => http.post('company/company_business/edit', data),
	// 房间管理-列表 
	onlinegoodslist: (data) => http.post('company/company_business/onlinegoodslist', data),
	// 房间[服务价格]-列表
	servicepages: (data) => http.post('company/company_business/servicepages', data),
	// 房间[服务价格]-详情
	serviceGet: (data) => http.post('company/company_business/serviceget', data),
	// 房间[服务价格]-删除
	servicepagesDel: (data) => http.post('company/company_goods/del', data),
	// 房间[服务价格]-启用禁用
	servicepagesStatus: (data) => http.post('company/company_business/createservice', data),
	// 锁定房间
	lockRoom: (data) => http.post('company/company_business/lockroom', data),
	// 预约列表
	companyMemberBookPage: (data) => http.post('company/company_member_book/pages', data),
	// 预约修改
	companyMemberBookEdit: (data) => http.post('company/company_member_book/edit', data),
	// 员工列表
	staffPages: (data) => http.post('company/company_shop_employee/pages', data),
	// 员工添加
	staffAddCreate: (data) => http.post('company/company_shop_employee/create', data),
	// 员工详情
	staffGet: (data) => http.post('company/company_shop_employee/get', data),
	// 员工修改
	staffEdit: (data) => http.post('company/company_shop_employee/edit', data),
	// 员工删除
	staffDel: (data) => http.post('company/company_shop_employee/del', data),
	// 作品列表
	worksPages: (data) => http.post('company/company_shop_employee_works/pages', data),
	// 作品详情
	worksGet: (data) => http.post('company/company_shop_employee_works/get', data),
	// 作品添加
	worksCreate: (data) => http.post('company/company_shop_employee_works/create', data),
	// 作品修改
	worksEdit: (data) => http.post('company/company_shop_employee_works/edit', data),
	// 作品删除
	worksDel: (data) => http.post('company/company_shop_employee_works/del', data),
	// 房间状态首页数量
	roomstatus: (params) => http.get('company/company_industry_plugins/roomstatus', {
		params
	}),
	// 房间插件统计
	pluginsRoomstat: (params) => http.get('company/company_industry_plugins/roomstat', {
		params
	}),
}
const apps = {
	getData: () => {
		return new Promise((resolve, reject) => {
			let _url = '/static/area-data.json';
			// #ifndef H5
			_url = 'https://static.yfkjqh.com/static/area-data.json';
			// #endif
			uni.request({
				url: _url,
				dataType: 'json',
				responseType: 'text',
				success: function(res) {
					if (res.statusCode == 200) {
						resolve(res.data)
					} else {
						reject(res.errMsg);
					}
				},
				fail: function(err) {
					reject(err);
				}
			});
		});
	},
	getWebjssdk: (params) => {
		return new Promise((resolve, reject) => {
			let url = `${config.appsUrl}app/getwebjssdk`;
			params = comboParameter(params);
			uni.request({
				url,
				method: 'POST',
				data: params,
				success: function(res) {
					if (res.statusCode == 200) {
						resolve(res.data)
					} else {
						reject(res.errMsg);
					}
				},
				fail: function(err) {
					reject(err);
				}
			});
		});
	},
	applyEnter: (params) => {
		return new Promise((resolve, reject) => {
			let url = `${config.appsUrl}app_index/addpurposemember`;
			params = comboParameter(params);
			uni.request({
				url,
				method: 'POST',
				data: params,
				success: function(res) {
					if (res.statusCode == 200) {
						resolve(res.data)
					} else {
						reject(res.errMsg);
					}
				},
				fail: function(err) {
					reject(err);
				}
			});
		});
	},
	ossUploadFile: (params, path) => {
		return new Promise((resolve, reject) => {
			let url = 'https://static.yfkjqh.com';
			let uploadTask = uni.uploadFile({
				url: url,
				filePath: path,
				name: 'file',
				formData: params,
				success: function(res) {
					if (res.statusCode == 200) {
						let data = JSON.parse(res.data);
						resolve(data);
					} else {
						reject(res.errMsg);
					}
				},
				fail: function(err) {
					reject(err);
				}
			});
			uploadTask.onProgressUpdate((res) => {
				let data = {
					status: true,
					percent: res.progress,
				};
				uni.$emit('uploadProgress', data);
			});
		});
	},
	city: () => {
		return new Promise((resolve, reject) => {
			let url = `https://static.yfkjqh.com/static/area-data.json`;
			uni.request({
				url,
				dataType: 'json',
				responseType: 'text',
				success: function(res) {
					if (res.statusCode == 200) {
						resolve(res.data);
					} else {
						reject(res.errMsg);
					}
				},
				fail: function(err) {
					reject(err);
				}
			});
		});
	},
}

const pay = {
	Payment: (param, type) => {
		uni.getProvider({
			service: 'payment',
			success: function(res) {
				return new Promise((resolve, reject) => {
					uni.requestPayment({
						"provider": type == 1 ? "wxpay" : "alipay",
						"orderInfo": param,
						success: function(res) {
							if (res.statusCode == 200) {
								resolve(res.data)
							} else {
								reject(res.errMsg);
							}
						},
						fail: function(err) {
							reject(err);
						}
					});
				});
			}
		});
	}
}

module.exports = {
	common,
	company,
	store,
	goods,
	goods_catering,
	coupon,
	order,
	catering,
	reality,
	order_refund,
	setting,
	live,
	tool,
	offline,
	apps,
	pay
}
