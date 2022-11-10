import { RightIcon, XIcon } from "../../components/IconPark";
import yesplaymusic from "../../assets/picture/yesplaymusic.png";
import netease from "../../assets/picture/netease-music.png";

export default () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full select-none">
      <div className="flex items-center mb-4">
        <img className="h-16 m-5" src={yesplaymusic} alt="" />
        <XIcon width="32" height="32" color="#525252b2" />
        <img className="h-16 m-5" src={netease} alt="" />
      </div>
      <div className="flex group relative justify-center items-center w-300px h-32 transition-all bg-[#eaeffd] rounded-lg cursor-pointer my-3.5">
        <div className="flex flex-col text-[#335eea] transition-all duration-500 transform-gpu group-hover:-translate-x-2">
          <span className="text-2xl font-semibold">登录网易云账号</span>
          <span className="text-sm mt-0.5">可访问全部数据</span>
        </div>
        <div className="absolute right-10 transform-gpu opacity-0 transition-all duration-400 group-hover:flex group-hover:opacity-100 group-hover:translate-x-2">
          <RightIcon width="26" height="26" color="#335eea" />
        </div>
      </div>
      <div className="flex group relative justify-center items-center w-300px h-32 transition-all bg-[#eaeffd] rounded-lg cursor-pointer my-3.5">
        <div className="flex flex-col text-[#335eea] transition-all duration-500 transform-gpu group-hover:-translate-x-2">
          <span className="text-2xl font-semibold">搜索网易云账号</span>
          <span className="text-sm mt-0.5">只能读取账号公开数据</span>
        </div>
        <div className="absolute right-10 transform-gpu opacity-0 transition-all duration-400 group-hover:flex group-hover:opacity-100 group-hover:translate-x-2">
          <RightIcon width="26" height="26" color="#335eea" />
        </div>
      </div>
    </div>
  );
};
