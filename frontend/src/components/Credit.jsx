import styled from "styled-components";
import MapContext from "../../util/MapContext";
import { useContext } from "react";
const Wrapper = styled.div``;
function capitazlieFirstLetter(string) {
  return string.charAt(0).toUpperCase() + String(string).slice(1);
}
const Credit = () => {
  const { credit } = useContext(MapContext);
  return (
    <Wrapper>
      {capitazlieFirstLetter(credit.title)} by
      <a href={credit.link}>{capitazlieFirstLetter(credit.author)}</a>
    </Wrapper>
  );
};
export default Credit;
