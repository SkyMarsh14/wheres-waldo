import styled from "styled-components";
import pokemonMap from "../assets/maps/pokemon.jpeg";
import { useNavigate } from "react-router-dom";
const maps = [{ img: pokemonMap, name: "Pokè Vacay", id: 1 }];
const MapsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-template-rows: 350px;
  padding: 1em;
  justify-content: center;
`;
const Card = styled.div`
  display: grid;
  grid-template-rows: 1fr 2.3em;
  max-width: 350px;
  border: 1px solid black;
  border-radius: 10px;
  transition-property: color, border-color, transform;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  &:hover {
    transform: translateY(-3%);
    border-color: #ff637f;
    color: #ff637f;
  }
`;
const Img = styled.img`
  object-fit: cover;
  height: 100%;
`;
const MapName = styled.div`
  text-align: center;
  align-self: center;
  font-weight: 500;
  font-size: 1.3em;
`;
const MapSelection = () => {
  const navigate = useNavigate();
  function handleClick(e, id) {
    navigate(`/maps/${id}`, { viewTransition: true });
  }
  return (
    <MapsWrapper>
      {maps.map((map) => (
        <Card key={map.id} onClick={(e) => handleClick(e, map.id)}>
          <Img src={map.img}></Img>
          <MapName>{map.name}</MapName>
        </Card>
      ))}
    </MapsWrapper>
  );
};
export default MapSelection;
