import { Link } from 'react-router-dom';
import { PlayIcon } from '../IconPark';
import type { AlbumUnitType } from './type';

const AlbumUnit = (props: AlbumUnitType) => {
	const { id, name, picUrl, des, circle = false } = props;

	const onPlayIconClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		event.stopPropagation();
		event.preventDefault();
	};

	return (
		<div>
			<Link to={`/playlist/${id}`}>
				<div className="group relative w-full aspect-square">
					<div className="group relative w-full">
						<img
							style={circle ? { borderRadius: 9999 } : {}}
							className="rounded-xl w-full inset-0"
							src={`${picUrl}?param=512y512`}
							loading="lazy"
						/>
						<img
							style={circle ? { borderRadius: 9999 } : {}}
							className="rounded-xl absolute -z-1 inset-0 h-full w-full filter transform scale-90 transition-all duration-500 group-hover:top-3 group-hover:blur-lg group-hover:opacity-60 group-hover:scale-100"
							src={`${picUrl}?param=512y512`}
							loading="lazy"
						/>
					</div>
					<div
						className="opacity-0 flex transition-all duration-500 absolute inset-0 m-auto justify-center items-center bg-white/[.14] hover:bg-white/[.3] rounded-full backdrop-filter backdrop-blur-md h-[22%] w-[22%] group-hover:opacity-100"
						onClick={onPlayIconClick}
					>
						<PlayIcon width="34" height="34" color="#ffffff" />
					</div>
				</div>
			</Link>
			<div className="flex flex-col mt-2">
				<Link
					style={circle ? { textAlign: 'center' } : {}}
					className="text-base font-semibold hover:underline"
					to={`/playlist/${id}`}
				>
					{name}
				</Link>
				<span style={circle ? { textAlign: 'center' } : {}} className="text-xs opacity-70">
					{des || ''}
				</span>
			</div>
		</div>
	);
};

export default AlbumUnit;
