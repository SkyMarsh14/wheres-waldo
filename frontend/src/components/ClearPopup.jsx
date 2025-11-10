import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MapContext from "../../util/MapContext";
import styled from "styled-components";
const Wrapper = styled.dialog`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 50;
`;
const Link = styled.link``;
const ClearPopup = () => {
  const { mapId, clear } = useContext(MapContext);
  const url = import.meta.env.VITE_BACKEND_URL + "leaderboard";
  const sessionId = localStorage.getItem("sessionId");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      username: e.target.elements.username.value,
      mapId,
    };
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionId,
      },
      method: "POST",
      body: JSON.stringify(payload),
    };
    const response = await fetch(url, options).then((response) =>
      response.json()
    );
    navigate(`/leaderboard/${mapId}`);
  };
  const handleExit = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <>
      <Wrapper open>
        <p>Congratulations! You have cleared the map</p>
        <form action={url} method="post" onSubmit={handleSubmit}>
          <label htmlFor="username">
            Enter your name to be displayed in the leaderboard:
          </label>
          <input type="text" name="username" />
          <button type="submit">Submit</button>
          <button onClick={handleExit}>Exit</button>
        </form>
      </Wrapper>
    </>
  );
};
export default ClearPopup;
