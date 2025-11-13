import { useState, useRef, useEffect, useMemo } from "react";
import styled from "styled-components";
import MapContext from "../util/MapContext.js";
import { useParams } from "react-router-dom";
import Targets from "../components/Targets.jsx";
import Popup from "../components/Popup.jsx";
const Wrapper = styled.div`
  position: relative;
`;
const StyledImg = styled.img`
  padding: 0.5em;
`;
const Map = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timer, setTimer] = useState(null);
  const [popup, setPopup] = useState(null);
  const [points, setPoints] = useState({ x: 0, y: 0 });
  const [target, setTarget] = useState(null);
  const [map, setMap] = useState(null);
  const imgRef = useRef(null);
  const { mapId } = useParams();
  const intervalRef = useRef();
  const url = import.meta.env.VITE_BACKEND_URL + `game/start/${mapId}`;

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Server error ${res.status}`);
        }
        const json = await res.json();
        setTarget(json.targetData);
        setMap(json.mapData);
        intervalRef.current = setInterval(() => {
          setTimer((prev) => prev + 1);
        }, 1000);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
    return () => clearInterval(intervalRef.current);
  }, []);
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
  const contextValue = {
    target,
    timer,
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Internal Error: {error}</p>;
  return (
    <MapContext.Provider value={contextValue}>
      <Targets></Targets>
      <Wrapper>
        <StyledImg src={map.url} onClick={handleClick} ref={imgRef}></StyledImg>
        {popup && <Popup points={points}></Popup>}
      </Wrapper>
    </MapContext.Provider>
  );
};

export default Map;
