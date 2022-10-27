import type { CSSProperties } from "react";
import type { PersonalizedListType } from "../../api/playlist/type";

export interface AlbumListType {
  dataSoure: PersonalizedListType[];
  title: string;
  style?: CSSProperties;
}
