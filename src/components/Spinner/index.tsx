import "./index.css";
import type { SpinnerType } from "./type";

export default ({ loading, children, height }: SpinnerType) => {
  return loading ? (
    <div
      className="flex justify-center items-center w-full h-full"
      style={{ height }}
    >
      <div className="hollow-dots-spinner">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  ) : (
    <>{children}</>
  );
};
