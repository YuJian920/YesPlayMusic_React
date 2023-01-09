import { usePlayMusicStore } from '../../store';

const useMusicBar = () => {
	const isPlay = usePlayMusicStore((state) => state.isPlay);
	const currentPlay = usePlayMusicStore((state) => state.currentPlay);
	const togglePlay = usePlayMusicStore((state) => state.togglePlay);
	const togglePlayerShow = usePlayMusicStore((state) => state.togglePlayerShow);

	return { isPlay, currentPlay, togglePlay, togglePlayerShow };
};

export default useMusicBar;
