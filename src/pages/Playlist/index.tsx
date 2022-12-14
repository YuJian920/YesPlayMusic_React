import PlaylistInfo from '../../components/PlaylistInfo';
import PlaylistItem from '../../components/PlaylistItem';
import Spinner from '../../components/Spinner';
import { usePlaylistDetail, usePlaylistFullSong } from './hooks';

const Playlist = () => {
	const { data: detailData, isLoading: detailLoading } = usePlaylistDetail();
	const { data: songData, isLoading: songLoading } = usePlaylistFullSong(detailData?.trackIds || []);

	return (
		<Spinner loading={detailLoading}>
			<PlaylistInfo dataSoure={detailData!} />
			<Spinner loading={songLoading} height="20%">
				{songData?.songs.map((mapItem) => (
					<PlaylistItem key={mapItem.id} itemDetail={mapItem} originData={songData} />
				))}
			</Spinner>
		</Spinner>
	);
};

export default Playlist;
