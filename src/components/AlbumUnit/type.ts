import type { PersonalizedListType } from "../../api/type";

export interface AlbumUnitType {
  (
    props: PersonalizedListType & { des?: string; circle?: boolean }
  ): JSX.Element;
}
