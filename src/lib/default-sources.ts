/**
 * 默认源配置
 * 用于 Netlify 等无数据库部署场景
 * 集成自 LunaTV-config (https://github.com/hafrey1/LunaTV-config)
 */

export const DEFAULT_CONFIG = {
  cache_time: 7200,
  api_site: {
    // 综合类资源 - 主要源
    "iqiyizyapi.com": {
      name: "🎬-爱奇艺-",
      api: "https://iqiyizyapi.com/api.php/provide/vod",
      detail: "https://iqiyizyapi.com"
    },
    "dbzy.tv": {
      name: "🎬豆瓣资源",
      api: "https://caiji.dbzy5.com/api.php/provide/vod",
      detail: "https://dbzy.tv"
    },
    "mtzy.me": {
      name: "🎬茅台资源",
      api: "https://caiji.maotaizy.cc/api.php/provide/vod",
      detail: "https://mtzy.me"
    },
    "wolongzyw.com": {
      name: "🎬卧龙资源",
      api: "https://wolongzyw.com/api.php/provide/vod",
      detail: "https://wolongzyw.com"
    },
    "ikunzy.com": {
      name: "🎬iKun资源",
      api: "https://ikunzyapi.com/api.php/provide/vod",
      detail: "https://ikunzy.com"
    },
    "dyttzyapi.com": {
      name: "🎬电影天堂",
      api: "http://caiji.dyttzyapi.com/api.php/provide/vod",
      detail: "http://caiji.dyttzyapi.com"
    },
    "www.maoyanzy.com": {
      name: "🎬猫眼资源",
      api: "https://api.maoyanapi.top/api.php/provide/vod",
      detail: "https://www.maoyanzy.com"
    },
    "cj.lzcaiji.com": {
      name: "🎬量子资源",
      api: "https://cj.lzcaiji.com/api.php/provide/vod",
      detail: "https://cj.lzcaiji.com"
    },
    "360zy.com": {
      name: "🎬360 资源",
      api: "https://360zyzz.com/api.php/provide/vod",
      detail: "https://360zy.com"
    },
    "jszyapi.com": {
      name: "🎬极速资源",
      api: "https://jszyapi.com/api.php/provide/vod",
      detail: "https://jszyapi.com"
    },
    // 优质综合源
    "www.moduzy.net": {
      name: "🎬魔都资源",
      api: "https://www.mdzyapi.com/api.php/provide/vod",
      detail: "https://www.moduzy.net"
    },
    "ffzyapi.com": {
      name: "🎬非凡资源",
      api: "https://api.ffzyapi.com/api.php/provide/vod",
      detail: "https://cj.ffzyapi.com"
    },
    "bfzy.tv": {
      name: "🎬暴风资源",
      api: "https://bfzyapi.com/api.php/provide/vod",
      detail: "https://bfzy.tv"
    },
    "zuida.xyz": {
      name: "🎬最大资源",
      api: "https://api.zuidapi.com/api.php/provide/vod",
      detail: "https://zuida.xyz"
    },
    "wujinzy.me": {
      name: "🎬无尽资源",
      api: "https://api.wujinapi.me/api.php/provide/vod",
      detail: "https://wujinzy.com"
    },
    "xinlangapi.com": {
      name: "🎬新浪资源",
      api: "https://api.xinlangapi.com/xinlangapi.php/provide/vod",
      detail: "https://xinlangapi.com"
    },
    "api.wwzy.tv": {
      name: "🎬旺旺资源",
      api: "https://api.wwzy.tv/api.php/provide/vod",
      detail: "https://api.wwzy.tv"
    },
    "www.subozy.com": {
      name: "🎬速播资源",
      api: "https://subocaiji.com/api.php/provide/vod",
      detail: "https://www.subozy.com"
    },
    "jinyingzy.com": {
      name: "🎬金鹰点播",
      api: "https://jinyingzy.com/api.php/provide/vod",
      detail: "https://jinyingzy.com"
    },
    "p2100.net": {
      name: "🎬飘零资源",
      api: "https://p2100.net/api.php/provide/vod",
      detail: "https://p2100.net"
    },
    // 高速源
    "api.ukuapi88.com": {
      name: "🎬U酷影视",
      api: "https://api.ukuapi88.com/api.php/provide/vod",
      detail: "https://www.ukuzy.com"
    },
    "api.guangsuapi.com": {
      name: "🎬光速资源",
      api: "https://api.guangsuapi.com/api.php/provide/vod",
      detail: "https://api.guangsuapi.com"
    },
    "www.hongniuzy.com": {
      name: "🎬红牛资源",
      api: "https://www.hongniuzy2.com/api.php/provide/vod",
      detail: "https://www.hongniuzy.com"
    },
    // 专题源
    "caiji.moduapi.cc": {
      name: "🎬魔都动漫",
      api: "https://caiji.moduapi.cc/api.php/provide/vod",
      detail: "https://caiji.moduapi.cc"
    },
    "www.ryzyw.com": {
      name: "🎬如意资源",
      api: "https://pz.v88.qzz.io/?url=https://cj.rycjapi.com/api.php/provide/vod",
      detail: "https://www.ryzyw.com"
    },
    "www.haohuazy.com": {
      name: "🎬豪华资源",
      api: "https://pz.v88.qzz.io/?url=https://hhzyapi.com/api.php/provide/vod",
      detail: "https://www.haohuazy.com"
    },
    "bdzy1.com": {
      name: "🎬百度云zy",
      api: "https://pz.v88.qzz.io/?url=https://api.apibdzy.com/api.php/provide/vod",
      detail: "https://bdzy1.com"
    },
    "lovedan.net": {
      name: "🎬艾旦影视",
      api: "https://pz.v88.qzz.io/?url=https://lovedan.net/api.php/provide/vod",
      detail: "https://lovedan.net"
    },
    // 备用源
    "lzizy.net": {
      name: "🎬量子影视",
      api: "https://cj.lziapi.com/api.php/provide/vod",
      detail: "https://lzizy.net"
    },
    "zuidazy.co": {
      name: "🎬最大点播",
      api: "https://zuidazy.me/api.php/provide/vod",
      detail: "https://zuidazy.co"
    },
    "wujinzy.com": {
      name: "🎬无尽影视",
      api: "https://api.wujinapi.com/api.php/provide/vod",
      detail: "https://wujinzy.com"
    },
    "wwzy.tv": {
      name: "🎬旺旺短剧",
      api: "https://wwzy.tv/api.php/provide/vod",
      detail: "https://wwzy.tv"
    },
    // 其他源
    "1080zyk4.com": {
      name: "🎬优质资源",
      api: "https://api.yzzy-api.com/inc/apijson.php",
      detail: "https://1080zyk4.com"
    },
    "www.huyaapi.com": {
      name: "🎬虎牙资源",
      api: "https://www.huyaapi.com/api.php/provide/vod",
      detail: "https://www.huyaapi.com"
    },
    "yayazy3.com": {
      name: "🎬鸭鸭资源",
      api: "https://cj.yayazy.net/api.php/provide/vod",
      detail: "https://yayazy3.com"
    },
    "suonizy.net": {
      name: "🎬索尼资源",
      api: "https://suoniapi.com/api.php/provide/vod",
      detail: "https://suonizy.net"
    },
    "kuaichezy.com": {
      name: "🎬快车资源",
      api: "https://caiji.kuaichezy.org/api.php/provide/vod",
      detail: "https://kuaichezy.com"
    },
    "shandianzy.com": {
      name: "🎬闪电资源",
      api: "https://xsd.sdzyapi.com/api.php/provide/vod",
      detail: "https://shandianzy.com"
    },
    "yhzy.cc": {
      name: "🎬樱花资源",
      api: "https://m3u8.apiyhzy.com/api.php/provide/vod",
      detail: "https://yhzy.cc"
    }
  },
  custom_category: [
    // 电影分类
    { name: "热门电影", type: "movie", query: "热门" },
    { name: "最新电影", type: "movie", query: "最新" },
    { name: "经典电影", type: "movie", query: "经典" },
    { name: "豆瓣高分", type: "movie", query: "豆瓣高分" },
    { name: "华语电影", type: "movie", query: "华语" },
    { name: "欧美电影", type: "movie", query: "欧美" },
    { name: "韩国电影", type: "movie", query: "韩国" },
    { name: "日本电影", type: "movie", query: "日本" },
    { name: "动作电影", type: "movie", query: "动作" },
    { name: "喜剧电影", type: "movie", query: "喜剧" },
    { name: "爱情电影", type: "movie", query: "爱情" },
    { name: "科幻电影", type: "movie", query: "科幻" },
    { name: "悬疑电影", type: "movie", query: "悬疑" },
    { name: "恐怖电影", type: "movie", query: "恐怖" },
    { name: "治愈电影", type: "movie", query: "治愈" },
    
    // 电视分类
    { name: "热门电视", type: "tv", query: "热门" },
    { name: "美剧", type: "tv", query: "美剧" },
    { name: "英剧", type: "tv", query: "英剧" },
    { name: "韩剧", type: "tv", query: "韩剧" },
    { name: "日剧", type: "tv", query: "日剧" },
    { name: "国产剧", type: "tv", query: "国产剧" },
    { name: "港剧", type: "tv", query: "港剧" },
    { name: "日本动画", type: "tv", query: "日本动画" },
    { name: "综艺", type: "tv", query: "综艺" },
    { name: "纪录片", type: "tv", query: "纪录片" }
  ],
  lives: {
    // 央视频道
    cctv1: {
      name: "CCTV1",
      url: "https://live.v1.mk/live.m3u8?token=TzAxOjEw"
    },
    cctv2: {
      name: "CCTV2",
      url: "https://live.v1.mk/live.m3u8?token=TzAyOjEw"
    },
    cctv3: {
      name: "CCTV3",
      url: "https://live.v1.mk/live.m3u8?token=TzAzOjEw"
    },
    cctv5: {
      name: "CCTV5",
      url: "https://live.v1.mk/live.m3u8?token=TzA1OjEw"
    },
    // 卫视频道
    hunan: {
      name: "湖南卫视",
      url: "https://live.v1.mk/live.m3u8?token=QzA0OjEw"
    },
    zhejiang: {
      name: "浙江卫视",
      url: "https://live.v1.mk/live.m3u8?token=QzA1OjEw"
    }
  }
};

/**
 * 获取默认配置
 * 当部署到 Netlify 等无数据库平台时使用此配置
 */
export function getDefaultConfigJson(): string {
  return JSON.stringify(DEFAULT_CONFIG, null, 2);
}
