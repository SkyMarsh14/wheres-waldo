import styled from "styled-components";
import { useContext } from "react";
import MapContext from "../../util/MapContext";
const Wrapper = styled.div`
  position: sticky;
  margin: 1em;
`;
const FlexContainer = styled.div`
  width: fit-content;
  display: flex;
  padding: 1em 2em;
  gap: 2em;
  font-size: 1.5em;
  margin: auto;
  background-color: #cbcbcb;
  border-radius: 10px;
`;
const ImgContainer = styled.div`
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
const Targets = () => {
  const { targets } = useContext(MapContext);
  return (
    <Wrapper>
      <Title>Find the following characters in the Map!</Title>
      <FlexContainer>
        {targets.map((target) => (
          <ImgContainer>
            {target.found ? (
              <FoundImg src={target.src}></FoundImg>
            ) : (
              <Img src={target.src} alt={target.name} />
            )}
            <TargetName>{target.name}</TargetName>
          </ImgContainer>
        ))}
      </FlexContainer>
    </Wrapper>
  );
};
export default Targets;
