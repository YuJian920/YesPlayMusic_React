import AlbumList from "../../components/AlbumList";
import Spinner from "../../components/Spinner";
import { usePersonalizedList } from "./hooks/index";

export default () => {
  const { data, isLoading } = usePersonalizedList(10);
  return (
    <Spinner loading={isLoading}>
      <AlbumList
        dataSoure={data?.result || []}
        title="推荐歌单"
        style={{ marginTop: "2rem" }}
      />
      {/* <AlbumList style={{ marginTop: "3.375rem" }} /> */}
    </Spinner>
  );
};
