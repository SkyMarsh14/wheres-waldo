import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
const Wrapper = styled.div`
  font-family: Arial, sans-serif;
  font-size: 1.2em;
  height: calc(100vh - ${(props) => props.$offsetTop}px);
`;
const Welcome = styled.div`
  text-align: center;
  padding: 2em;
`;
const H1 = styled.h1`
  font-size: 1.3em;
  margin-bottom: 3em;
`;
const StartBtn = styled.button`
  display: block;
  margin: auto;
  background-color: #3181ce;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 0.5em 1.5em;
  margin-top: 2em;
  cursor: pointer;
  &:hover {
    filter: brightness(0.8);
  }
`;
const NavigateButton = () => {
  const navigate = useNavigate();
  return (
    <StartBtn
      onClick={() => navigate("/map-selection", { viewTransition: true })}
    >
      Start a game
    </StartBtn>
  );
};
const Home = () => {
  const wrapperRef = useRef(null);
  const [offsetTop, setOffsetTop] = useState(0);
  useEffect(() => {
    if (wrapperRef.current) {
      setOffsetTop(wrapperRef.current.offsetTop);
    }
  }, [wrapperRef]);
  return (
    <Wrapper ref={wrapperRef} $offsetTop={offsetTop}>
      <Welcome>
        <H1>Welcome to Where's Waldo Game!</H1>
        <div>How fast you can find the objectives?</div>
        <div>
          Your score will be recorded and your name will be displayed on the
          leaderboard if you solve it fast!
        </div>
      </Welcome>
      <NavigateButton />
    </Wrapper>
  );
};
export default Home;
