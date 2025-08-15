import styled from "styled-components";
import { useContext } from "react";
import MapContext from "../../util/MapContext";
import { Timer } from "lucide-react";
import formatTime from "../../util/formatTime";
const StickyContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  box-shadow: 1.6px 3.2px 3.2px hsl(0deg 0% 0% / 0.45);
  display: flex;
  justify-content: space-between;
  padding: 0em 1em;
  gap: 2em;
  font-size: 1.2em;
  margin: auto;
  background-color: #f4f4f4;
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
  font-size: 1.2em;
  text-align: center;
  margin: 0.5em;
`;

const TargetContainer = styled.div`
  display: flex;
  gap: 1em;
`;
const StopWatch = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3em;
`;
const Targets = () => {
  const { targets, timer } = useContext(MapContext);
  return (
    <>
      <Title>Find the following characters in the Map! </Title>
      <StickyContainer>
        <TargetContainer>
          {targets.map((target) => (
            <Target>
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
      </StickyContainer>
    </>
  );
};
export default Targets;
