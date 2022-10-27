import PlaylistInfo from "../../components/PlaylistInfo";
import PlaylistItem from "../../components/PlaylistItem";
import Spinner from "../../components/Spinner";
import { usePlayListDetail } from "./hooks";

export default () => {
  const { data, isLoading } = usePlayListDetail();

  return (
    <Spinner loading={isLoading}>
      <>
        <PlaylistInfo
          coverUrl={data?.coverImgUrl || ""}
          description={data?.description || ""}
          name={data?.name || ""}
        />
        <div>
          {data?.tracks.map((mapItem) => (
            <PlaylistItem key={mapItem.name} dataSoure={mapItem} />
          ))}
        </div>
      </>
    </Spinner>
  );
};
