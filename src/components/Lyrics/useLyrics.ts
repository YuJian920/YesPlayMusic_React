import { usePlayMusicStore } from '../../store';

const useLyrics = () => {
	const isPlay = usePlayMusicStore((state) => state.isPlay);
	const isShowPlayer = usePlayMusicStore((state) => state.isShowPlayer);
	const currentPlay = usePlayMusicStore((state) => state.currentPlay);
	const lyric = usePlayMusicStore((state) => state.lyric);
	const togglePlay = usePlayMusicStore((state) => state.togglePlay);
	const togglePlayerShow = usePlayMusicStore((state) => state.togglePlayerShow);

	return {
		isPlay,
		isShowPlayer,
		currentPlay,
		lyric,
		togglePlay,
		togglePlayerShow
	};
};

export default useLyrics;
