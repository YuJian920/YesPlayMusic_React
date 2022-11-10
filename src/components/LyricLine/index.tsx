import { useEffect, useMemo, useRef } from "react";
import { usePlayMusicStore } from "../../store";

export default () => {
  const lyricRef = useRef<HTMLDivElement>(null);
  const playInstance = usePlayMusicStore((state) => state.instance);
  const playSeek = usePlayMusicStore((state) => state.seek);
  const playLyric = usePlayMusicStore((state) => state.lyric);

  // 计算当前正在播放歌词 index
  const lyricIndex = useMemo(
    () =>
      playLyric.findIndex((findItem, index, oringArr) => {
        if (index === oringArr.length - 1) return oringArr.length;
        return playSeek >= findItem.time && playSeek < oringArr[index + 1].time;
      }),
    [playSeek]
  );

  // 歌词滚动 effect
  useEffect(() => {
    if (!lyricRef.current) return;
    // lyricRef.current.scrollTop = clien.offsetHeight * (lyricIndex + 1) - clien.offsetHeight / 2;

    const lryicEle = lyricRef.current.childNodes[lyricIndex + 1] as HTMLSpanElement;
    lryicEle && lryicEle.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [lyricIndex]);

  /**
   * 歌词点击跳转
   * @param time
   * @returns
   */
  const onLyricItemClick = (time: number) => {
    if (!playInstance) return;
    playInstance.currentTime = time;
  };

  return (
    <div
      className="flex flex-col text-3xl text-white font-semibold"
      ref={lyricRef}
    >
      <span className="mt-[50vh]" />
      {playLyric.map((mapItem, index) => (
        <span
          className="my-0.5 py-3 px-5 rounded-xl hover:bg-white/10 transition-all duration-[350ms] text-white/30 cursor-pointer"
          style={lyricIndex === index ? { color: "#ffffff", fontSize: 35, filter: "blur(0px)" } : { filter: `blur(1px)` }}
          key={mapItem.time}
          onClick={() => onLyricItemClick(mapItem.time)}
        >
          {mapItem.content}
        </span>
      ))}
    </div>
  );
};
