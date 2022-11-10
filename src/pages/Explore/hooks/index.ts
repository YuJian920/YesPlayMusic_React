import { useQuery } from "@tanstack/react-query";
import { getTopPlayList } from "../../../api/playlist";

export const useTopPlayList = (cat: string) => {
  return useQuery(["topPlaylist"], () => getTopPlayList(cat));
};
