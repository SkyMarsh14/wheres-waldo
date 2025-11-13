import App from "./src/App";
import Home from "./src/pages/Home";
import Map from "./src/components/Map";
import Error from "./src/pages/Error";
import MapSelection from "./src/pages/MapSelection";
import Leaderboard from "./src/pages/Leaderboard";
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "maps/:mapId", element: <Map /> },
      { path: "map-selection", element: <MapSelection /> },
    ],
    errorElement: <Error />,
  },
  {
    path: "/leaderboard/:mapId",
    element: <Leaderboard />,
  },
];
export default routes;
