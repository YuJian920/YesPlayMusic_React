import Spin from "./components/Spin";

interface SpinnerType {
  loading: boolean;
  children: JSX.Element;
}

export default ({ loading, children }: SpinnerType) => {
  return loading ? (
    <div className="flex justify-center items-center w-full h-full">
      <Spin />
    </div>
  ) : (
    <>{children}</>
  );
};
