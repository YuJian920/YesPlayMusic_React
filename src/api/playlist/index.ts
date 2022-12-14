import request from '../../utils/request';
import type { GetPersonalizedListType, GetPlayListDetailType, GetTopPlayListType } from './type';

/**
 * 网友精选碟
 * 说明 : 调用此接口 , 可获取网友精选碟歌单
 * 可选参数 : order: 可选值为 'new' 和 'hot', 分别对应最新和最热 , 默认为 'hot'
 * cat: tag, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从歌单分类接口获取(/playlist/catlist)
 * limit: 取出歌单数量 , 默认为 50
 * offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*50, 其中 50 为 limit 的值
 */
export const getTopPlayList = async (cat: string) => {
	const { playlists } = await request<GetTopPlayListType>('/top/playlist', { data: { cat } });
	return playlists;
};

/**
 * 推荐歌单
 * 说明 : 调用此接口,可获取所有榜单 接口地址 : /toplist
 */
export const getPersonalizedList = async (limit: number) => {
	return await request<GetPersonalizedListType>('/personalized', { data: { limit } });
};

/**
 * 获取歌单详情
 * 说明 : 歌单能看到歌单名字, 但看不到具体歌单内容 , 调用此接口 , 传入歌单 id, 可 以获取对应歌单内的所有的音乐(未登录状态只能获取不完整的歌单,登录后是完整的)，但是返回的 trackIds 是完整的，tracks 则是不完整的，可拿全部 trackIds 请求一次 song/detail 接口获取所有歌曲的详情 (https://github.com/Binaryify/NeteaseCloudMusicApi/issues/452)
 */
export const getPlayListDetail = async (id: string | number) => {
	const { playlist } = await request<GetPlayListDetailType>('/playlist/detail', { id });
	return playlist;
};
