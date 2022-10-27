import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { getPlayListDetail } from "../../../api/playList";

/**
 * 根据传入 ID 请求对应歌单详情，当传入 ID 为空时，自动获取 URL 上的 ID
 * @param id
 * @returns
 */
export const usePlayListDetail = (id?: string) => {
  if (!id) {
    const { pathname } = useLocation();
    const playListId = pathname.split("/")[2];
    id = playListId;
  }

  return useQuery(["playListDetail", id], () => getPlayListDetail(id!));
};
