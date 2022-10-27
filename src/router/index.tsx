import type { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import Playlist from "../pages/Playlist";

const routerConfig: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/playlist/:id",
    element: <Playlist />,
  },
];

export default routerConfig;
