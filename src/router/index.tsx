import type { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Playlist from "../pages/Playlist";
import Explore from "../pages/Explore";

const routerConfig: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/playlist/:id",
    element: <Playlist />,
  },
  {
    path: "/explore",
    element: <Explore />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default routerConfig;
