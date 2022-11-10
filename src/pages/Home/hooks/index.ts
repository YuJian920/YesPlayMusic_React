import { useQuery } from "@tanstack/react-query";
import { getPersonalizedList } from "../../../api/playlist";

export const usePersonalizedList = (limit: number) => {
  return useQuery(["personalized"], () => getPersonalizedList(limit));
};
