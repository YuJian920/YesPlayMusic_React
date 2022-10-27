import request from "../../utils/request";
import { getSongDetail } from "../song";
import type {
  GetPersonalizedListType,
  GetTopListType,
  GetPlayListDetailType,
} from "./type";

/**
 * 所有榜单
 * 说明 : 调用此接口,可获取所有榜单 接口地址 : /toplist
 */
export const getTopList = async () => {
  return await request<GetTopListType>("/toplist");
};

/**
 * 推荐歌单
 * 说明 : 调用此接口,可获取所有榜单 接口地址 : /toplist
 */
export const getPersonalizedList = async (limit: number) => {
  return await request<GetPersonalizedListType>("/personalized", {
    data: { limit },
  });
};

/**
 * 获取歌单详情
 * 说明 : 歌单能看到歌单名字, 但看不到具体歌单内容 , 调用此接口 , 传入歌单 id, 可 以获取对应歌单内的所有的音乐(未登录状态只能获取不完整的歌单,登录后是完整的)，但是返回的 trackIds 是完整的，tracks 则是不完整的，可拿全部 trackIds 请求一次 song/detail 接口获取所有歌曲的详情 (https://github.com/Binaryify/NeteaseCloudMusicApi/issues/452)
 */
export const getPlayListDetail = async (id: string) => {
  const { playlist } = await request<GetPlayListDetailType>(
    "/playlist/detail",
    { id }
  );

  return playlist;
};
