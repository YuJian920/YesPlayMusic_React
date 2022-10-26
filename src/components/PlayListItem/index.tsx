import { Link } from "react-router-dom";
import type { PlayListDetailListType } from "../../api/type";
import { millisToMinutesAndSeconds } from "../../utils";
import { LikeIcon } from "../IconPark";

export default ({ dataSoure }: { dataSoure: PlayListDetailListType }) => {
  return (
    <div className="flex group items-center p-2 rounded-xl select-none transition-all duration-300 hover:bg-[#f5f5f7]">
      <div className="flex flex-1 mr-5 items-center justify-start">
        <img
          className="rounded-lg w-12 h-12 aspect-square cursor-pointer"
          src={`${dataSoure.al.picUrl}?param=52y52`}
          alt=""
        />
        <div className="flex flex-col pl-4">
          <span className="text-lg font-semibold break-all overflow-hidden">
            {dataSoure.name}
          </span>
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
        <div className="mr-6 invisible group-hover:visible cursor-pointer transition-all duration-200 hover:scale-125">
          <LikeIcon width="18" height="18" color="#335eea" />
        </div>
        <span className="text-base justify-end opacity-90 tabular-nums">
          {millisToMinutesAndSeconds(dataSoure.dt)}
        </span>
      </div>
    </div>
  );
};
