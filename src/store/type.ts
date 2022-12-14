import type { SongDetailType } from '../api/song/type';
import type { MuiscQuality, ParsedLyric } from '../type';

export interface PlayMusicStateType {
	isShowPlayer: boolean;
	instance: HTMLAudioElement | null;
	isPlay: boolean;
	seek: number;
	duration: number;
	progress: number;
	lyric: ParsedLyric[];
	currentPlay: SongDetailType | null;
	playlistIndex: number;
	playlist: number[];
	priorityPlaylist: number[];

	togglePlayerShow: (isShowPlayer?: boolean) => void;
	setInstance: (instance: HTMLAudioElement, autoPlay?: boolean) => HTMLAudioElement;
	setLyric: (instance: ParsedLyric[]) => void;
	togglePlay: (isPlay?: boolean) => void;
	eventListener: (instance: HTMLAudioElement | null, remove?: boolean) => void;
	seekUpdate: () => void;
	setCurrentPlay: (songInfo: SongDetailType, level: MuiscQuality) => void;
	setPlaylist: (playlist: number[], index?: number) => void;
	setPriorityPlaylist: (priorityPlaylist: number[]) => void;
	setPlaylistIndex: (setPlaylistIndex: number, play?: boolean) => void;
	checkPlaylist: () => void;
}
