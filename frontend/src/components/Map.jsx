import { useState, useRef } from "react";
import Popup from "./Popup";
import styled from "styled-components";
const Wrapper = styled.div`
  position: relative;
`;
const Map = ({ src, alt, options }) => {
  const [popup, setPopup] = useState(null);
  const [points, setPoints] = useState({ x: 0, y: 0 });
  const imgRef = useRef(null);
  function handleClick(e) {
    setPopup((prev) => (prev ? false : true));
    const coord = { x: e.clientX, y: e.clientY };
    const offset = {
      x: imgRef.current.offsetParent.offsetLeft,
      y: imgRef.current.offsetParent.offsetTop,
    };
    const imgSize = {
      height: imgRef.current.clientHeight,
      width: imgRef.current.clientWidth,
    };
    const relative = {
      x: coord.x - offset.x + window.scrollX,
      y: coord.y - offset.y + window.scrollY,
    };
    setPoints({
      x: Math.round((relative.x / imgSize.width) * 100),
      y: Math.round((relative.y / imgSize.height) * 100),
    });
  }
  return (
    <Wrapper>
      <img src={src} alt={alt} onClick={handleClick} ref={imgRef} />
      {popup && <Popup options={options} points={points} />}
    </Wrapper>
  );
};

export default Map;
