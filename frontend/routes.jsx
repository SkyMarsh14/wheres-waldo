import App from "./src/App";
import Pokemon from "./src/pages/Pokemon";
import Home from "./src/pages/Home";
import Error from "./src/pages/Error";
import MapSelection from "./src/pages/MapSelection";
import Leaderboard from "./src/pages/Leaderboard";
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "maps/1", element: <Pokemon /> },
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
