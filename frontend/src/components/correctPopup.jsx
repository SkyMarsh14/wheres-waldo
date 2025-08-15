import styled, { keyframes } from "styled-components";
import CircleCheck from "lucide-react";
const faidingAnimation = keyframes`
    0%{
        opacity:0;
    }
    100%{
        opacity:100%;
    }
`;
const FixedContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  animation: 1s ${faidingAnimation} 1;
`;

const CorrectPopup = (target) => {
  return (
    <FixedContainer>
      <div>
        <CircleCheck />
        Nice you have found {target.name}
      </div>
      <img src={target.src} alt={target.name} />
    </FixedContainer>
  );
};
export default CorrectPopup;
