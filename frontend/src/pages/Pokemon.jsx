import styled from "styled-components";
import pokemon from "./../assets/pokemon.jpeg";
import shellder from "./../assets/shellderImg.png";
import meowth from "../assets/meowthImg.png";
import psyduck from "../assets/psyduckImg.png";
import Map from "../components/Map";
const targets = [
  { name: "Shellder", src: shellder, found: false },
  { name: "Meowth", src: meowth, found: false },
  { name: "Psyduck", src: psyduck, found: false },
];
const credit = {
  title: "Pokè Vacay",
  link: "https://www.reddit.com/r/wimmelbilder/comments/1mbj12x/pokè_vacay_artwork_created_by_me/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
  author: "Arcane Allegory",
};
const Wrapper = styled.div``;
const Pokemon = () => {
  return (
    <Wrapper>
      <Map
        src={pokemon}
        alt="Pokemon Map"
        target={targets}
        mapId="1"
        credit={credit}
      />
    </Wrapper>
  );
};
export default Pokemon;
