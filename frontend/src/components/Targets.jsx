import styled from "styled-components";
import { useContext } from "react";
import MapContext from "../../util/MapContext";
const Wrapper = styled.div`
  margin: 1em;
  position: sticky;
  top: 1em;
  z-index: 1;
`;
const FlexContainer = styled.div`
  width: fit-content;
  display: flex;
  padding: 0em 1em;
  gap: 2em;
  font-size: 1.2em;
  margin: auto;
  background-color: #f4f4f4;
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
    <>
      <Title>Find the following characters in the Map!</Title>
      <Wrapper>
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
    </>
  );
};
export default Targets;
