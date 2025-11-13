import { createContext } from "react";
const MapContext = createContext({
  targets: [],
  mapId: 1,
  time: 0,
});

export default MapContext;
