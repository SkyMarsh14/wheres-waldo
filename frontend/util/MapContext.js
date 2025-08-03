import { createContext } from "react";
const MapContext = createContext({
  targets: [],
  mapId: 1,
});

export default MapContext;
