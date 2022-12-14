import AlbumUnit from '../AlbumUnit';
import type { AlbumListType } from './type';

const AlbumList = (props: AlbumListType) => {
	const { dataSoure, title, style } = props;

	return (
		<>
			<span className="flex mb-5 text-[28px] font-bold" style={style}>
				{title}
			</span>
			<div className="grid grid-cols-5 gap-y-11 gap-x-6">
				{dataSoure.map(({ id, name, picUrl }) => (
					<AlbumUnit key={id} id={id} name={name} picUrl={picUrl} />
				))}
			</div>
		</>
	);
};

export default AlbumList;
