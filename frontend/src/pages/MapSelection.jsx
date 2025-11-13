import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useGet from "../hooks/useGet";
const MapsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-auto-rows: 350px;
  padding: 1em;
  grid-row-gap: 2em;
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
  const url = import.meta.env.VITE_BACKEND_URL + "map/all";
  const { data, error, loading } = useGet(url);
  function handleClick(e, id) {
    navigate(`/maps/${id}`, { viewTransition: true });
  }
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Server Error</p>;
  return (
    <MapsWrapper>
      {data.map((map) => (
        <Card key={map.id} onClick={(e) => handleClick(e, map.id)}>
          <Img src={map.url}></Img>
          <MapName>{map.name}</MapName>
        </Card>
      ))}
    </MapsWrapper>
  );
};
export default MapSelection;
