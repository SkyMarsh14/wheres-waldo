import { useContext, useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import MapContext from "../../util/MapContext";
import styled from "styled-components";
const Wrapper = styled.dialog`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 50;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border: none;
  border-radius: 5px;
  padding: 4.5em 2em;
  display: flex;
  gap: 1.4em;
  flex-direction: column;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
const StyledButton = styled.button`
  padding: 0.3em 3em;
  border-radius: 5px;
  flex-basis: 0;
  flex-grow: 1;
  transition: filter 0.2s ease-in-out;
  color: ${(props) => (props.$primary ? "white" : "#65656c")};
  background-color: ${(props) => (props.$primary ? "#3C70FF" : "white")};
  border: 1px ${(props) => (props.$primary ? "#3C70FF" : "#a7a7af")} solid;
  &:hover {
    filter: brightness(80%);
  }
  &:focus-visible {
    outline: ${(props) =>
      props.$primary ? "1px solid black" : "1px solid #3C70FF"};
  }
`;
const P = styled.p`
  font-weight: 800;
  font-size: 1.2em;
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 1em;
  justify-content: space-between;
`;
const ClearPopup = () => {
  const { mapId, clear } = useContext(MapContext);
  const [username, setUsername] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const url = import.meta.env.VITE_BACKEND_URL + "leaderboard";
  const sessionId = localStorage.getItem("sessionId");
  const navigate = useNavigate();
  const modalRef = useRef(null);
  const { width, height } = useWindowSize();
  const handleChange = (e) => {
    const str = e.target.value.toString();
    const trimmed = e.target.value.trim();
    if (trimmed == "") {
      setValidationMessage("Username cannot be just spaces.");
    } else if (str.startsWith(" ")) {
      setValidationMessage("Username cannot start with a space.");
    }
    setUsername(str);
  };
  useEffect(() => {
    modalRef.current.showModal();
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "visible");
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      username: e.target.elements.username.value.trim(),
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
      <Wrapper ref={modalRef}>
        <P>Congratulations! You have cleared the map!</P>
        <StyledForm action={url} method="post" onSubmit={handleSubmit}>
          <label htmlFor="username">
            Enter your name to be displayed in the leaderboard:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            required
            pattern="^(?!\s)(?!\s*$).+"
            title={validationMessage}
            onChange={handleChange}
          />
          <ButtonContainer>
            <StyledButton $primary type="submit">
              Submit
            </StyledButton>
            <StyledButton onClick={handleExit}>Exit</StyledButton>
          </ButtonContainer>
        </StyledForm>
      </Wrapper>
      <Confetti width={width} height={height} numberOfPieces={300} />
    </>
  );
};

export default ClearPopup;
