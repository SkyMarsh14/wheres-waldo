import { useState, useRef, useEffect, useMemo } from "react";
import startSession from "../../util/startSession.js";
import Popup from "./Popup";
import styled from "styled-components";
import MapContext from "../../util/MapContext.js";
import Targets from "./Targets.jsx";
import Credit from "./Credit.jsx";
const Wrapper = styled.div`
  position: relative;
`;
const StyledImg = styled.img`
  padding: 0.5em;
`;
const Map = ({ src, alt, target, mapId, credit }) => {
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    startSession();
    return () => clearInterval(intervalId);
  }, []);
  const [popup, setPopup] = useState(null);
  const [points, setPoints] = useState({ x: 0, y: 0 });
  const [targets, setTargets] = useState(target);
  const [clear, setClear] = useState({ clear: false, time: null });
  const imgRef = useRef(null);
  function handleClick(e) {
    setPopup((prev) => (prev ? false : true));
    const offset = {
      x: imgRef.current.offsetParent.offsetLeft + imgRef.current.offsetLeft,
      y: imgRef.current.offsetParent.offsetTop + imgRef.current.offsetTop,
    };
    const imgSize = {
      height: imgRef.current.clientHeight,
      width: imgRef.current.clientWidth,
    };
    const relative = {
      x: e.clientX - offset.x + window.scrollX,
      y: e.clientY - offset.y + window.scrollY,
    };
    setPoints({
      x: (relative.x / imgSize.width) * 100,
      y: (relative.y / imgSize.height) * 100,
    });
  }
  const contextValue = useMemo(
    () => ({
      targets,
      mapId,
      setTargets,
      setPopup,
      timer,
      credit,
      clear,
      setClear,
    }),
    [targets, mapId, timer, credit, clear]
  );
  return (
    <MapContext.Provider value={contextValue}>
      <Targets></Targets>
      <Wrapper>
        <StyledImg src={src} alt={alt} onClick={handleClick} ref={imgRef} />
        {popup && <Popup points={points} />}
        <Credit></Credit>
      </Wrapper>
    </MapContext.Provider>
  );
};

export default Map;
