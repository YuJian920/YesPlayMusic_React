import { useQuery } from "@tanstack/react-query";
import { getPlayListDetail } from "../../../api/playList";

export const usePlayListDetail = (id: string) => {
  return useQuery(["playListDetail", id], () => getPlayListDetail(id));
};
