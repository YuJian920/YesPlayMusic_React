import request from "../../utils/request";
import type { GetSongDetailType } from "./type";

/**
 * 获取歌曲详情
 * 说明 : 调用此接口 , 传入音乐 id(支持多个 id, 用 , 隔开), 可获得歌曲详情(dt为歌曲时长)
 */
export const getSongDetail = async (ids: number[]) => {
  if (!ids || !ids.length) return;

  return await request<GetSongDetailType>("/song/detail", {
    ids: ids.join(","),
  });
};
