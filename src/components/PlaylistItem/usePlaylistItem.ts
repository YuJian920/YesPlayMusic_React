import { usePlayMusicStore } from '../../store';

const usePlaylistItem = () => {
	const setPlayShow = usePlayMusicStore((state) => state.togglePlayerShow);
	const currentPlay = usePlayMusicStore((state) => state.currentPlay);
	const setPlaylist = usePlayMusicStore((state) => state.setPlaylist);
	const checkPlaylist = usePlayMusicStore((state) => state.checkPlaylist);

	return { setPlayShow, currentPlay, setPlaylist, checkPlaylist };
};

export default usePlaylistItem;
