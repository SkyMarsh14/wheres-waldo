import styled from "styled-components";
import pokemon from "./../assets/pokemon.jpeg";
import Map from "../components/Map";
import { createContext, useContext, useState } from "react";
const MapContext = createContext({
  notFound: ["Shllder", "Meowth", "Psyduck"],
});
const Wrapper = styled.div``;
const Credit = styled.div`
  font-size: 1.5em;
  display: flex;
  justify-content: center;
`;

const Pokemon = () => {
  const [notFound, setNotFound] = useState(["Shellder", "Meowth", "Psyduck"]);
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
        <Map
          src={pokemon}
          alt="Pokemon Map"
          options={["Pokemon 1", "Pokemon 2", "Pokemon 3"]}
        />
      </Wrapper>
    </MapContext>
  );
};
export default Pokemon;
