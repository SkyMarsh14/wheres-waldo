import styled from "styled-components";
import pokemon from "./../assets/pokemon.jpeg";
import shellder from "./../assets/shellderImg.png";
import meowth from "../assets/meowthImg.png";
import psyduck from "../assets/psyduckImg.png";
import Map from "../components/Map";
import { createContext, useContext, useState } from "react";
const options = [
  { name: "Shellder", src: shellder },
  { name: "Meowth", src: meowth },
  { name: "Psyduck", src: psyduck },
];
const MapContext = createContext({
  notFound: options,
});
const Wrapper = styled.div``;
const Credit = styled.div`
  font-size: 1.5em;
  display: flex;
  justify-content: center;
`;

const Pokemon = () => {
  const [notFound, setNotFound] = useState(options);
  return (
    <MapContext value={notFound}>
      <Wrapper>
        <Credit>
          <div>
            Pokè Vacay by
            <a
              target="_blank"
              rel="noopner noreferrer"
              href="https://www.reddit.com/r/wimmelbilder/comments/1mbj12x/pokè_vacay_artwork_created_by_me/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button"
            >
              Arcane Allegory
            </a>
          </div>
        </Credit>
        <Map src={pokemon} alt="Pokemon Map" options={options} />
      </Wrapper>
    </MapContext>
  );
};
export default Pokemon;
