import { useQuery } from "@tanstack/react-query";
import { getPersonalizedList, getTopList } from "../../../api/playList";

export const useTopList = () => {
  return useQuery(["toplist"], () => getTopList());
};

export const usePersonalizedList = (limit: number) => {
  return useQuery(["personalized"], () => getPersonalizedList(limit));
};
