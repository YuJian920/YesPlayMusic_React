import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { usePlayMusicStore } from "../../store";
import { parseLyric } from "../../utils/parserLyric";
import {
  LikeIcon,
  NextIcon,
  PauseIcon,
  PlayCycleIcon,
  PlayIcon,
  PreIcon,
  ShuffleIcon,
} from "../IconPark";
import MusicProgress from "../MusicProgress";
import { lyric } from "./data.json";
import music from "./music.mp3";

export default () => {
  const lyricRef = useRef<HTMLDivElement>(null);
  const [lyricData, setLyric] = useState(parseLyric(lyric));

  const playInstance = usePlayMusicStore((state) => state.instance);
  const setPlayInstance = usePlayMusicStore((state) => state.setInstance);
  const playStatus = usePlayMusicStore((state) => state.status);
  const setPlayStatus = usePlayMusicStore((state) => state.toggleStatus);
  const playSeek = usePlayMusicStore((state) => state.seek);

  useEffect(() => {
    setPlayInstance(new Audio(music));
  }, []);

  const lyricIndex = useMemo(
    () =>
      lyricData.findIndex((findItem, index, oringArr) => {
        if (index === oringArr.length - 1) return oringArr.length;
        return playSeek >= findItem.time && playSeek < oringArr[index + 1].time;
      }),
    [playSeek]
  );

  useEffect(() => {
    if (!lyricRef.current) return;
    // lyricRef.current.scrollTop = clien.offsetHeight * (lyricIndex + 1) - clien.offsetHeight / 2;

    const lryicEle = lyricRef.current.childNodes[lyricIndex + 1] as HTMLSpanElement;
    lryicEle && lryicEle.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [lyricIndex]);

  const onLyricItemClick = (time: number) => {
    if (!playInstance) return;
    playInstance.currentTime = time;
  };

  return (
    <div className="fixed z-50 inset-0 flex w-screen h-screen bg-[#222222] select-none">
      <div className="flex flex-col justify-center items-center w-1/2">
        <div className="relative w-[54vh] h-[54vh]">
          <img
            className="rounded-xl"
            src="https://p2.music.126.net/aG5zqxkBRfLiV7A8W0iwgA==/109951166702962263.jpg?param=1024y1024"
            alt=""
          />
          <img
            className="absolute z-[-1] top-3 rounded-xl scale-90 blur-xl opacity-70"
            src="https://p2.music.126.net/aG5zqxkBRfLiV7A8W0iwgA==/109951166702962263.jpg?param=1024y1024"
          />
        </div>
        <div className="flex justify-between items-center w-[54vh] mt-6">
          <div className="flex flex-col text-white">
            <Link
              className="text-2xl font-semibold opacity-90 hover:underline"
              to="/"
            >
              孤勇者
            </Link>
            <div className="text-base opacity-60">
              <Link className="hover:underline" to="/">
                陈奕迅
              </Link>
              <span> - </span>
              <Link className="hover:underline" to="/">
                孤勇者
              </Link>
            </div>
          </div>
          <div className="cursor-pointer transition-all duration-200 hover:scale-125">
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
            {playStatus ? (
              <PauseIcon width="50" height="50" color="#ffffff" />
            ) : (
              <PlayIcon width="50" height="50" color="#ffffff" />
            )}
          </div>
          <div className="hover:bg-white/10 rounded-xl transition-all cursor-pointer mx-2">
            <NextIcon width="36" height="36" color="#ffffff" />
          </div>
          <div className="hover:bg-white/10 rounded-xl transition-all cursor-pointer w-8 h-8 flex justify-center items-center ml-4">
            <ShuffleIcon width="14" height="14" color="#ffffff" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-1/2 overflow-y-auto">
        <div
          className="flex flex-col text-3xl text-white font-semibold"
          ref={lyricRef}
        >
          <span className="mt-[50vh]" />
          {lyricData.map((mapItem, index) => (
            <span
              className="my-0.5 py-3 px-5 rounded-xl hover:bg-white/10 transition-all duration-[350ms] text-white/30 cursor-pointer"
              style={
                lyricIndex === index
                  ? { color: "#ffffff", fontSize: 35, filter: "blur(0px)" }
                  : { filter: "blur(1px)" }
              }
              key={mapItem.time}
              onClick={() => onLyricItemClick(mapItem.time)}
            >
              {mapItem.content}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
