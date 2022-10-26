import Home from "../pages/Home";
import PlayList from "../pages/PlayList";
import Navigation from "./components/Navigation";

export default () => {
  return (
    <>
      <Navigation />
      <main className="w-full overflow-auto fixed inset-y-0 right-0 pt-16 pb-24 pr-[10vw] pl-[10vw]">
        <PlayList />
        {/* <Home /> */}
      </main>
    </>
  );
};
