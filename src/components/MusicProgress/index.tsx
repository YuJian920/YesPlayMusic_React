import { usePlayMusicStore } from "../../store";
import { secondsToAny } from "../../utils";
import type { MusicProgressType } from "./type";

export default ({ showTime = true }: MusicProgressType) => {
  const playSeek = usePlayMusicStore((state) => state.seek);
  const playDuration = usePlayMusicStore((state) => state.seek);
  const progress = usePlayMusicStore((state) => state.progress);

  return (
    <div className="flex justify-between items-center w-full text-white">
      {showTime && (
        <span className="tabular-nums">{secondsToAny(playSeek)}</span>
      )}
      <div className="group flex items-center rounded-xl bg-white/40 flex-1 h-1 mx-3">
        <div
          className="bg-white rounded-xl h-full transition-all"
          style={{ width: `${progress}%` }}
        />
        <div className="invisible group-hover:visible bg-white rounded-full w-3 h-3 -ml-2 transition-all cursor-pointer"></div>
      </div>
      {showTime && (
        <span className="tabular-nums">{secondsToAny(playDuration)}</span>
      )}
    </div>
  );
};
