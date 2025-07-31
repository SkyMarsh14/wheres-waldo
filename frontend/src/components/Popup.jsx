import styled, { keyframes } from "styled-components";
const PopupContainer = styled.div`
  position: absolute;
  top: ${(props) => props.points.y}%;
  left: ${(props) => props.points.x}%;
  background: white;
  color: black;
  transform: translateX(7%) translateY(7%);
`;
const Option = styled.button`
  display: flex;
  font-size: 1.5em;
  padding: 0 1em;
  align-items: center;
  &:before {
    display: inline-block;
    content: "";
    background-image: url(${(props) => props.src});
    background-size: contain;
    width: 1.5em;
    height: 1.5em;
  }
`;
const DotContainer = styled.div`
  position: absolute;
  top: ${(props) => props.points.y}%;
  left: ${(props) => props.points.x}%;
`;
const Dot = styled.div`
  translate: -50% -50%;
  position: absolute;
  height: 0.7em;
  width: 0.7em;
  background-color: red;
  border-radius: 50%;
`;
const ringeringAnimation = keyframes`
    0%{
        transform:scale(1);
        opacity:1;
    }
    100%{
        transform:scale(2.2);
        opacity:0;
    }
`;
const Ringering = styled(Dot)`
  animation: 1.5s ${ringeringAnimation} infinite;
`;

const Popup = ({ options, points }) => {
  return (
    <>
      <PopupContainer points={points}>
        {options.map((opt, index) => (
          <Option key={index} src={opt.src}>
            {opt.name}
          </Option>
        ))}
      </PopupContainer>
      <DotContainer points={points}>
        <Ringering />
        <Dot />
      </DotContainer>
    </>
  );
};

export default Popup;
