import styled from "styled-components";
const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  font-family: "Bagel Fat One";
`;
const Title = styled.span`
  color: red;
  font-size: 1.5em;
`;
const TitleRight = styled(Title)`
  color: blue;
`;
const Header = () => {
  return (
    <Wrapper>
      <h1>
        <Title>Where's</Title>
        <TitleRight> Waldo?</TitleRight>
      </h1>
    </Wrapper>
  );
};
export default Header;
