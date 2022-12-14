import { useRef } from 'react';
import { usePlayMusicStore } from '../../store';
import { secondsToAny } from '../../utils';
import type { MusicProgressType } from './type';

const MusicProgress = (props: MusicProgressType) => {
	const { height, showTime = true, showProgressHover = true, progressColor, backgroundColor } = props;

	const progressRef = useRef<HTMLDivElement>(null);

	const playInstance = usePlayMusicStore((state) => state.instance);
	const playSeek = usePlayMusicStore((state) => state.seek);
	const playDuration = usePlayMusicStore((state) => state.duration);
	const progress = usePlayMusicStore((state) => state.progress);

	/**
	 * 进度条点击跳转进度
	 * @param e
	 * @returns
	 */
	const onProgressClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const progressDOM = progressRef?.current;

		if (!progressDOM || !playInstance) return;
		const elementWidth = progressDOM.offsetWidth;
		const clickWidth = e.clientX - progressDOM.getBoundingClientRect().left;
		const progress = clickWidth / elementWidth;

		playInstance.currentTime = playDuration * progress;
	};

	return (
		<div
			className="flex justify-between items-center w-full text-white"
			style={backgroundColor ? { backgroundColor: `${backgroundColor}` } : {}}
		>
			{showTime && <span className="tabular-nums mr-3">{secondsToAny(playSeek)}</span>}
			<div
				className="group flex items-center rounded-xl bg-white/40 flex-1 h-1 cursor-pointer"
				style={{ height: `${height || ''}` }}
				onClick={onProgressClick}
				ref={progressRef}
			>
				<div
					className="relative rounded-xl h-1 transition-all flex items-center"
					style={{
						width: `${progress}%`,
						height: `${height || ''}`,
						backgroundColor: `${progressColor || '#ffffff'}`
					}}
				>
					{showProgressHover && (
						<div className="absolute -right-1.5 invisible group-hover:visible bg-white rounded-full w-3 h-3 -ml-2 transition-all" />
					)}
				</div>
			</div>
			{showTime && <span className="tabular-nums ml-3">{secondsToAny(playDuration)}</span>}
		</div>
	);
};

export default MusicProgress;
