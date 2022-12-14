import create from 'zustand';
import { getSongDetail, getSongLyric, getSongPlayUrl } from '../api/song';
import { parseLyric } from '../utils/parserLyric';
import type { PlayMusicStateType } from './type';

export const usePlayMusicStore = create<PlayMusicStateType>((set, get) => ({
	isShowPlayer: false, // 歌词页面显示状态
	isPlay: false, // 歌曲播放状态

	instance: null, // 歌曲 Audio 实例
	seek: 0, // 当前播放时长
	duration: 0, // 歌曲总时长
	progress: 0, // 当前播放进度
	lyric: [], // 歌词数组
	currentPlay: null,
	playlistIndex: 0, // 播放列表当前播放指针
	playlist: [], // 播放列表
	priorityPlaylist: [], // 高优先级播放列表

	/**
	 * 切换歌词页显示，参数为空时自动取反
	 * @param isShowPlayer
	 */
	togglePlayerShow: (isShowPlayer = !get().isShowPlayer) => {
		set(() => ({ isShowPlayer }));
	},

	/**
	 * 设置 Audio 实例
	 * @param instance
	 * @param autoPlay 是否开启自动播放
	 * @returns
	 */
	setInstance: (instance, autoPlay = false) => {
		const { eventListener, togglePlay } = get();
		set(() => ({ instance }));
		eventListener(instance);

		if (autoPlay) togglePlay(true);
		return instance;
	},

	/**
	 * 设置歌词数据
	 * @param lyric
	 */
	setLyric: (lyric) => set(() => ({ lyric })),

	/**
	 * 切换播放状态，参数为空时自动取反
	 * @param isPlay
	 */
	togglePlay: async (isPlay = !get().isPlay) => {
		const { instance } = get();

		if (isPlay) await instance?.play();
		else instance?.pause();

		set(() => ({ isPlay }));
	},

	/**
	 * 监听播放状态
	 * @param remove
	 * @returns
	 */
	eventListener: (instance, remove = false) => {
		const { seekUpdate, setPlaylistIndex, playlistIndex } = get();
		const songEnded = () => setPlaylistIndex(playlistIndex + 1, true);

		if (!instance) return;
		if (remove) {
			instance.removeEventListener('timeupdate', seekUpdate);
			instance.removeEventListener('ended', songEnded);
			return;
		}

		instance.addEventListener('timeupdate', seekUpdate);
		instance.addEventListener('ended', songEnded);
	},

	/**
	 * 调整歌曲进度
	 */
	seekUpdate: () => {
		const { instance } = get();
		if (!instance || !instance.currentTime || !instance.duration) return;

		set(() => ({
			seek: instance.currentTime,
			duration: instance.duration,
			progress: (instance.currentTime / instance.duration) * 100
		}));
	},

	/**
	 * 设置当前播放歌曲
	 */
	setCurrentPlay: (songInfo, level) => {
		const { instance, eventListener, setInstance, setLyric } = get();
		// 清空上一首歌留下的 EventListener
		eventListener(instance, true);
		// 根据歌曲 ID 获取播放 URL 传递给 Audio 实例
		getSongPlayUrl(songInfo.id, level).then((result) => {
			if (!result) return;
			setInstance(new Audio(result[0].url), true);
		});
		// 根据 ID 获取对应歌曲歌词
		getSongLyric(songInfo.id).then(({ lrc }) => {
			setLyric(parseLyric(lrc?.lyric || ''));
		});
		set(() => ({ currentPlay: songInfo }));
	},

	setPlaylist: (playlist, index) => {
		const { setPlaylistIndex } = get();
		set(() => ({ playlist }));
		if (index !== undefined) setPlaylistIndex(index);
	},

	setPriorityPlaylist: (priorityPlaylist) => set(() => ({ priorityPlaylist })),
	setPlaylistIndex: (playlistIndex, play) => {
		const { checkPlaylist } = get();
		set(() => ({ playlistIndex }));
		if (play) checkPlaylist();
	},

	checkPlaylist: () => {
		const { playlist, priorityPlaylist, playlistIndex, togglePlay, setCurrentPlay } = get();
		if (!playlist.length && !priorityPlaylist.length) {
			togglePlay(false);
			return;
		}

		getSongDetail([playlist[playlistIndex]]).then((res) => {
			setCurrentPlay(res.songs[0], 'standard');
		});
	}
}));
