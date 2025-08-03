import App from "./src/App";
import Pokemon from "./src/pages/Pokemon";
const routes = [
  {
    path: "/",
    element: <App />,
    children: [{ path: "maps/1", element: <Pokemon /> }],
  },
];
export default routes;
