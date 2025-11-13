import { useContext } from "react";
import styled, { keyframes } from "styled-components";
import MapContext from "../util/MapContext";
const PopupContainer = styled.div`
  position: absolute;
  top: ${(props) => props.points.y}%;
  left: ${(props) => props.points.x}%;
  background: white;
  color: black;
  transform: translateX(7%) translateY(7%);
  border-radius: 10px;
`;
const Option = styled.button`
  display: flex;
  align-items: center;
  background-color: white;
  font-size: 1.2em;
  gap: 0.5em;
  justify-content: start;
  text-decoration: none;
  width: 12em;
  border-width: 1px 1px 0;
  border-color: #e7e7e7;
  border-style: solid;
  padding: 0.4em 1em;
  transition: 0.2s background-color ease-in-out;
  &:before {
    display: inline-block;
    content: "";
    background-image: url(${(props) => props.src});
    background-size: contain;
    width: 1.5em;
    height: 1.5em;
  }
  &:hover {
    background-color: #dadada;
  }
  &:last-child {
    border-width: 1px 0 0 0;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  &:first-child {
    border-width: 0 1px 0 0;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
`;
const DotContainer = styled.div`
  position: absolute;
  top: ${(props) => props.points.y}%;
  left: ${(props) => props.points.x}%;
`;
const Dot = styled.div`
  translate: -50% -50%;
  position: absolute;
  height: 0.7em;
  width: 0.7em;
  background-color: red;
  border-radius: 50%;
`;
const ringeringAnimation = keyframes`
    0%{
        transform:scale(1);
        opacity:1;
    }
    100%{
        transform:scale(2.2);
        opacity:0;
    }
`;
const Ringering = styled(Dot)`
  animation: 1.5s ${ringeringAnimation} infinite;
`;
const Popup = ({ points }) => {
  const { target, mapId, setTarget, setPopup, setClear, intervalRef } =
    useContext(MapContext);
  async function handleClick(e, id, points) {
    e.preventDefault();
    const payload = {
      coordinateX: points.x,
      coordinateY: points.y,
      targetId: id,
      mapId,
    };
    const sessionId = localStorage.getItem("sessionId");
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionId,
      },
      method: "POST",
      body: JSON.stringify(payload),
    };
    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + "game/guess",
      options
    ).then((response) => response.json());
    setPopup((prev) => !prev); // Toggle popup menu when the guess is submitted.
    if (!response.correct) {
      return alert(response.message);
    }

    setTarget(response.session.targets);
    if (response.clear) {
      setClear(true);
      clearInterval(intervalRef.current);
    }
  }
  return (
    <>
      <PopupContainer points={points}>
        {target
          .filter((target) => !target.found)
          .map((target, index) => (
            <Option
              key={index}
              src={target.url}
              onClick={(e) => handleClick(e, target.id, points)}
            >
              {target.name}
            </Option>
          ))}
      </PopupContainer>
      <DotContainer points={points}>
        <Ringering />
        <Dot />
      </DotContainer>
    </>
  );
};

export default Popup;
