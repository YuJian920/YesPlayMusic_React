import type { AlbumType, ArtistType, BaseResponse, MuiscQuality } from '../../type';

export interface GetSongDetailType extends BaseResponse {
	privileges: SongPrivilegeType[];
	songs: SongDetailType[];
}

export interface SongPrivilegeType {
	id: number;
	fee: number;
}

export interface SongDetailType {
	name: string; // 歌曲标题
	id: number; // 歌曲ID
	t: 0 | 1 | 2;
	alia: string[];
	ar: ArtistType[];
	al: AlbumType; // 专辑信息
	dt: number; // 歌曲时长
	sq: any; // 无损质量文件信息
	h: any; // 高质量文件信息
	m: any; // 中质量文件信息
	l: any; // 低质量文件信息
}

export interface GetSongUrlType extends BaseResponse {
	data: SongUrlType[];
}

export interface SongUrlType {
	id: number;
	level: MuiscQuality;
	md5: string;
	size: number;
	time: number;
	url: string;
}

/**
 * 歌词返回数据类型
 */
export interface GetSongLyricType extends BaseResponse {
	lrc: {
		lyric: string;
		version: number;
	};
	tlyric: string;
}
