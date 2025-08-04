import { useState, useRef } from "react";
import Popup from "./Popup";
import styled from "styled-components";
import MapContext from "../../util/MapContext.js";
import Targets from "./Targets.jsx";
const Wrapper = styled.div`
  position: relative;
`;
const StyledImg = styled.img`
  padding: 1em;
`;
const Map = ({ src, alt, target, mapId }) => {
  const [popup, setPopup] = useState(null);
  const [points, setPoints] = useState({ x: 0, y: 0 });
  const [targets, setTargets] = useState(target);
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
  return (
    <MapContext.Provider value={{ targets, mapId, setTargets, setPopup }}>
      <Targets></Targets>
      <Wrapper>
        <StyledImg src={src} alt={alt} onClick={handleClick} ref={imgRef} />
        {popup && <Popup points={points} />}
      </Wrapper>
    </MapContext.Provider>
  );
};

export default Map;
