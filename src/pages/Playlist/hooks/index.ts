import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { getPlayListDetail } from "../../../api/playlist";
import { getSongDetail } from "../../../api/song";

/**
 * 根据传入 ID 请求对应歌单详情，当传入 ID 为空时，自动获取 URL 上的 ID
 * @param id
 * @returns
 */
export const usePlaylistDetail = (id?: string) => {
  if (!id) {
    const { pathname } = useLocation();
    const playListId = pathname.split("/")[2];
    id = playListId;
  }

  return useQuery(["playListDetail", id], () => getPlayListDetail(id!));
};

/**
 * 根据歌单歌曲列表请求完整歌单列表
 * @param ids 
 * @returns 
 */
export const usePlaylistFullSong = (ids: { id: number }[]) => {
  const fullSongIds = ids.map((mapItem) => mapItem.id);
  return useQuery(["playListDetailFullSong", fullSongIds], () => getSongDetail(fullSongIds));
};
