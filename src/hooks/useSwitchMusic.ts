import { usePlayMusicStore } from '../store';

const useSwitchMusic = () => {
	const { playlist, playlistIndex, setPlaylistIndex } = usePlayMusicStore();

	const switchMusic = (type: 'pre' | 'next') => {
		if (type === 'pre') {
			if (playlistIndex - 1 < 0) return;
			setPlaylistIndex(playlistIndex - 1, true);
		}
		if (type === 'next') {
			if (playlistIndex + 1 > playlist.length - 1) return;
			setPlaylistIndex(playlistIndex + 1, true);
		}
		return () => null;
	};

	return { switchMusicPre: () => switchMusic('pre'), switchMusicNext: () => switchMusic('next') };
};

export default useSwitchMusic;
