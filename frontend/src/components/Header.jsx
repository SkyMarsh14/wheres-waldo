import styled from "styled-components";
const Wrapper = styled.header`
  display: flex;
  justify-content: center;
`;
const Header = () => {
  return (
    <Wrapper>
      <h1>Where's Waldo?</h1>
    </Wrapper>
  );
};
export default Header;
