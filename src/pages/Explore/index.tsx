import AlbumUnit from "../../components/AlbumUnit";
import Spinner from "../../components/Spinner";
import { useTopPlayList } from "./hooks";

export default () => {
  const { data, isLoading } = useTopPlayList("全部");

  return (
    <div className="flex flex-col">
      <h1 className="text-[56px] font-bold">发现</h1>
      {isLoading ? (
        <Spinner loading={isLoading} height="288px" />
      ) : (
        <div className="grid grid-cols-5 gap-y-11 gap-x-6">
          {data?.map((mapItem) => (
            <AlbumUnit
              id={mapItem.id}
              name={mapItem.name}
              picUrl={mapItem.coverImgUrl}
            />
          ))}
        </div>
      )}
    </div>
  );
};
