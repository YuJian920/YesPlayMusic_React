import { useQuery } from "@tanstack/react-query";
import { getTopList, getPersonalizedList } from "../../../api/playlist";

export const useTopList = () => {
  return useQuery(["toplist"], () => getTopList());
};

export const usePersonalizedList = (limit: number) => {
  return useQuery(["personalized"], () => getPersonalizedList(limit));
};
