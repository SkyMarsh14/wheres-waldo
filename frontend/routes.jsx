import App from "./src/App";
import Pokemon from "./src/pages/Pokemon";
import Home from "./src/pages/Home";
import Error from "./src/pages/Error";
import MapSelection from "./src/pages/MapSelection";
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
];
export default routes;
