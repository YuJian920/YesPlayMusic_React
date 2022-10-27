import { LikeIcon, MoreIcon, PlayIcon } from "../IconPark";
import type { PlaylistInfoType } from "./type";

export default ({ coverUrl, name, description }: PlaylistInfoType) => (
  <div className="flex mb-16 mt-8">
    <div className="relative w-72 h-72 group">
      <img src={coverUrl} alt="playlist cover" className="rounded-xl" />
      <img
        src={coverUrl}
        className="absolute z-[-1] top-3 rounded-xl scale-100 blur-lg opacity-60"
      />
      <div className="absolute inset-0 flex justify-center items-center transition-all duration-200 m-auto bg-white/[.14] hover:bg-white/[.3] rounded-full backdrop-blur-md h-[18%] w-[18%] opacity-0 group-hover:opacity-100 cursor-pointer">
        <PlayIcon width="35" height="35" color="#ffffff" />
      </div>
    </div>
    <div className="flex flex-1 flex-col justify-center ml-14">
      <span className="text-4xl font-bold">{name}</span>
      <span className="text-lg opacity-90 mt-6">Playlist by 避难所Shelter</span>
      <span className="text-sm opacity-70 mt-0.5">
        最后更新于 2020年01月10日 · 79 首歌
      </span>
      <div className="text-sm opacity-70 mt-6">{description}</div>
      <div className="flex mt-8">
        <button className="flex justify-center items-center rounded-lg py-2 px-3 w-auto mr-4 text-lg font-semibold bg-[#eaeffd] text-[#335eea] transition-all duration-200 hover:scale-105">
          <PlayIcon width="27" height="27" color="#335eea" />
          <span className="ml-1 mr-1">播放</span>
        </button>
        <button className="flex justify-center items-center rounded-lg py-2 px-3 w-auto mr-4 text-lg font-semibold bg-[#eaeffd] text-[#335eea] transition-all duration-200 hover:scale-105">
          <LikeIcon width="22" height="22" color="#000000" />
        </button>
        <button className="flex justify-center items-center rounded-lg py-2 px-3 w-auto mr-4 text-lg font-semibold bg-[#eaeffd] text-[#335eea] transition-all duration-200 hover:scale-105">
          <MoreIcon width="22" height="22" color="#000000" />
        </button>
      </div>
    </div>
  </div>
);
