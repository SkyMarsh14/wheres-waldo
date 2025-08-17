import styled from "styled-components";
import pokemonMap from "../assets/maps/pokemon.jpeg";
const MapsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-template-rows: 350px;
  padding: 1em;
  justify-content: center;
`;
const Card = styled.div`
  display: grid;
  grid-template-rows: 1fr 1.5em;
  max-width: 350px;
  border: 2px solid black;
`;
const Img = styled.img`
  object-fit: cover;
  height: 100%;
`;
const MapName = styled.div`
  text-align: center;
  align-self: center;
`;
const MapSelection = () => {
  return (
    <MapsWrapper>
      <Card>
        <Img src={pokemonMap}></Img>
        <MapName>Pokè Vacay</MapName>
      </Card>
    </MapsWrapper>
  );
};
export default MapSelection;
