import { Link } from "react-router-dom";
import { getSongLyric, getSongPlayUrl } from "../../api/song";
import type { SongDetailType } from "../../api/song/type";
import { usePlayMusicStore } from "../../store";
import { millisToMinutesAndSeconds } from "../../utils";
import { parseLyric } from "../../utils/parserLyric";
import { LikeIcon } from "../IconPark";

export default ({ dataSoure }: { dataSoure: SongDetailType }) => {
  const setPlayShow = usePlayMusicStore((state) => state.togglePlayerShow);
  const currentPlay = usePlayMusicStore((state) => state.currentPlay);

  const setPlayInstance = usePlayMusicStore((state) => state.setInstance);
  const setCurrentPlay = usePlayMusicStore((state) => state.setCurrentPlay);
  const setPlayLyric = usePlayMusicStore((state) => state.setLyric);

  /**
   * 点击歌曲播放
   * @param musicInfo 歌曲 ID
   * @returns
   */
  const onItemClick = async (musicInfo: SongDetailType) => {
    if (currentPlay?.id === musicInfo.id) {
      setPlayShow();
      return;
    }

    const result = (await getSongPlayUrl(musicInfo.id, "standard"))?.[0];
    if (!result) return;

    const { lrc } = await getSongLyric(musicInfo.id);

    setPlayInstance(new Audio(result.url), true);
    setCurrentPlay(musicInfo);
    setPlayLyric(parseLyric(lrc?.lyric || ""));
  };

  return (
    <div
      className="flex group items-center p-2 rounded-xl select-none transition-all duration-300 hover:bg-[#f5f5f7] cursor-pointer"
      onClick={() => onItemClick(dataSoure)}
    >
      <div className="flex flex-1 mr-5 items-center justify-start">
        <img
          className="rounded-lg w-12 h-12 aspect-square cursor-pointer"
          src={`${dataSoure.al.picUrl}?param=52y52`}
          alt=""
        />
        <div className="flex flex-col pl-4">
          <div className="text-lg font-semibold break-all overflow-hidden">
            <span>{dataSoure.name}</span>
            {dataSoure.alia.length ? (
              <span className="text-[#7a7a7a] opacity-70 mr-1">
                （{dataSoure.alia[0] || ""}）
              </span>
            ) : null}
          </div>
          <div className="text-sm opacity-70">
            <Link className="hover:underline" to="/">
              {dataSoure.ar[0].name}
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-1 text-base opacity-90 mr-4">
        <Link className="hover:underline" to="/">
          {dataSoure.al.name}
        </Link>
      </div>
      <div className="flex items-center mr-2.5">
        <div className="mr-6 invisible group-hover:visible cursor-pointer transition-all duration-200 transform hover:scale-125">
          <LikeIcon width="18" height="18" color="#335eea" />
        </div>
        <span className="text-base justify-end opacity-90 tabular-nums">
          {millisToMinutesAndSeconds(dataSoure.dt) || 0.0}
        </span>
      </div>
    </div>
  );
};
