import { useRoutes } from "react-router-dom";
import Lyrics from "../components/Lyrics";
import MusicBar from "../components/MusicBar";
import routerConfig from "../router";
import Navigation from "./components/Navigation";

export default () => {
  const routerElement = useRoutes(routerConfig);
  return (
    <>
      <Navigation />
      <main className="w-full overflow-auto fixed inset-y-0 right-0 pt-16 pb-24 pr-[10vw] pl-[10vw]">
        {routerElement}
      </main>
      <Lyrics />
      <MusicBar />
    </>
  );
};
