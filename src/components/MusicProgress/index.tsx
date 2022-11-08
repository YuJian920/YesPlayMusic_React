import { useRef } from "react";
import { usePlayMusicStore } from "../../store";
import { secondsToAny } from "../../utils";
import type { MusicProgressType } from "./type";

export default ({ showTime = true }: MusicProgressType) => {
  const playInstance = usePlayMusicStore((state) => state.instance);
  const playSeek = usePlayMusicStore((state) => state.seek);
  const playDuration = usePlayMusicStore((state) => state.duration);
  const progress = usePlayMusicStore((state) => state.progress);
  const progressRef = useRef<HTMLDivElement>(null);

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
    <div className="flex justify-between items-center w-full text-white">
      {showTime && (
        <span className="tabular-nums">{secondsToAny(playSeek)}</span>
      )}
      <div
        className="group flex items-center rounded-xl bg-white/40 flex-1 h-1 mx-3 cursor-pointer"
        onClick={onProgressClick}
        ref={progressRef}
      >
        <div
          className="relative bg-white rounded-xl h-full transition-all flex items-center"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute -right-1.5 invisible group-hover:visible bg-white rounded-full w-3 h-3 -ml-2 transition-all"></div>
        </div>
      </div>
      {showTime && (
        <span className="tabular-nums">{secondsToAny(playDuration)}</span>
      )}
    </div>
  );
};
