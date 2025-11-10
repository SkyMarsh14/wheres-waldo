import { useContext } from "react";
import MapContext from "../../util/MapContext";
import styled from "styled-components";
const Wrapper = styled.dialog`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 50;
`;
const ClearPopup = () => {
  const { mapId, clear } = useContext(MapContext);
  return (
    <>
      <Wrapper open>
        <p>Congratulations! You have cleared the map</p>
        <form action="">
          <button type="submit">Submit</button>
        </form>
      </Wrapper>
    </>
  );
};
export default ClearPopup;
