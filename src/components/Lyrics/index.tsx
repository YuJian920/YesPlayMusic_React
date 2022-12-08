import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { usePlayMusicStore } from "../../store";
import {
  DownIcon,
  LikeIcon,
  NextIcon,
  PauseIcon,
  PlayCycleIcon,
  PlayIcon,
  PreIcon,
  ShuffleIcon
} from "../IconPark";
import LyricLine from "../LyricLine";
import MusicProgress from "../MusicProgress";

export default () => {
  const coverRef = useRef<HTMLDivElement>(null);
  const [showLyric, setShowLyric] = useState(true);

  const isPlayStatus = usePlayMusicStore((state) => state.isPlay);
  const isShowPlayer = usePlayMusicStore((state) => state.isShowPlayer);
  const currentPlay = usePlayMusicStore((state) => state.currentPlay);
  const playLyric = usePlayMusicStore((state) => state.lyric);

  const setPlayStatus = usePlayMusicStore((state) => state.togglePlay);
  const setPlayShow = usePlayMusicStore((state) => state.togglePlayerShow);

  // 歌曲封面的弹簧缩放效果
  const coverSpringStyle = isPlayStatus ? { transform: "scale(1.05)" } : { transform: "scale(0.95)" };
  useEffect(() => {
    if (!coverRef.current) return;
    if (isPlayStatus === true) coverRef.current.style.animation = "spring-show 0.6s";
    else coverRef.current.style.animation = "";
  }, [isPlayStatus]);

  // 判断是否纯音乐，纯音乐默认不显示歌词
  useEffect(() => {
    const isPureMusic = playLyric.findIndex(
      ({ content }) => content === "纯音乐，请欣赏"
    );
    if (isPureMusic !== -1) setShowLyric(false);
  }, [playLyric]);

  return (
    <div
      className="fixed z-50 inset-0 flex w-screen h-screen bg-[#222222] select-none transition-all duration-[400ms]"
      style={isShowPlayer ? { top: 0 } : { top: "100%" }}
    >
      <div
        className="absolute z-20 right-6 top-7 hover:bg-white/10 rounded-xl transition-all cursor-pointer p-2.5"
        onClick={() => setPlayShow(false)}
      >
        <DownIcon width="26" height="26" color="#ffffff79" />
      </div>
      <div className="flex flex-1 flex-col justify-center items-center">
        <div
          className="relative w-[53vh] h-[53vh] transition-all"
          ref={coverRef}
          style={coverSpringStyle}
        >
          <img
            className="rounded-xl"
            src={currentPlay?.al.picUrl || ""}
            alt=""
          />
          <img
            className="absolute -z-1 top-3 rounded-xl transform scale-90 filter blur-xl opacity-70"
            src={currentPlay?.al.picUrl || ""}
          />
        </div>
        <div className="flex justify-between items-center w-[54vh] mt-6">
          <div className="flex flex-col text-white">
            <Link
              className="text-2xl font-semibold opacity-90 hover:underline"
              to="/"
            >
              {currentPlay?.name || ""}
            </Link>
            <div className="text-base opacity-60">
              <Link className="hover:underline" to="/">
                {currentPlay?.ar[0].name || ""}
              </Link>
              <span> - </span>
              <Link className="hover:underline" to="/">
                {currentPlay?.al.name || ""}
              </Link>
            </div>
          </div>
          <div className="cursor-pointer transition-all duration-200 transform hover:scale-125">
            <LikeIcon width="24" height="24" color="#ffffff" />
          </div>
        </div>
        <div className="w-[54vh] mt-6">
          <MusicProgress />
        </div>
        <div className="flex justify-center items-center mt-4">
          <div className="hover:bg-white/10 rounded-xl transition-all cursor-pointer w-8 h-8 flex justify-center items-center mr-4">
            <PlayCycleIcon width="14" height="14" color="#ffffff" />
          </div>
          <div className="hover:bg-white/10 rounded-xl transition-all cursor-pointer mx-2">
            <PreIcon width="36" height="36" color="#ffffff" />
          </div>
          <div
            className="hover:bg-white/10 rounded-xl transition-all cursor-pointer mx-2"
            onClick={() => setPlayStatus()}
          >
            {isPlayStatus ? (
              <PauseIcon width="50" height="50" color="#ffffff" />
            ) : (
              <PlayIcon width="50" height="50" color="#ffffff" />
            )}
          </div>
          <div className="hover:bg-white/10 rounded-xl transition-all cursor-pointer mx-2">
            <NextIcon width="36" height="36" color="#ffffff" />
          </div>
          <div
            className="hover:bg-white/10 rounded-xl transition-all cursor-pointer w-8 h-8 flex justify-center items-center ml-4"
            onClick={() => setShowLyric(!showLyric)}
          >
            <ShuffleIcon width="14" height="14" color="#ffffff" />
          </div>
        </div>
      </div>
      {showLyric && (
        <div className="flex flex-col flex-1 items-center overflow-y-auto noScroll">
          <LyricLine />
        </div>
      )}
    </div>
  );
};
