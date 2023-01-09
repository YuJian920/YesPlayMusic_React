import { usePlayMusicStore } from '../../store';

const useMusicProgress = () => {
	const playInstance = usePlayMusicStore((state) => state.instance);
	const playSeek = usePlayMusicStore((state) => state.seek);
	const playDuration = usePlayMusicStore((state) => state.duration);
	const progress = usePlayMusicStore((state) => state.progress);

	return { playInstance, playSeek, playDuration, progress };
};

export default useMusicProgress;
