import type { PersonalizedListType } from '../../api/playlist/type';

export type AlbumUnitType = PersonalizedListType & {
	des?: string;
	circle?: boolean;
};
