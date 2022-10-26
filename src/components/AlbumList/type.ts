import type { CSSProperties } from "react";
import type { PersonalizedListType } from "../../api/type";

export interface AlbumListType {
  (props: {
    dataSoure: PersonalizedListType[];
    title: string;
    style?: CSSProperties;
  }): JSX.Element;
}
