import styled from "styled-components";
import MapContext from "../util/MapContext";
import { useContext } from "react";
const Wrapper = styled.div`
  position: absolute;
  font-family: "Chewy";
  font-size: 5vw;
  top: 0.5em;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 800;
  color: #002f53;
  text-shadow: 2px 2px white;
  white-space: nowrap;
`;
const Link = styled.a`
  color: #002f53;
  &:visited {
    color: #002f53;
  }
`;
function capitazlieFirstLetter(string) {
  return string.charAt(0).toUpperCase() + String(string).slice(1);
}
const Credit = () => {
  const { credit } = useContext(MapContext);
  return (
    <Wrapper>
      {capitazlieFirstLetter(credit.title)} by
      <Link target="_blank" href={credit.link}>
        {capitazlieFirstLetter(credit.author)}
      </Link>
    </Wrapper>
  );
};
export default Credit;
