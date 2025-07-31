import App from "./src/App";
import Pokemon from "./src/pages/Pokemon"
const routes = [
  {
    path: "/",
    element: <App />,
    children:[
      {index:true,element:<Pokemon />}
    ]
  },
];
export default routes;
