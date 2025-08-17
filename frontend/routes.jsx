import App from "./src/App";
import Pokemon from "./src/pages/Pokemon";
import Home from "./src/pages/Home";
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "maps/1", element: <Pokemon /> },
    ],
  },
];
export default routes;
