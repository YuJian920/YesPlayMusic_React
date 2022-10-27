import Spin from "./components/Spin";
import type { SpinnerType } from "./type";

export default ({ loading, children }: SpinnerType) => {
  return loading ? (
    <div className="flex justify-center items-center w-full h-full">
      <Spin />
    </div>
  ) : (
    <>{children}</>
  );
};
