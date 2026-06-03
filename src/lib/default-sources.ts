/**
 * 默认源配置
 * 用于 Netlify 等无数据库部署场景
 * 集成自 LunaTV-config (https://github.com/hafrey1/LunaTV-config)
 */

export const DEFAULT_CONFIG = {
  cache_time: 3600,
  api_site: {
    // 综合类资源
    dy01: {
      name: '豆瓣资源',
      api: 'https://api.dy01.cc/api.php/provide/vod',
      detail: 'https://api.dy01.cc'
    },
    yingshi: {
      name: '优酷资源',
      api: 'https://yingshi.oss-cn-beijing.aliyuncs.com/api.php/provide/vod/',
      detail: 'https://yingshi.oss-cn-beijing.aliyuncs.com'
    },
    // 4K/蓝光资源
    mgtv: {
      name: '芒果TV资源',
      api: 'https://www.zycaiji.net/api.php/provide/vod/',
      detail: 'https://www.zycaiji.net'
    },
    // 电影专题
    dyjx: {
      name: '第一角色',
      api: 'https://www.1jx.net/api.php/provide/vod/',
      detail: 'https://www.1jx.net'
    },
    // 动漫资源
    dm84: {
      name: '动漫84',
      api: 'https://www.dm84.com/api.php/provide/vod/',
      detail: 'https://www.dm84.com'
    },
    // 剧集资源
    kubo: {
      name: '库博资源',
      api: 'https://api.kubo.top/api.php/provide/vod/',
      detail: 'https://api.kubo.top'
    },
    // 国外资源
    zxzj: {
      name: '影视库',
      api: 'https://www.zxzj.net/api.php/provide/vod/',
      detail: 'https://www.zxzj.net'
    },
    // 体育直播
    live: {
      name: '星辰直播',
      api: 'https://xingchen.tv/api.php/provide/vod/',
      detail: 'https://xingchen.tv'
    },
    // 纪录片
    jlu: {
      name: '纪录库',
      api: 'https://www.jlu.net/api.php/provide/vod/',
      detail: 'https://www.jlu.net'
    },
    // 音乐
    music: {
      name: '音乐资源',
      api: 'https://music.oss-cn-beijing.aliyuncs.com/api.php/provide/vod/',
      detail: 'https://music.oss-cn-beijing.aliyuncs.com'
    },
  },
  custom_category: [
    // 电影分类
    { name: '热门电影', type: 'movie', query: '热门' },
    { name: '最新电影', type: 'movie', query: '最新' },
    { name: '经典电影', type: 'movie', query: '经典' },
    { name: '豆瓣高分', type: 'movie', query: '豆瓣高分' },
    { name: '华语电影', type: 'movie', query: '华语' },
    { name: '欧美电影', type: 'movie', query: '欧美' },
    { name: '韩国电影', type: 'movie', query: '韩国' },
    { name: '日本电影', type: 'movie', query: '日本' },
    { name: '动作电影', type: 'movie', query: '动作' },
    { name: '喜剧电影', type: 'movie', query: '喜剧' },
    { name: '爱情电影', type: 'movie', query: '爱情' },
    { name: '科幻电影', type: 'movie', query: '科幻' },
    { name: '悬疑电影', type: 'movie', query: '悬疑' },
    { name: '恐怖电影', type: 'movie', query: '恐怖' },
    { name: '治愈电影', type: 'movie', query: '治愈' },
    
    // 电视分类
    { name: '热门电视', type: 'tv', query: '热门' },
    { name: '美剧', type: 'tv', query: '美剧' },
    { name: '英剧', type: 'tv', query: '英剧' },
    { name: '韩剧', type: 'tv', query: '韩剧' },
    { name: '日剧', type: 'tv', query: '日剧' },
    { name: '国产剧', type: 'tv', query: '国产剧' },
    { name: '港剧', type: 'tv', query: '港剧' },
    { name: '日本动画', type: 'tv', query: '日本动画' },
    { name: '综艺', type: 'tv', query: '综艺' },
    { name: '纪录片', type: 'tv', query: '纪录片' },
  ],
  lives: {
    // 央视频道
    cctv1: {
      name: 'CCTV1',
      url: 'https://live.v1.mk/live.m3u8?token=TzAxOjEw',
    },
    cctv2: {
      name: 'CCTV2',
      url: 'https://live.v1.mk/live.m3u8?token=TzAyOjEw',
    },
    cctv3: {
      name: 'CCTV3',
      url: 'https://live.v1.mk/live.m3u8?token=TzAzOjEw',
    },
    cctv5: {
      name: 'CCTV5',
      url: 'https://live.v1.mk/live.m3u8?token=TzA1OjEw',
    },
    // 卫视频道
    hunan: {
      name: '湖南卫视',
      url: 'https://live.v1.mk/live.m3u8?token=QzA0OjEw',
    },
    zhejiang: {
      name: '浙江卫视',
      url: 'https://live.v1.mk/live.m3u8?token=QzA1OjEw',
    },
  }
};

/**
 * 获取默认配置
 * 当部署到 Netlify 等无数据库平台时使用此配置
 */
export function getDefaultConfigJson(): string {
  return JSON.stringify(DEFAULT_CONFIG, null, 2);
}
