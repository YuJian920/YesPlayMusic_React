import type { MuiscQuality } from "../../type";
import request from "../../utils/request";
import type {
  GetSongDetailType,
  GetSongLyricType,
  GetSongUrlType,
} from "./type";

/**
 * 获取歌曲详情
 * 说明 : 调用此接口 , 传入音乐 id(支持多个 id, 用 , 隔开), 可获得歌曲详情(dt为歌曲时长)
 */
export const getSongDetail = async (ids: number[]) => {
  return await request<GetSongDetailType>("/song/detail", {
    ids: ids.join(","),
  });
};

/**
 * 获取音乐 url - 新版
 * 说明 : 使用歌单详情接口后 , 能得到的音乐的 id, 但不能得到的音乐 url, 调用此接口, 传入的音乐 id( 可多个 , 用逗号隔开 ), 可以获取对应的音乐的 url,未登录状态或者非会员返回试听片段(返回字段包含被截取的正常歌曲的开始时间和结束时间)
 */
export const getSongPlayUrl = async (
  ids: number | number[],
  level: MuiscQuality
) => {
  if (!ids) return;

  const { data } = await request<GetSongUrlType>("/song/url/v1", {
    id: Array.isArray(ids) ? ids.join(",") : ids,
    level,
  });

  return data;
};

/**
 * 获取歌词
 * 说明 : 调用此接口 , 传入音乐 id 可获得对应音乐的歌词 ( 不需要登录 )
 * @param id
 * @returns
 */
export const getSongLyric = async (id: number) => {
  return await request<GetSongLyricType>("/lyric", { id });
};
