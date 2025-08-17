import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
const Wrapper = styled.div`
  font-size: 1.2em;
  height: calc(100vh - ${(props) => props.$offsetTop}px);
`;
const Welcome = styled.div`
  text-align: center;
  padding: 2em;
`;
const StartBtn = styled.button`
  display: block;
  margin: auto;
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
        <h1>Welcome to Where's Waldo Game!</h1>
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
