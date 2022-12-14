import { Link } from 'react-router-dom';
import useSwitchMusic from '../../hooks/useSwitchMusic';
import { usePlayMusicStore } from '../../store';
import { LikeIcon, NextIcon, PauseIcon, PlayIcon, PreIcon, UpIcon } from '../IconPark';
import MusicProgress from '../MusicProgress';

const MusicBar = () => {
	const { isPlay, currentPlay, togglePlay, togglePlayerShow } = usePlayMusicStore();
	const { switchMusicPre, switchMusicNext } = useSwitchMusic();

	return (
		<div
			className="fixed z-40 bottom-0 left-0 right-0 flex flex-col w-screen h-16 select-none bg-white/80 backdrop-filter backdrop-blur-xl backdrop-saturate-200 transition-all duration-300"
			style={currentPlay ? { bottom: 0 } : { bottom: '-10%' }}
		>
			<MusicProgress
				height={'2px'}
				showTime={false}
				showProgressHover={false}
				progressColor="#000000"
				backgroundColor="#e2e2e2"
			/>
			<div className="grid grid-cols-3 pl-[10vw] pr-[10vw] h-full">
				<div className="flex items-center">
					<img
						className="h-12 rounded-md cursor-pointer"
						src={`${currentPlay?.al.picUrl}?param=52y52`}
						alt=""
						loading="lazy"
					/>
					<div className="flex flex-col justify-center h-12 ml-3">
						<Link className="font-semibold text-base opacity-90 overflow-hidden break-all hover:underline" to="/">
							{currentPlay?.name || ''}
						</Link>
						<Link className="text-xs opacity-60 overflow-hidden break-all hover:underline" to="/">
							{currentPlay?.ar[0].name}
						</Link>
					</div>
					<div className="ml-4 hover:bg-gray-300/40 p-1.5 rounded-md transition-all cursor-pointer">
						<LikeIcon width="17" height="17" color="#000000" />
					</div>
				</div>
				<div className="flex items-center justify-center">
					<div
						className="hover:bg-gray-300/[.28] rounded-md p-1 transition-all cursor-pointer mx-2"
						onClick={switchMusicPre}
					>
						<PreIcon width="24" height="24" color="#000000" />
					</div>
					<div
						className="hover:bg-gray-300/[.28] rounded-xl transition-all cursor-pointer mx-2"
						onClick={() => togglePlay()}
					>
						{isPlay ? (
							<PauseIcon width="38" height="38" color="#000000" />
						) : (
							<PlayIcon width="38" height="38" color="#000000" />
						)}
					</div>
					<div
						className="hover:bg-gray-300/[.28] rounded-md p-1 transition-all cursor-pointer mx-2"
						onClick={switchMusicNext}
					>
						<NextIcon width="24" height="24" color="#000000" />
					</div>
				</div>
				<div className="flex justify-end items-center">
					<div
						className="hover:bg-gray-300/40 p-1.5 rounded-md transition-all cursor-pointer"
						onClick={() => togglePlayerShow(true)}
					>
						<UpIcon width="22" height="22" color="#000000" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MusicBar;
