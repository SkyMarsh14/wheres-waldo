import styled from "styled-components";
import { useContext } from "react";
import MapContext from "../../util/MapContext";
import { Timer } from "lucide-react";
import formatTime from "../../util/formatTime";
import { Link } from "react-router";
const StickyContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  box-shadow: 1.6px 3.2px 3.2px hsl(0deg 0% 0% / 0.45);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0em 1em;
  gap: 2em;
  font-size: 1.2em;
  margin: auto;
  background-color: #f6f6f6;
`;
const Target = styled.div`
  font-size: 0.7em;
  display: grid;
  text-align: center;
`;
const Img = styled.img`
  display: inline-block;
  object-fit: contain;
  max-width: 5em;
  max-height: 5em;
`;
const FoundImg = styled(Img)`
  filter: grayscale(100%);
`;
const TargetName = styled.div`
  font-size: 0.8em;
`;
const Title = styled.div`
  font-family: "Chewy";
  font-size: 1.2em;
  text-align: center;
  margin: 0.5em;
`;

const TargetContainer = styled.div`
  display: flex;
  gap: 1em;
  font-family: "Chewy";
`;
const StopWatch = styled.div`
  display: flex;
  font-size: 1.5em;
  font-family: "digital-clock-font", sans-serif;
  align-items: center;
  gap: 0.3em;
`;
const IndexLink = styled(Link)`
  align-self: center;
  background-color: #62beff;
  color: #320000;
  padding: 0.3em 0.5em;
  border-radius: 7px;
  text-decoration: none;
  transition: box-shadow 0.2s ease-in-out;
  &:visited {
    color: #2c0000;
    text-decoration: none;
  }
  &:hover {
    box-shadow: 3.5px 7px 7px hsl(0deg 0% 0% / 0.39);
  }
`;
const Targets = () => {
  const { targets, timer } = useContext(MapContext);
  return (
    <>
      <Title>Find the following characters in the Map! </Title>
      <StickyContainer>
        <TargetContainer>
          {targets.map((target) => (
            <Target key={target.name}>
              {target.found ? (
                <FoundImg src={target.src}></FoundImg>
              ) : (
                <Img src={target.src} alt={target.name} />
              )}
              <TargetName>{target.name}</TargetName>
            </Target>
          ))}
        </TargetContainer>
        <StopWatch>
          <Timer />
          {formatTime(timer)}
        </StopWatch>
        <IndexLink to="/">Return to Home</IndexLink>
      </StickyContainer>
    </>
  );
};
export default Targets;
