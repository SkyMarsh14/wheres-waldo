import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import medal from "../assets/medal.png";
import styled from "styled-components";
import HomeLink from "../components/HomeLink";
const Table = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin: 2em 0;
`;
const Wrapper = styled.div`
  max-width: 800px;
  margin: auto;
`;
const MedalIcon = styled.span`
  display: inline-block;
  background-image: url(${medal});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 1em;
  height: 1em;
  position: relative;
  top: 0.1em;
`;
const Caption = styled.caption`
  font-size: 2em;
  font-weight: 800;
  margin: 1em;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;
const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
`;
const Tr = styled.tr`
  &:hover {
    background-color: #ddd;
  }
`;
const Leaderboard = () => {
  const { mapId } = useParams();
  const baseUrl = import.meta.env.VITE_BACKEND_URL;
  const [map, setMap] = useState(null);
  const [leaderboard, setLeaderboard] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const [lbRes, mapRes] = await Promise.all([
          fetch(baseUrl + `leaderboard/${mapId}`),
          fetch(baseUrl + `map/all`),
        ]);
        const [lbJson, mapJson] = await Promise.all([
          lbRes.json(),
          mapRes.json(),
        ]);
        setMap(mapJson);
        setLeaderboard(lbJson);
      } catch (err) {
        setError(err);
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  if (loading) return <p>loading...</p>;
  if (error) return <p>A network error was encountered</p>;
  return (
    <>
      <Wrapper>
        <Table>
          <Caption>
            <MedalIcon />
            {leaderboard.mapName}
            <MedalIcon />
          </Caption>
          <thead>
            <Tr>
              <Th>Rank</Th>
              <Th>Player Name</Th>
              <Th>Time</Th>
            </Tr>
          </thead>
          <tbody>
            {leaderboard.record.map((record, index) => (
              <Tr key={record.id}>
                <Td>{index + 1}</Td>
                <Td>{record.username}</Td>
                <Td>{record.timeSeconds}</Td>
              </Tr>
            ))}
          </tbody>
        </Table>
        <HomeLink to="/">Return to Home</HomeLink>
      </Wrapper>
    </>
  );
};
export default Leaderboard;
