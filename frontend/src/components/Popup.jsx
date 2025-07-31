import styled from "styled-components";
const PopupContainer = styled.div`
  position: absolute;
  top: ${(props) => props.points.y}%;
  left: ${(props) => props.points.x}%;
  background: white;
  padding: 1rem;
  border-radius: 5px;
  color: black;
`;
const Popup = ({ options, points }) => {
  return (
    <PopupContainer points={points}>
      {options.map((opt, index) => (
        <div key={index}>{opt}</div>
      ))}
    </PopupContainer>
  );
};

export default Popup;
