import { AlbumType, ArtistType, BaseResponse } from '../../type';

/**
 * 推荐歌单
 */
export interface GetPersonalizedListType extends BaseResponse {
	result: PersonalizedListType[];
}

export interface PersonalizedListType {
	id: number;
	name: string;
	picUrl: string;
}

/**
 * 歌单详情
 */
export interface GetPlayListDetailType extends BaseResponse {
	playlist: PlayListDetailType;
}

export interface PlayListDetailType {
	id: number;
	name: string;
	coverImgUrl: string;
	description: string;
	trackIds: {
		id: number;
	}[];
	tracks: {
		al: AlbumType;
		dt: number;
		ar: ArtistType[];
		alia: string[];
		name: string;
	}[];
	userId: number;
	updateTime: number;
	trackCount: number;
	creator: {
		userId: number;
		nickname: string;
	};
}

/**
 * 歌单 ( 网友精选碟 )
 */
export interface GetTopPlayListType extends BaseResponse {
	cat: string;
	more: boolean;
	total: number;
	playlists: TopPlayListType[];
}

export interface TopPlayListType {
	id: number;
	name: string;
	coverImgUrl: string;
}
